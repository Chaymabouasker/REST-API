const mongoose=require('mongoose');
const{Schema,model}=mongoose;
const UserSchema=new Schema({
    name:{type:"string",required:true},
    email:{type:"string",required:true},
})
const users=model('users',UserSchema);
module.exports=users;