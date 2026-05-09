import {
  getAllTracks,
  createTrack,
  getTrackById,
  updateTrack,
  deleteTrack,
  getGenreStats,
  getArtistSum,
  getMinMaxStats,
} from "../services/TrackService.js";

export async function getAll(req, res) {
  try {
    const tracks = await getAllTracks();
    res.json({ data: tracks, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function create(req, res) {
  try {
    const track = await createTrack(req.body);
    res.status(201).json({ data: track, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getById(req, res) {
  try {
    const track = await getTrackById(req.params.id);
    if (!track) return res.status(404).json({ error: "Track not found" });
    res.json({ data: track, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function update(req, res) {
  try {
    const track = await updateTrack(req.params.id, req.body);
    res.json({ data: track, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function remove(req, res) {
  try {
    const track = await deleteTrack(req.params.id);
    res.json({ data: track, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getStats(req, res) {
  try {
    const stats = await getGenreStats();
    res.json({ data: stats, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTopArtists(req, res) {
  try {
    const stats = await getArtistSum();
    res.json({ data: stats, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMinMax(req, res) {
  try {
    const stats = await getMinMaxStats();
    res.json({ data: stats, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
