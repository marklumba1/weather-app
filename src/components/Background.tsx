import React from "react";
import { motion } from "framer-motion";

interface BackgroundProps {
  weatherCondition: string;
}

const colors: Record<string, string> = {
  Clear: "#60a5fa",        // sky blue
  Clouds: "#94a3b8",       // grayish blue
  Rain: "#475569",         // deep slate
  Snow: "#bae6fd",         // pale icy blue
  Thunderstorm: "#1e293b", // dark storm
  Mist: "#9ca3af",         // soft gray
  Default: "#60a5fa",      // fallback blue
};

const Background: React.FC<BackgroundProps> = ({ weatherCondition }) => {
  const backgroundColor = colors[weatherCondition] || colors.Default;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-10"
      animate={{ backgroundColor }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
};

export default Background;
