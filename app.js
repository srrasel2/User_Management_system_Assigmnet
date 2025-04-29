// import express from "express";

const express = require("express");
const router = require("./src/routs/api");

const app=new express();

app.use("/api/v1",router)

module.exports=app;