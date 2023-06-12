const mongoose = require('mongoose')

const transcationSchema = new mongoose.Schema(
    {
      userid: {
        type: String,
        required: [true, "userid is required"]
      },
      amount: {
        type: Number,
        required: [true, "amount is required"],
      },
      type: {
        type: String,
        required: [true, "type is required"],
      },
      category: {
        type: String,
        requires: [true, "cat is required"],
      },
      reference: {
        type: String,
      },
      description: {
        type: String,
        required: [true, "desc is required"],
      },
      date: {
        type: Date,
        required: [true, "data is required"],
      },
    },
    { timestamps: true }
  );


const transcationModel = mongoose.model('transcations', transcationSchema);
module.exports = transcationModel;