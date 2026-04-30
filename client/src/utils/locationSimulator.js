import { sendLocation } from "../api/api";

let interval = null;

export function startTracking(user) {
  if (!user || interval) return;

  let lat = 31.7784;
  let lng = 35.2066;

  interval = setInterval(async () => {
    lat += (Math.random() - 0.5) * 0.0005;
    lng += (Math.random() - 0.5) * 0.0005;

    await sendLocation({
      user_id: user.id,
      latitude: lat,
      longitude: lng,
      time: new Date().toISOString(),
    });
  }, 60000);
}

export function stopTracking() {
  clearInterval(interval);
  interval = null;
}