import mongoose, { Schema, model, models } from "mongoose";

const ResourceDownloadSchema = new Schema(
  {
    resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    industry: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default models.ResourceDownload ||
  model("ResourceDownload", ResourceDownloadSchema);
