import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: "string",
        required: true,
        unique: true
    },
    email:{
        type: "string",
        required: true,
        unique: true
    },
    username:{
        type: "string",
        required: true,
        unique: true
    },
    photo:{
        type: "string",
        required: true,
    },
    firstName:{
        type: "string",

    },
    lastName: {
        type: "string",
    },
    planId:{
        type: Number,
        default: 1,
    },
    creditBalance:{
        type: Number,
        default: 10,
    }

})



export const User = models?.User || model("User", UserSchema);