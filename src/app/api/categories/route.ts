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

export async function GET(request: Request) {
  await dbConnect();

  const url = new URL(request.url);
  const populate = url.searchParams.get("populate");

  try {
    const categories = await Category.find();

    let response;
    if (populate && populate === "*") {
      response = categories;
    } else {
      response = categories.map((category) => ({ name: category.name }));
    }

    return new Response(JSON.stringify(response), {
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
