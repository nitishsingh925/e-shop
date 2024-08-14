import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

// Define the Banner schema with type safety
const bannerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

// Use an existing model or create a new one
const Banner = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);

// Function to handle GET requests
export async function GET(request: Request) {
  // Connect to the database
  await dbConnect();

  try {
    // Fetch banners from the database
    const banners = await Banner.find();

    // Return a successful response
    return new Response(JSON.stringify(banners), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Return an error response in case of failure
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve data",
        error: error.message,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
