import mongoose, { Document, Model, Schema } from "mongoose";

interface IStore extends Document {
  pfps: string[];         // Available profile pictures in the store
  backgrounds: string[];  // Available backgrounds in the store
}

const StoreSchema: Schema<IStore> = new mongoose.Schema(
  {
    pfps: { type: [String], default: [] },
    backgrounds: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Store: Model<IStore> =
  mongoose.models.Store || mongoose.model<IStore>("Store", StoreSchema);

export default Store;
