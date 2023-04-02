const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    comments:String,
   
});
module.exports=mongoose.model("comments",productSchema);