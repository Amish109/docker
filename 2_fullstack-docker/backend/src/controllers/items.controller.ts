import { Request, Response } from "express";
import { pool } from "../config/db.js";
import SuccessResponse from "../utils/success_response.js";

// GET all items
export const getAllItems = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM items ORDER BY created_at DESC");
    const response = new SuccessResponse(200, "Items fetched successfully", result.rows);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({ status: 500, message: "Error fetching items", data: [], error });
  }
};

// GET single item by ID
export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ status: 404, message: "Item not found", data: [], error: "Not found" });
    }
    const response = new SuccessResponse(200, "Item fetched successfully", result.rows);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching item:", error);
    return res.status(500).json({ status: 500, message: "Error fetching item", data: [], error });
  }
};

// POST create new item
export const createItem = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ status: 400, message: "Name is required", data: [], error: "Validation error" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
      [name, description || ""]
    );
    const response = new SuccessResponse(201, "Item created successfully", result.rows);
    return res.status(201).json(response);
  } catch (error) {
    console.error("Error creating item:", error);
    return res.status(500).json({ status: 500, message: "Error creating item", data: [], error });
  }
};

// PUT update item
export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const existing = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    if (existing.rows.length === 0) {
      return res.status(404).json({ status: 404, message: "Item not found", data: [], error: "Not found" });
    }

    const result = await pool.query(
      "UPDATE items SET name = COALESCE($1, name), description = COALESCE($2, description) WHERE id = $3 RETURNING *",
      [name, description, id]
    );
    const response = new SuccessResponse(200, "Item updated successfully", result.rows);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error updating item:", error);
    return res.status(500).json({ status: 500, message: "Error updating item", data: [], error });
  }
};

// DELETE item
export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM items WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ status: 404, message: "Item not found", data: [], error: "Not found" });
    }
    const response = new SuccessResponse(200, "Item deleted successfully", result.rows);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ status: 500, message: "Error deleting item", data: [], error });
  }
};
