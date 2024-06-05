import mongoose from "mongoose";

const accountDetails = mongoose.Schema(
  {
    accountName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountDetails);

export default Account;
