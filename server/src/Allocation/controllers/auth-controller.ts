import { Request, Response } from "express";
import { Employee } from "../models/Employee.js";
import { generateTokens } from "../utils/generateTokens.js";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import {
  handleApiBadRequest,
  handleApiNotFound,
} from "../../FileChecker/utils/errorHandlers.js";

let refreshTokens: string[] = []; // Temporary in-memory store

// ----------------------
// REGISTER
// ----------------------
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, emp_name, role } = req.body;

    if (!email || !password || !emp_name || !role)
      return handleApiNotFound(res, "Details");

    // Check existing user
    const existing = await Employee.findOne({ where: { email } });

    if (existing) return handleApiBadRequest(res, "User already exists");

    // Create new employee
    const newUser = await Employee.create({
      email,
      password,
      emp_name,
      role: role || "employee",
      verified: false,
      efficiency: 0,
    });

    res.status(201).json({ message: "User registered", user: newUser });
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

    const user = await Employee.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(user.emp_id);
    refreshTokens.push(refreshToken);

    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: false, // true in production
      })
      .json({
        accessToken,
        user: {
          emp_id: user.emp_id,
          emp_name: user.emp_name,
          email: user.email,
          role: user.role,
        },
      });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ----------------------
// REFRESH TOKEN
// ----------------------
export const refresh = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token)
    return res.status(401).json({ message: "No refresh token provided" });
  if (!refreshTokens.includes(token))
    return res.status(403).json({ message: "Invalid refresh token" });

  jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET!,
    (err: VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
      if (err) return res.status(403).json({ message: "Token invalid" });

      const { accessToken, refreshToken } = generateTokens(
        (decoded as JwtPayload).id
      );

      refreshTokens = refreshTokens.filter((t) => t !== token);
      refreshTokens.push(refreshToken);

      res
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
          secure: false,
        })
        .json({ accessToken });
    }
  );
};

// ----------------------
// LOGOUT
// ----------------------
export const logout = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  refreshTokens = refreshTokens.filter((t) => t !== token);

  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logged out" });
};
