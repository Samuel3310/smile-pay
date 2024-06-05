import mongoose from "mongoose";

const transactionDetails = mongoose.Schema({
  exchangeType: {
    type: String,
  },
});
