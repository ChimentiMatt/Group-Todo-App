const express = require('express')
const todoModel = require('../models/Todos.js')

module.exports = {
    getById: function (req, res, next) {
        todoModel.findById(req.params.todoId, function (err, todoInfo) {
            if (err) {
                next(err)
            } else {
                res.json({ status: 'success', message: 'todo item found', data: { todo: todoInfo } })
            }
        })
    },

    getAll: function (req, res, next) {
        let todosList = []

        todoModel.find({}, function (err, todos) {
            if (err) {
                next(err)
            } else {
                console.log(todos)
                for (let todo of todos) {
                    todosList.push({ id: todo._id, name: todo.name, complete: todo.complete })
                }
                res.json({ status: 'success', message: 'todo list found', data: { todos: todosList } })
            }
        })
    },

    create: function (req, res, next) {
        todoModel.create({
            name: req.body.name,
            complete: req.body.complete
        }, function (err, result) {
            if (err) {
                next(err)
            } else {
                res.json({ status: 'success', message: 'todo added successfully', data: result })
            }
        })
    },

    updateById: function (req, res, next) {
        todoModel.findByIdAndUpdate(req.params.todoId, {
            name: req.body.name,
            complete: req.body.complete
        }, function (err, todoInfo) {
            if (err) {
                next(err)
            } else {
                res.json({ status: 'success', message: 'todo updated successfully', data: todoInfo })
            }
        })
    },

    deleteById: function (req, res, next) {
        todoModel.findByIdAndRemove(req.params.todoId, function (err, todoInfo) {
            if (err) {
                next(err)
            } else {
                res.json({ status: 'success', message: 'todo deleted successfully' })
            }
        })
    }
}