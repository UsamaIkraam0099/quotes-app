import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  by: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

mongoose.model("Quote", quotesSchema);
