import dbConnect from "@/lib/dbConnect";
import mongoose, { Document, Model } from "mongoose";

interface IProduct extends Document {
  name: string;
  description: string;
  mrp: number;
  selling_price: number;
  item_quantity_type: string;
  slug: string;
  categories: string[];
  image: string;
}

const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  mrp: { type: Number, required: true },
  selling_price: { type: Number, required: true },
  item_quantity_type: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  categories: { type: [String], required: true },
  image: { type: String, required: true },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find();
    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to retrieve data", error }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
