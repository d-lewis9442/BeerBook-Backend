const { User } = require('../models')

const GetUser = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(1)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const YeetUser = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUser,
  GetUserById
  // CreateUser,
  // UpdateUser,
  // YeetUser
}
