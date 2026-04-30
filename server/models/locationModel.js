import pool from "../config/db.js";

export async function upsertLocation(user_id, latitude, longitude, time) {
  await pool.execute(
    `
    INSERT INTO locations (user_id, latitude, longitude, time)
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      latitude = VALUES(latitude),
      longitude = VALUES(longitude),
      time = VALUES(time)
    `,
    [user_id, latitude, longitude, time]
  );
}

export async function getAllLocations() {
  const [rows] = await pool.execute("SELECT * FROM locations");
  return rows;
}