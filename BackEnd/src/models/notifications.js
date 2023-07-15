// const express = require("express");

const mongoose = require("mongoose");

const NotificationsSchema = new mongoose.Schema({

    notifications: {
        type: String,
      },
     
});

///we are crate new collection
const Notifications = new mongoose.model("notifications",NotificationsSchema);

module.exports = Notifications;




