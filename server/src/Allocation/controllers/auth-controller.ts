import { Request, Response } from "express";
import { Employee } from "../models/Employee.js";
import jwt from "jsonwebtoken";
import {
  handleApiBadRequest,
  handleApiCreated,
  handleApiNotFound,
} from "../../FileChecker/utils/errorHandlers.js";
import bcrypt from "bcrypt";

// ----------------------
// REGISTER
// ----------------------
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, emp_name } = req.body;

    if (!email || !password || !emp_name)
      return handleApiNotFound(res, "Details");

    // Check existing user
    const existing = await Employee.findOne({ where: { email } });
    if (existing) return handleApiBadRequest(res);

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await Employee.create({
      email,
      password: hashedPassword,
      emp_name,
      role: "Designer",
      verified: false,
      efficiency: 0,
    });

    // Remove password before sending response
    const { password: _, ...safeUser } = newUser.get({ plain: true });

    return handleApiCreated(res, safeUser, "User");
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ----------------------
// LOGIN
// ----------------------
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return handleApiNotFound(res, "Credentials");

    // Find user
    const user = await Employee.findOne({ where: { email } });
    if (!user) return handleApiNotFound(res, "User");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return handleApiBadRequest(res, "Invalid Credentials");

    const accessToken = jwt.sign(
      { emp_id: user.emp_id },
      process.env.JWT_ACCESS_SECRET!,
      { expiresIn: "8h" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    });

    return res.status(200).json({
      accessToken,
      user: {
        emp_id: user.emp_id,
        emp_name: user.emp_name,
        email: user.email,
        role: user.role,
        verified: user.verified,
        efficiency: user.efficiency,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ----------------------
// LOGOUT
// ----------------------
export const logout = (req: Request, res: Response) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
