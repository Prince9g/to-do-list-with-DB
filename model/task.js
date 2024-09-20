const mongoose = require('mongoose');
const {Schema} = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://prince:FBJLK7CQ*5wKL.$@cluster0.g6mc9.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=Cluster0');
  console.log('database connected Successfully');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const newTask = new Schema({
    name: String,
    dueDate: String
});

exports.Task = mongoose.model('Task', newTask);



