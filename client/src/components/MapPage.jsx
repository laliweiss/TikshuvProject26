import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapPage() {
  const [locations, setLocations] = useState([]);

  const load = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/location");
      const data = await res.json();

      setLocations(Array.isArray(data) ? data : []);
    } catch (err) {
      setLocations([]);
    }
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <MapContainer center={[31.76, 35.21]} zoom={13} style={{ height: 500 }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((l) => (
        <Marker
          key={l.user_id}
          position={[Number(l.latitude), Number(l.longitude)]}
        />
      ))}
    </MapContainer>
  );
}