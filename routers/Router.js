const express=require('express');
const router=express.Router();
const users=require('../models/User');
router.post('/users', (req,res)=>{
       
         users.create(req.body,err=>{
            err?res.send('create user failed'): res.send('user added') ;
       })
     })


     router.get('/users',async(req, res)=>{
        try {
                    const getAllUsers = await users.find().exec()
                   res.status(200).json({users:getAllUsers})
                
            } catch (error) {
                   error? res.status(500).json({msg:'something went wrong'}):res.json({msg:'succeed'})
                }
     })
     router.put('/users/:id',(req,res)=>{
    
                const UpdateUser= users.findByIdAndUpdate(req.params.id,req.body,err=>err?res.send('get user failed'):res.send('succeed'))
        
            
         })
         router.delete('/users/:id',(req,res)=>{
    
               const UpdateUser= users.findByIdAndRemove(req.params.id,err=>err?res.send('get user failed'):res.send('succeed'))
            
            
         })


module.exports =router;