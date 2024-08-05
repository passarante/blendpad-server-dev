"use client";
import CreatePresaleNormalStep1 from "@/components/marketing/create/presale/normal/CreatePresaleNormalStep1";
import CreatePresaleNormalStep2 from "@/components/marketing/create/presale/normal/CreatePresaleNormalStep2";
import CreatePresaleNormalStep3 from "@/components/marketing/create/presale/normal/CreatePresaleNormalStep3";
import CreatePresaleNormalStep4 from "@/components/marketing/create/presale/normal/CreatePresaleNormalStep4";
import { cn } from "@/lib/utils";

import { Check, ChevronLeft } from "lucide-react";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreatePresalePage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  return (
    <div className="mt-20 p-6">
      <div
        onClick={() => {
          if (step == 1) {
            router.back();
          } else {
            setStep((prev) => prev - 1);
          }
        }}
        className="flex space-x-2 items-center cursor-pointer"
      >
        <ChevronLeft />
        <span className="text-sm">Back</span>
      </div>
      <div className="grid  grid-cols-4 gap-10 mt-12">
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 1 ? "text-white" : "text-gray-500"
          )}
        >
          <div className="absolute h-[1px] bg-gray-700 w-[330%] -top-5 left-1/2" />
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 1 ? "bg-green-500" : "bg-gray-500",
              step > 1 && "bg-green-500"
            )}
          >
            {step == 1 ? "1" : <Check className="w-4 h-4 text-black" />}
          </span>
          <h3 className="font-bol dtext-md">Listing Type</h3>
          <span className="text-sm text-center">
            Enter Your Token Address or Select Alternative Option
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 2 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 2 ? "bg-green-500" : "bg-gray-500",
              step > 2 && "bg-green-500"
            )}
          >
            {step == 2 ? "2" : <Check className="w-4 h-4 text-black" />}
          </span>
          <h3 className="font-bold text-md">Sale Tokenomics</h3>
          <span className="text-sm text-center">
            Set Sale Listing Details{" "}
            <span className="text-green-500">Docs</span>
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative",
            step == 3 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 3 ? "bg-green-500" : "bg-gray-500",
              step > 3 && "bg-green-500"
            )}
          >
            {step == 3 ? "3" : <Check className="w-4 h-4 text-black" />}
          </span>
          <h3 className="font-bold text-md">Additional Sale Options</h3>
          <span className="text-sm text-center">
            Add Optional Features to Your Sale
          </span>
        </div>
        <div
          className={cn(
            "flex flex-col p-4 items-center justify-center relative  ",
            step == 4 ? "text-white" : "text-gray-500"
          )}
        >
          <span
            className={cn(
              "rounded-full w-6 h-6 flex items-center justify-center absolute -top-8 text-white text-sm font-bold",
              step == 4 ? "bg-green-500" : "bg-gray-500"
            )}
          >
            4
          </span>
          <h3 className="font-bold text-md">Submit Your Sale</h3>
          <span className="text-sm text-center">
            Once Done Your Sale Gets Listed
          </span>
        </div>
      </div>
      {step == 1 && <CreatePresaleNormalStep1 step={step} setStep={setStep} />}
      {step == 2 && <CreatePresaleNormalStep2 step={step} setStep={setStep} />}
      {step == 3 && <CreatePresaleNormalStep3 step={step} setStep={setStep} />}
      {step == 4 && <CreatePresaleNormalStep4 step={step} setStep={setStep} />}
    </div>
  );
}
