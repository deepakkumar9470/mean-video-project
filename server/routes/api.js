const express = require('express');
const router = express.Router()


const Video = require('../model/video')

// Get all videos
router.get('/videos',async (req,res)=>{
    try {
        const getVideo = await Video.find()
        res.json(getVideo)
    } catch (err) {
        res.json({message:err});
    }
});

// Get particular videos
router.get('/video/:id',async (req,res)=>{
    try {
         const getvideobyId = await Video.findById({_id: req.params.id})
         res.json(getvideobyId)
    } catch (error) {
        res.json({message:err});
    }
});

// Post videos to database
router.post('/', async (req,res)=>{

   try {
    const newvideo = new Video({
        title : req.body.title,
        url : req.body.url,
        description : req.body.description,
    });
     const savedVideo = await newvideo.save();
     res.status(201).send(savedVideo);
    
    }catch(err){
       res.json({message:err});
    }
});

// Update videos to database

router.put('/video/:id',async (req, res)=>{
        if(!req.body) {
            return res.status(400).send({
            message: "Please fill all required field"
        });
        }
        try {
            const updatevideo = await Video.findByIdAndUpdate({_id:req.params.id},{title : req.body.title, description : req.body.description})    
            res.status(200).send(updatevideo)
        } catch (err) {
            res.json({message:err});
        }
});


// Delete videos from database
router.delete('/video/:id', async (req,res)=>{
        
    try {
      const delVideo = await Video.findByIdAndRemove({_id:req.params.id})
      res.status(401).send(delVideo);
     
     }catch(err){
        res.json({message:err});
     }
 });
 



module.exports = router