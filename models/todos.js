import mongoose from "mongoose";

const { Schema, model } = mongoose;

const todosschema = new Schema({
  title: { type : String, required: true},
});

const Todo = model('Todo', todosschema);
export default Todo;