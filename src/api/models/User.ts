import mongoose from 'mongoose';

export interface UserInput {
  name: string;
  company_name: string;
  users: [
    {
      name: string;
      email: string;
    }
  ];
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    // array of objects
    users: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
