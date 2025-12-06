import mongoose, { Schema, model, models } from "mongoose";

const AdminUserSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, required: true }, // hashed
    name: { type: String },
  },
  { timestamps: true }
);

export default models.AdminUser || model("AdminUser", AdminUserSchema);
