const transcationModel = require("../models/transcationModel");
const moment = require('moment')

const getAllTranscation = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transcationModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};



const deleteTranscation = async(req, res) => {
    try {
        await transcationModel.findOneAndDelete({ _id: req.body.transcationId });
        res.status(200).send("Transcation Deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const editTransection = async (req, res) => {
    try {
      await transectionModel.findOneAndUpdate(
        { _id: req.body.transacationId },
        req.body.payload
      );
      res.status(200).send("Edit SUccessfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  
  const addTransection = async (req, res) => {
    try {
      // const newTransection = new transectionModel(req.body);
      const newTransection = new transectionModel(req.body);
      await newTransection.save();
      res.status(201).send("Transection Created");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  module.exports = {
    getAllTranscation,
    addTransection,
    deleteTranscation,
    editTransection,
  };