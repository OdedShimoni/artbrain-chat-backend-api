import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const MessageSchema = new Schema(
    {
        sent_by_support: Boolean,
        text: String,
        visitor_ip: String,
        visitor_name: String
    },
    {
        collection: 'messages',
    }
);

MessageSchema.plugin(timestamps);

MessageSchema.index({ createdAt: 1, updatedAt: 1 });

export const Message = mongoose.model('Message', MessageSchema);
export const MessageTC = composeWithMongoose(Message);