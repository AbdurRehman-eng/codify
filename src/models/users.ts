import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  username: string;
  pfp: string;    
  background: string; 
  achievements: string[];
  assets: {
    pfps: string[]; // Purchased profile pictures
    backgrounds: string[]; // Purchased backgrounds
  };
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    pfp: { type: String, required: false, default: "hi" },       
    background: { type: String, required: false, default: "" },  
    achievements: { type: [String], default: [] 
},
    assets: {
      pfps: { type: [String], default: [] }, 
      backgrounds: { type: [String], default: [] } 
    }
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
