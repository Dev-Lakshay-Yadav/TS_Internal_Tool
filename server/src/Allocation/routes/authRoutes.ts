import express from "express";
import { register, login, logout } from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Access granted to protected profile route",
    user: (req as any).user,
  });
});
export default router;
