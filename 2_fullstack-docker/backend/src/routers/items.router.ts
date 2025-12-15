import { Router } from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/items.controller.js";

export const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", getItemById);
itemsRouter.post("/", createItem);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);
