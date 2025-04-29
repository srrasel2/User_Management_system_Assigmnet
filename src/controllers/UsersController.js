
//Create Controller
exports.createUser=(req, res) => {
    res.status(200).json({message:"User Created Successfully"})
}


//Read Controller
exports.readUser=(req, res) => {
    res.status(200).json({message:"User Read Successfully"})
}

//Update Controller
exports.updateUser=(req, res) => {
    res.status(200).json({message:"User Updated Successfully"})
}

//Update Controller
exports.deleteUser=(req, res) => {
    res.status(200).json({message:"User deleted Successfully"})
}


//Get All Users
exports.getAllUsers=(req, res) => {
    res.status(200).json({message:"All users fetched Successfully"})
}


//Get User by ID
exports.getUserByID=(req, res) => {
    res.status(200).json({message:"User fetched by ID"})
}


//User login
exports.loginUser=(req, res) => {
    res.status(200).json({message:"User login successfully"})
}


//User logout
exports.logoutUser=(req, res) => {
    res.status(200).json({message:"User logout successfully"})
}


//Change Password
exports.changepassword=(req, res) => {
    res.status(200).json({message:"Password changed successfully"})
}


//Update Profile
exports.updateProfile=(req, res) => {
    res.status(200).json({message:"User profile updated successfully"})
}


//Make Admin
exports.makeAdmin=(req, res) => {
    res.status(200).json({message:"User made admin successfully"})
}


//Remove Admin
exports.removeAdmin=(req, res) => {
    res.status(200).json({message:"Admin role removed successfully"})
}


//Search Users
exports.searchUsers=(req, res) => {
    res.status(200).json({message:"User search completed successfully"})
}


//Filter Users
exports.filterUsers=(req, res) => {
    res.status(200).json({message:"User filter completed successfully"})
}


//Block User
exports.blockUser=(req, res) => {
    res.status(200).json({message:"User bloced successfully"})
}


//Unblock User
exports.unblockUser=(req, res) => {
    res.status(200).json({message:"User unbloced successfully"})
}


//Verify Email
exports.verifyEmail=(req, res) => {
    res.status(200).json({message:"Email verified successfully"})
}

//Resend Verification
exports.resendVerification=(req, res) => {
    res.status(200).json({message:"Verified email resend"})
}


//Upload Profile Picture
exports.uploadProfilePicture=(req, res) => {
    res.status(200).json({message:"Profile picture uploaded successfully"})
}


//Delete Account
exports.deleteAccount=(req, res) => {
    res.status(200).json({message:"Account deleted successfully"})
}








