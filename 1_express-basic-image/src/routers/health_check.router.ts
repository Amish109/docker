import { Router } from "express";
import { healthCheck } from "../controllers/health_check.controller.js";

export const healthCheckRouter = Router();

healthCheckRouter.route('/').get(healthCheck);