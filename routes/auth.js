const router = require('express').Router()
const User = require('../models/User.js')
const { registerValidation, loginValidation } = require('../validation.js')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
  // validate data before creating user
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // check if user is already in the DB
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email already exists')

  // hash the pwd
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })
  try {
    const savedUser = await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/login', async (req, res) => {
  // validate date before login
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // check if email already exists in DB and is valid
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Email not found')

  // check if pwd is correct
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Invalid password')

  res.send('Logged in')
})


module.exports = router