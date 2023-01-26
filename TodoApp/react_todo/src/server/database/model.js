const mongoose = require('mongoose');
const todoSchema = require('./schema');

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

// model and schema
// schema 定义表的类型，每个数据是什么养的type
// model将schema映射为一个实体，让人可以使用他
