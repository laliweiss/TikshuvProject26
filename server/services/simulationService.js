import pool from "../config/db.js";
import { upsertLocation } from "../models/locationModel.js";

const BASE_LAT = 31.7683;
const BASE_LNG = 35.2137;

const rand = () => (Math.random() - 0.5) * 0.001;

export async function simulateMovement() {
  const [users] = await pool.execute("SELECT id FROM users");

  for (const u of users) {
    await upsertLocation(
      u.id,
      BASE_LAT + rand(),
      BASE_LNG + rand(),
      new Date()
    );
  }
}