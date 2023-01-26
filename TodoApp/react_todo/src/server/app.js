var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

//connect to database
const connectToMongoose = require('./database/connect');
const Todo = require('./database/model'); // model is an entity, can do some operations
connectToMongoose();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// BE: base url => localhost:3002  => if you want to consume allTodos => localhost:3002/allTodos
// FE: base url => localhost:3000 => localhost:3000/allTodos, localhost:3002/allTodos
// reflect: proxy

// mock database
// database通过id进行查找

const verifyTodoPayload = ({ req, isAddTodo = false }) => {
  return isAddTodo
    ? req.body && req.body.content && req.body.isCompleted !== undefined
    : req.body && req.body.id;
};

//1. (GET method) => return all todos in the mock database
// api address an callback function {request, response}
app.get('/allTodos', async (_, res) => {
  // 所有数据库操作都是异步操作
  const todosDataBase = await Todo.find({});
  const todoList = todosDataBase.map(({ content, isCompleted, id }) => {
    return {
      content,
      isCompleted,
      id,
    };
  });
  res.json(todoList);
});

//2. (POST method) => pass content and isCompleted to the payload => add a todo
// all the data will be put in the req.body. if we put { content: 'write some code', isCompleted: false }, content => req.body.content, isCompleted => req.body.req.isCompleted
app.post('/addTodo', async (req, res) => {
  if (verifyTodoPayload({ req, isAddTodo: true })) {
    // todos = [...todos, req.body];
    const todo = new Todo({
      content: req.body.content,
      isCompleted: req.body.isCompleted,
      id: uuidv4(),
    });

    const newTodo = todo.save();
    if (todo == newTodo) {
      res.status(201).json({
        message: 'succeed',
        status: '201',
        newTodo: {
          content: newTodo.content,
          isCompleted: newTodo.isCompleted,
          id: newTodo.id,
        },
      });
      return;
    }

    res.status('400').json({
      error: 'failed',
      message: 'Add todo failed',
    });
    return;
  }

  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

//3. (PUT method) => pass the index of the todo to the paylaod => Mod a todo
//index >=0 && index < todos.length
app.put('/modTodo', async (req, res) => {
  if (verifyTodoPayload({ req })) {
    const id = req.body.id;
    const queryResult = await Todo.findOne({ id: id }); // 属性: value
    const { modifiedCount } = await queryResult.updateOne({
      isCompleted: !queryResult.isCompleted,
    });
    // to see if is successful
    if (modifiedCount) {
      res.status('200').json({
        message: 'update succeed',
      });
      return;
    }

    res.status('404').json({
      error: 'update failed',
      message: 'modify todo failed',
    });
    return;
  }
  //error handling
  res.status('404').json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

//4. (DELETE method) => pass the index of the todo to the paylaod => delete a todo
app.delete('/delTodo', async (req, res) => {
  if (verifyTodoPayload({ req })) {
    const index = req.body.id;
    const { deletedCount } = await Todo.deleteOne({ id: index });
    if (deletedCount) {
      res.status('200').json({
        message: 'delete succceed',
      });
      return;
    }
    res.status('404').json({
      error: 'delete failed',
      message: 'delete todo failed',
    });
    return;
  }
  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
