const mongoose = require("mongoose");
const bcrypt=require('bcrypt')
const validator=require('validator')
const Scheme = mongoose.Schema;

const userSchema = new Scheme(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true ,unique:true},


    profilepicture: { type: String, default: null },
    favoriteAnimes: {
      type: mongoose.Types.ObjectId,
      default: null,
      ref: "animes",
    },
  },
  { timestamps: true }
);


userSchema.statics.signup= async function (password,email,username){


    if(!email||!password||!username){
        throw new Error('please fill in all the inputs')
    }
    const exists=await this.findOne({email})


    if(exists){
        throw new Error('email is already taken')
    }

    if(!validator.isEmail(email)){
        throw new Error('invalid email')
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("password is not strong enough")
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const user=await this.create({username,password:hashedPassword,email})

    return user
}
userSchema.statics.login=async function (email,password){
    if(!email||!password){
        throw new Error('please fill in all the inputs')
    }
    const user=await this.findOne({email})

    if(!user){
        throw new Error('wrong email')
    }

    else{
        const auth=await bcrypt.compare(password,user.password)

        if(!auth){
           throw new Error('wrong password')
        }
        return user

    }


}
module.exports = mongoose.model("user", userSchema);
