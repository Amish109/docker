import { Router } from "express";
import { healthCheckRouter } from "./health_check.router.js";
import { itemsRouter } from "./items.router.js";

export const api_router = Router();

api_router.use('/health', healthCheckRouter);
api_router.use('/items', itemsRouter);





// Handles all routes under /api then passes them to respective routers example: /health -> healthCheckRouter then that router handles which controller to call on what sub route 
// example /user will be handled by userRouter and in that router we will define which controller to call on what sub route 
// example /user/id => will call controller to get user by id and /user/profile => will call controller to get user profile etc.