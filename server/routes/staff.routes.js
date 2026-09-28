import { Router } from "express";
import { StaffController as c } from "../controllers/staff.controller.js";
import {
  validateCreate,
  validateUpdate,
} from "../validations/staff.validation.js";

export const staffRoutes = Router();

staffRoutes.get("/", c.list);
staffRoutes.get("/:id", c.getOne);
staffRoutes.post("/", validateCreate, c.create);
staffRoutes.put("/:id", validateUpdate, c.update);
staffRoutes.delete("/:id", c.remove);
