import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

// Define the Banner schema with type safety and timestamps
const bannerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true }, // Add a type field to categorize banners
  },
  { timestamps: true }
); // Add timestamps to track creation and modification

// Use an existing model or create a new one
const Banner = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);

// Function to handle GET requests
export async function GET(request: Request) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse query parameters
    const url = new URL(request.url);
    const type = url.searchParams.get("type");

    // Fetch banners from the database, optionally filtering by type
    const query = type ? { type } : {};
    const banners = await Banner.find(query).select("name image type");

    // Return a successful response
    return new Response(JSON.stringify(banners), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // Log the error (in all environments)
    console.error("Database Error:", error);

    // Return an error response in case of failure
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve banners",
        error: error.message, // Include the error message in all environments
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
