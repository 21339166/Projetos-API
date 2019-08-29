const mongoose = require("mongoose");

const CpfSchema = new mongoose.Schema({
    title:{
        type: Number,
        required: true,
    },
    description:{
        type: Number,
        required: true,
    },
    url:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

mongoose.model("Cpf", CpfSchema);