// components/Amenities.tsx
"use client";
import { FaSnowflake, FaBath, FaWifi, FaBed, FaMountain } from "react-icons/fa";
import { GiRobe } from "react-icons/gi";
import { PiHairDryerFill } from "react-icons/pi";
import { BsFillSafeFill } from "react-icons/bs";
import { TbSmokingNo } from "react-icons/tb";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { LuLampDesk } from "react-icons/lu";

const amenities = [
  { icon: <FaBed />, label: "Queen size bed (Large Double Bed)" },
  { icon: <FaBath />, label: "Private Bathroom with Shower" },
  { icon: <FaWifi />, label: "Wifi" },
  { icon: <FaSnowflake />, label: "Individually controlled air conditioning" },
  { icon: <GiRobe />, label: "Bathrobes" },
  { icon: <LuLampDesk />, label: "Desk" },
  { icon: <FaHouseChimneyWindow />, label: "Openable windows" },
  { icon: <PiHairDryerFill />, label: "Hair Dryer" },
  { icon: <BsFillSafeFill />, label: "In-room safe" },
  { icon: <TbSmokingNo />, label: "No smoking" },

  { icon: <FaMountain />, label: "Mountain view" },
];

const Ameneties = () => {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-[28px] leading-[34px] text-riad_primary font-light mb-8">
        Amenities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="text-3xl text-riad_secondary">{item.icon}</div>
            <p className="text-sm text-riad_primary">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ameneties;
