import express from "express";

import { updateProfile } from "../controllers/profile.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const route = express.Router();

route.put("", protectRoute, updateProfile);

export default route;