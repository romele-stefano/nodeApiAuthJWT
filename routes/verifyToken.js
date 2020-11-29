const jwt = require('jsonwebtoken')

// create middleware function we can add to all the routes where user must be authorized 
module.exports = function(req, res, next){
  const token = req.header('auth-token')
  if (!token) return res.status(401).send('Access Denied')

  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET) // will return the user id
    req.user = verified
    next()
  }catch(err){
    res.status(400).send('Invalid token')
  }
}

