const router = require('express').Router()
const verify = require('./verifyToken.js')

router.get('/', verify, (req, res) => {
  res.json({ 
    posts: { 
      title: 'My first post',
      description: 'Random data you shouldn\'t access'
    }
  })

  // with the JWT we can find info about the user like
  // User.findbyOne({ _id: req.user })
})


module.exports = router