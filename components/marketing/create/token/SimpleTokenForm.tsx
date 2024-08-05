"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { TokenTypes } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

type SimpleTokenFormProps = {
  handleTokenTypeChange: (text: TokenTypes) => void;
};

const SimpleTokenForm = ({ handleTokenTypeChange }: SimpleTokenFormProps) => {
  const [tokenType, setTokenType] = useState<TokenTypes>();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const [implementAntibot, setImplementAntibot] = useState(false);

  const createToken = () => {
    alert("Token Created");
  };

  useEffect(() => {
    if (type) setTokenType(type as TokenTypes);
  }, [type]);

  return (
    <div className="w-full flex gap-10">
      <div className="w-3/5">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col justify-center  space-y-4">
                <Label>Token Type</Label>
                <Select value={tokenType} onValueChange={handleTokenTypeChange}>
                  <SelectTrigger className="w-[180px] h-12">
                    {tokenType == "standart" && <span>Standart Token</span>}
                    {tokenType == "simple" && <span>Simple Token</span>}
                    {tokenType == "reflection" && <span>Reflection Token</span>}
                    {tokenType == "dividend" && <span>Dividend Token</span>}
                    {tokenType == "ultimate" && <span>Ultimate Token</span>}
                    {tokenType == "dynamic" && <span>Dynamic Tax Token</span>}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="simple">Simple Token</SelectItem>
                      <SelectItem value="standart">Standart Token</SelectItem>
                      <SelectItem value="reflection">
                        Reflection Token
                      </SelectItem>
                      <SelectItem value="dividend">Dividend Token</SelectItem>
                      <SelectItem value="ultimate">Ultimate Token</SelectItem>
                      <SelectItem value="dynamic">Dynamic Tax Token</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Token Name</Label>
                <Input className="h-12 " />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Token Symbol</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Token Decimal</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Total Supply</Label>
                <Input className="h-12" />
              </div>
              <div className="flex items-center justify-center  ">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="border-white border"
                    checked={implementAntibot}
                    onCheckedChange={() =>
                      setImplementAntibot(!implementAntibot)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Implement Anti-Bot
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-2/5">
        <Card>
          <CardContent className="p-4">
            <h4 className="my-4 font-bold text-md">Create Token Information</h4>
            <ul className="text-gray-400 ">
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Token Type</span>
                <span className="capitalize">{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>AntiBot</span>
                <span>{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Token Name</span>
                <span>{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Token Symbol</span>
                <span>{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Token Decimals</span>
                <span>{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Total Supply</span>
                <span>{tokenType}</span>
              </li>
            </ul>
            <div className="w-full my-2 text-center">
              <h4 className="font-bold">Fee: 1 BNB</h4>
            </div>
            <Button
              onClick={createToken}
              className="w-full my-4 bg-teal-600 text-white hover:opacity-80 hover:bg-teal-600 text-xl"
            >
              Create Token
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimpleTokenForm;
