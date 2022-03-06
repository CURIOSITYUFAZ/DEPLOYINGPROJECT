import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    jobtitle: { type: String, required: true },
    phonenumber: { type: String, required: true },
    age: { type: String, required: true },
    country: { type: String, required: true },
    jobtype: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
