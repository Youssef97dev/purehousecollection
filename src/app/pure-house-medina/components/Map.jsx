import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] px-6 py-12">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1frmsurUU0zRO51DGau4x27c6x6wzTtY&hl=fr&ehbc=2E312F"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
