import { upsertLocation } from "../models/locationModel.js";

function randomMove(value) {
  const offset = (Math.random() - 0.5) * 0.0005;
  return Number(value) + offset;
}

export async function simulateMovement(users) {
  for (const user of users) {
    if (!user.latitude || !user.longitude) continue;

    const newLat = Number(user.latitude) + (Math.random() - 0.5) * 0.0005;
    const newLng = Number(user.longitude) + (Math.random() - 0.5) * 0.0005;

    await upsertLocation({
      user_id: user.id,
      latitude: Number(newLat.toFixed(6)),
      longitude: Number(newLng.toFixed(6)),
      time: new Date(),
    });
  }
}