import mongoose, {Schema} from "mongoose"


const subscriptionSchema = new Schema(
    {
        subscriber:{
            type: Schema.Types.ObjectId, // user is subscribing other channels
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, // user has channel and other users is subcribing to it.
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema);