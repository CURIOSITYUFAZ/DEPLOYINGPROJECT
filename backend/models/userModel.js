import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    country: { type: String, required: true},
    phonenumber: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    numofemployee: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
