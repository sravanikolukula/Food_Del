import foodModel from "../models/FoodModel.js";
import fs from 'fs'; 


const addFood = async (req,res)=>{ //functon to the add food into the database

    console.log(req.body);
    console.log(req.file);


    let image_filename=req.file.filename;

    const food = new foodModel({  //creating the new foodModel
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:req.file.filename
    })
    try{
        await food.save(); //saving the foodModel
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"error"})

    }
}

const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }
}

const removeFood = async(req,res)=>{

    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

export {addFood,listFood,removeFood}