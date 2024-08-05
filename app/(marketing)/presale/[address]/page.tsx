/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { presales } from "@/constants/presales";

import { useParams } from "next/navigation";

import PresaleDetailLeft from "@/components/marketing/presale/detail-page/PresaleDetailLeft";
import PresaleDetailRight from "@/components/marketing/presale/detail-page/PresaleDetailRight";

export default function PresaleDetailPage() {
  const { address: tokenAddress } = useParams();

  const presale = presales.find((p) => p.address === tokenAddress);

  if (!presale) return null;

  return (
    <div className="mt-20 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <PresaleDetailLeft presale={presale} />
        <PresaleDetailRight presale={presale} />
      </div>
    </div>
  );
}
