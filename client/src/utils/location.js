import { sendLocation } from "../api/api";

export function startSendingLocation(user) {
  setInterval(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      sendLocation({
        user_id: user.id,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        time: new Date().toISOString(),
      });
    });
  }, 60000);
}
export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
}