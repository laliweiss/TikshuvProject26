import { upsertLocation, getAllLocations } from "../models/locationModel.js";

export const updateLocation = async (req, res) => {
  const { user_id, latitude, longitude } = req.body;

  await upsertLocation(
    user_id,
    Number(latitude),
    Number(longitude),
    new Date()
  );

  res.json({ ok: true });
};

export const getLatestLocations = async (req, res) => {
  const data = await getAllLocations();
  res.json(data);
};