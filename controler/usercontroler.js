import User  from "../Schema/model.js";

export const AddUser = async (req,res) =>{
    const userData = req.body;
    
    try{

      const newUser = new User(userData);
      const savedUser = await newUser.save();
      res.status(201).json({message: savedUser})
    }
    catch(err){
      console.error('Error saving data:', err);
      res.status(404).json({message: err.message});
    }
};

export const getAllUsers = async (req,res) =>{

  try{
    const alluser = await User.find({});
    res.status(201).json({alluser});
  }catch(err){
      res.status(404).json("Fail to getting all users");
  }
 
}


export const EditUser = async (req,res) =>{
  try{
    const id = req.params.id;
    const FindUser = await User.findOne({_id:id});
    res.status(201).json({user:FindUser});
  }catch(err){
     res.status(404).json({message: err.message});
  }
   
}

export const UpdateUser = async (req,res) =>{
   try {
       await User.updateOne({_id:req.params.id},req.body);
       res.status(200).json({user:req.body});
   } catch (error) {
     res.status(404).json({message: error.message});
   }
}


export const deleteUser = async (req,res) =>{
     
  try{
    
    await User.deleteOne({_id:req.params.id});
    res.status(201).json({meaasge:"User Deleted succesfully"});

  }catch(err){
    res.status(404).json({message:err.message});
  }
}