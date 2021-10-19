const { List, users } = require('../models')
const jwt = require('jsonwebtoken')

exports.getAllLists = async (req, res, next) => {
  try {
    console.log(`req.user`, req.user)
    const lists = await List.findAll({ where: { userId: req.user.id } })
    res.json({ lists })
  }
  catch (err) {
    next(err)
  }
}

exports.getListById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await List.findOne({ where: { id, userId: req.user.id } })
    res.json({ list })
  }
  catch (err) {
    next(err)
  }
}

exports.createList = async (req, res, next) => {
  try {
    const { title, status } = req.body;
    const list = await List.create({
      title,
      status,
      userId: req.user.id
    })
    res.status(201).json({ list })
  }
  catch (err) {
    next(err)
  }
}

exports.updateList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const [rows] = await List.update({ title, status }, {
      where: {
        id,
        userId: req.user.id
      }
    })
    if (rows === 0) return res.status(400).json({ message: 'Update failed' })
    res.json({ message: 'Update successful' })
  }
  catch (err) {
    next(err)
  }
}

exports.deleteList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await List.destroy({
      where: {
        id,
        userId: req.user.id
      }
    })
    if (rows === 0) return res.status(400).json({ message: 'delete fail' })
    res.status(204).json()
  }
  catch (err) {
    next(err)
  }
}
