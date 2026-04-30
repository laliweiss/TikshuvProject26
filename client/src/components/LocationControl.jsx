import { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";
import { sendLocation } from "../api/api";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function Click({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

export default function LocationControl() {
  const { user } = useContext(AuthContext);
  const [pos, setPos] = useState(null);

  const handle = async (p) => {
    setPos(p);

    await sendLocation({
      user_id: user.id,
      latitude: p.lat,
      longitude: p.lng,
    });
  };

  return (
    <MapContainer
      center={[31.7683, 35.2137]}
      zoom={13}
      style={{ height: 400 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Click onClick={handle} />

      {pos && <Marker position={[pos.lat, pos.lng]} />}
    </MapContainer>
  );
}