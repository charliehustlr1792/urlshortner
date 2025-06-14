import mongoose from 'mongoose';

const shortUrlSchema = new mongoose.Schema({
    fullurl: {
        type: String,
        required: true,
    },
    shorturl: {
        type: String,
        required: true,
        unique: true,
        index:true, 
    },
    clicks: {
        type: Number,
        required: true,
        default: 0, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
}}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
export default ShortUrl;
