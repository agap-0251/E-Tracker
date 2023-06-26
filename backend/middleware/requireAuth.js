const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req,res,next) => {
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401).json({err : 'Authorization token required.'})
    }
    const token = await authorization.split(' ')[1]

    try{

        const {_id} = jwt.verify(token,process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    }catch(err) {
        console.log(err)
        return res.status(400).json({err : 'Request not authorized.'})
    }

}

module.exports = requireAuth