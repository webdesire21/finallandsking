import mongoose, { Schema, model, models } from "mongoose";

const ResourceSchema = new Schema(
  {
    slug: { type: String, unique: true, required: true },
    type: { type: String, required: true },
    industry: { type: String, required: true },

    title: { type: String, required: true },
    description: { type: String, required: true },

    question: { type: String },
    detailedDescription: { type: String },
    longDescription: { type: String },

    image: { type: String, required: true },
    imagebanner: { type: String },
    linkpdf: { type: String },
  },
  { timestamps: true }
);

export default models.Resource || model("Resource", ResourceSchema);
