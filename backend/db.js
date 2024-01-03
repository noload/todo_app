const mongoose = require("mongoose");

const { DB_URL, DB_NAME } = require("./config");

mongoose.connect(DB_URL + DB_NAME);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
