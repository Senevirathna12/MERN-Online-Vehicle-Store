import mongoose from 'mongoose';

const adminuserSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export const Admin = mongoose.model('Admin', adminuserSchema);
