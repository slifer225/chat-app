import cloudinary from "../lib/cloudinary.js";
import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
    try{
        console.log(req)
        const { profilePic } = await req.body;
        const userId = req.user._id;
        
        if(!profilePic){
            return res.status(400).json({message: "Profile pic is required"});
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);

        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new: true});

        res.status(200).json(updatedUser);

    }catch(error){
        console.log("error in update profile", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}