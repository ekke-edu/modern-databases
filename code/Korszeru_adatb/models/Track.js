import mongoose, { Schema } from "mongoose";

const trackSchema = new Schema(
  {
    track_name: { type: String, required: true },
    artist_name: { type: String, required: true },
    streams: Number,
    stream_change: Number,
    "7day": Number,
    genre: String,
    country: String,
    pos: Number,
    days: Number,
    viral_score: Number,
    trend: String,
    popularity_category: String,
    longevity: String
  },
  {
    collection: "playlist"
  }
);

const Track = mongoose.model("Track", trackSchema);
export default Track;