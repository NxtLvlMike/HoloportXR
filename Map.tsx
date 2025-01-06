import React, { useEffect, useRef } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
    });

    new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: 'User Location',
    });
  }, [latitude, longitude]);

  return <div ref={mapRef} className="w-full h-64 rounded-lg"></div>;
};

export default Map;