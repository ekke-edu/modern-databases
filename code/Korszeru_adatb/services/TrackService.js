import Track from "../models/Track.js";

export async function getAllTracks() {
  return await Track.find().limit(50);
}
export async function createTrack(trackData) {
  return await Track.create(trackData);
}
export async function getTrackById(id) {
  return await Track.findById(id);
}
export async function updateTrack(id, trackData) {
  return await Track.findByIdAndUpdate(id, trackData, { new: true });
}
export async function deleteTrack(id) {
  return await Track.findByIdAndDelete(id);
}

export async function getGenreStats() {
  return await Track.aggregate([
    { 
      $group: { 
        _id: "$genre", 
        dalok_szama: { $sum: 1 }, 
        atlagos_stream: { $avg: "$streams" } 
      } 
    },
    { $sort: { dalok_szama: -1 } }
  ]);
}

export async function getArtistSum() {
  return await Track.aggregate([
    { 
      $group: { 
        _id: "$artist_name",
        total_7day_streams: { $sum: "$7day" } 
      } 
    },
    { $sort: { total_7day_streams: -1 } },
    { $limit: 10 }
  ]);
}

export async function getMinMaxStats() {
  return await Track.aggregate([
    {
      $group: {
        _id: null,
        max_stream: { $max: "$streams" },
        min_stream: { $min: "$streams" },
      },
    },
  ]);
}