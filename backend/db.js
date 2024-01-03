const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://notesafe:vaibhav%40123K@cluster0.fsxrugd.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
