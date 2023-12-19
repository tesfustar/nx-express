import mongoose from 'mongoose';



const UserSchema = new mongoose.Schema(
  {
    broker: { type: mongoose.SchemaTypes.ObjectId, ref: 'Broker', default: null },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },
    password: { type: String, unique: true, select: false },
    profile_image: {
      type: String,
      default: 'https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
    },
    isVerified: { type: Boolean, default: false, select: false },
    hasFullInfo: { type: Boolean, default: false, select: false },
    isAccountSuspended: { type: Boolean, default: false },
    role: { type: String, default: 'User' },
    permissions: { type: [String], default: [] },
    deviceId: { type: String, default: null },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('User', UserSchema);


