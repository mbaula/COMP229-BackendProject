import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Product name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Product description is required'
    },
    price: {
        type: Number,
        required: 'Product price is required',
        min: [0, 'Product price cannot be negative']
    },
    quantity: {
        type: Number,
        required: 'Product quantity is required',
        min: [0, 'Product quantity cannot be negative']
    },
    category: {
        type: String,
        trim: true,
        required: 'Product category is required'
    }
});

export default mongoose.model('Product', ProductSchema);
