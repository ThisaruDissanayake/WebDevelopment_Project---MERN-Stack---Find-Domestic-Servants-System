import mongoose from "mongoose";

const servantSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required:true,
        },

        lastName:{
            type: String,
            required:true,
        },

        jobTitle:{
            type: String,
            required:true,
        },
        address:{
            type: String,
            required:true,
        },
        contactNo:{
            type: String,
            required:true,
        },
        experinceYears:{
            type: Number,
            required:true,
        },
        price:{
            type: Number,
            required:true,
        },
        city:{
            type: String,
            required:true,
        },
        worktype: {
            type: String,
            required: true,
            // enum: ["Part Time", "Full Time", "Both"], // Define allowed values
          },
        image:{
            type: String,
        },  
    },
    {
        timestamps:true,
    }
);



export const Servant = mongoose.model('Cat',servantSchema); 
