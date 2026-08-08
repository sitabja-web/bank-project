const userModel  = require ("../models/user.model")

// * user register controller 

// api/auth/register  


function userResgisterController(req ,res)  {

       const { enail , body , password }   = req.body

      const isExists = await userModel.findOne({
       email: email
      })

      if(isExists)  {
       return  res.status(422).json({
              message : "user already  exists with the email ",

              status : "failed"
       })
      }

      const user = await userModel.create({
       email , password , name
      })



      const token = jwt.sign({userID:user._id}, process.env.JWT_SECRET  , {expiresIN: "3d"})

      res.cookie("token"  ,token)  

      res.stauts(201).json({
       user: {
              _id: user._id,
              email: user.email,
              name: user.name
       }, token
      })
        
}



module.exports   =  {
       userResgisterController
}