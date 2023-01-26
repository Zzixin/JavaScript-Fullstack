// setup schema => setup model => use the model you created to query, udpate, delete entity in your database

const mongoose = require('mongoose');
/*
{
  content: "arggarae",
  isCompleted: false,
  id: "afeqihreqwirehqoj"
}
*/

//任何一个属性都要有type, required: 是否必须要有
// timestamp:when update? when add, 针对schema的属性
// 每次加入系统会生成一个id
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = todoSchema;
