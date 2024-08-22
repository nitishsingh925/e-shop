import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  icon: {
    url: String,
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find();

    return new Response(JSON.stringify(categories), {
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
