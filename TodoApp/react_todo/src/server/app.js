var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
let todos = [
  { content: 'write some code', isCompleted: false },
  { content: 'watch some movies', isCompleted: false },
  { content: 'listen some music', isCompleted: false },
];

const verifyTodoPayload = ({ req, isAddTodo = false }) => {
  return isAddTodo
    ? req.body && req.body.content && req.body.isCompleted !== undefined
    : req.body && req.body.index >= 0 && req.body.index < todos.length;
};

//1. (GET method) => return all todos in the mock database
// api address an callback function {request, response}
app.get('/allTodos', (_, res) => {
  // res.status(200).json
  // default value for status is 200, and the default for get status is also 200. 所以这儿省略了
  res.json(todos);
});

//2. (POST method) => pass content and isCompleted to the payload => add a todo
// all the data will be put in the req.body. if we put { content: 'write some code', isCompleted: false }, content => req.body.content, isCompleted => req.body.req.isCompleted
app.post('/addTodo', (req, res) => {
  if (verifyTodoPayload({ req, isAddTodo: true })) {
    todos = [...todos, req.body];
    res.status(201).json({
      message: 'succeed',
      status: '201',
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
app.put('/modTodo', (req, res) => {
  if (verifyTodoPayload({ req })) {
    const index = req.body.index;
    todos[index].isCompleted = !todos[index].isCompleted;
    res.json({
      message: 'succeed',
    });
    return;
  }
  //error handling
  res.status(404).json({
    error: 'failed',
    message: 'Input is not valid',
  });
});

//4. (DELETE method) => pass the index of the todo to the paylaod => delete a todo
app.delete('/delTodo', (req, res) => {
  if (verifyTodoPayload({ req })) {
    const index = req.body.index;
    todos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    res.json({
      message: 'succeed',
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
