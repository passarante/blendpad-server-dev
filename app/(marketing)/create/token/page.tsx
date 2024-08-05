"use client";
import DividendTokenForm from "@/components/marketing/create/token/DividendTokenForm";
import DynamicTaxTokenForm from "@/components/marketing/create/token/DynamicTaxTokenForm";
import ReflectionTokenForm from "@/components/marketing/create/token/ReflectionTokenForm";
import SimpleTokenForm from "@/components/marketing/create/token/SimpleTokenForm";
import StandartTokenForm from "@/components/marketing/create/token/StandartTokenForm";
import UltimateTokenForm from "@/components/marketing/create/token/UltimateTokenForm";
import { TokenTypes } from "@/types";

import { CheckIcon, CheckSquare, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { type } from "os";

import React from "react";

const CreateTokenPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const handleTokenTypeChange = (text: TokenTypes) => {
    router.push(`/create/token?type=${text}`);
  };

  return (
    <div className="mt-20 p-6">
      <Link
        href="/create"
        className="flex space-x-2 items-center cursor-pointer"
      >
        <ChevronLeft />
        <span className="text-sm">Back</span>
      </Link>
      <div className="w-3/5 flex p-2 rounded-lg border border-green-500 my-4 space-x-4">
        <div className="bg-green-600 h-6 w-6 flex items-center justify-center rounded-full">
          <CheckIcon className="text-black w-4 h-4" />
        </div>
        <span>
          Tokens are <span className="text-green-600 mr-2">Audited.</span>Audit
          badges on sales apply automatically.
        </span>
      </div>
      {type === "simple" && (
        <SimpleTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
      {type === "standart" && (
        <StandartTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
      {type === "reflection" && (
        <ReflectionTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
      {type === "dividend" && (
        <DividendTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
      {type === "ultimate" && (
        <UltimateTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
      {type === "dynamic" && (
        <DynamicTaxTokenForm handleTokenTypeChange={handleTokenTypeChange} />
      )}
    </div>
  );
};

export default CreateTokenPage;
