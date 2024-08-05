import React from "react";
import PresaleGridCard from "./PresaleGridCard";
import { presales } from "@/constants/presales";

export default function PresaleGrid() {
  const data = [...presales, ...presales, ...presales];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-4">
      {data.map((presale) => (
        <div
          key={presale.id * Math.floor(Math.random() * 10000)}
          className="w-full"
        >
          <PresaleGridCard presale={presale} />
        </div>
      ))}
    </div>
  );
}
