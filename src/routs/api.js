
const express = require("express");
const UserController = require("../controllers/UsersController");


const router= express.Router();

//Create Route
router.post("/create-user",UserController.createUser);

//Read Route
router.get("/read-user",UserController.readUser);

//Update Route
router.put("/update-user",UserController.updateUser);

//Delete Route
router.delete("/delete-user",UserController.deleteUser);

//Get All Users
router.get("/all-users",UserController.getAllUsers);

//Get User by ID
router.get("/user/:id",UserController.getUserByID);

//User Login
router.post("/login",UserController.loginUser);

//User Logout
router.post("/logout",UserController.logoutUser);

//Change Password
router.put("/change-password",UserController.changepassword);

//Update Profile
router.put("/update-profile",UserController.updateProfile);

//Make Admin
router.put("/make-admin/:id",UserController.makeAdmin);

//Remove Admin
router.put("/remove-admin/:id",UserController.removeAdmin);

//Search Users
router.get("/search",UserController.searchUsers);

//Filter Users
router.get("/filter",UserController.filterUsers);

//Block User
router.patch("/block-user/:id",UserController.blockUser);

//Unblock User
router.patch("/unblock-user/:id",UserController.unblockUser);

//Verify Email
router.post("/verify-email",UserController.verifyEmail);

//Resend Verification
router.post("/resend-verification",UserController.resendVerification);


//Uploaded Profile Picture
router.post("/upload-profile-picture",UserController.uploadProfilePicture);


//Delete Account
router.delete("/delete-account",UserController.deleteAccount);




module.exports=router;