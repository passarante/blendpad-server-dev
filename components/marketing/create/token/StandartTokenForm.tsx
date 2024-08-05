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
import { Check } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

type StandartTokenFormProps = {
  handleTokenTypeChange: (text: TokenTypes) => void;
};

type RouterType =
  | "pancakeswap"
  | "uniswap"
  | "melegaswap"
  | "apeswap"
  | "babydogeswap";

const StandartTokenForm = ({
  handleTokenTypeChange,
}: StandartTokenFormProps) => {
  const [tokenType, setTokenType] = useState<TokenTypes>();
  const [routerType, setRouterType] = useState<RouterType>("pancakeswap");
  const [baseToken, setBaseToken] = useState<"bnb" | "usdt" | "custom">("bnb");
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const [implementAntibot, setImplementAntibot] = useState(false);
  const [maxWallet, setMaxWallet] = useState(false);

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
                    id="maxWallet"
                    className="border-white border"
                    checked={maxWallet}
                    onCheckedChange={() => setMaxWallet(!maxWallet)}
                  />
                  <label
                    htmlFor="maxWallet"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add Max Wallet
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Marketing Wallet</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center  space-y-4">
                <Label>Base Token</Label>
                <Select
                  value={tokenType}
                  onValueChange={(token) =>
                    setBaseToken(token as "bnb" | "usdt" | "custom")
                  }
                >
                  <SelectTrigger className="w-[180px] h-12">
                    {baseToken == "bnb" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/bnb.webp"}
                          width={20}
                          height={20}
                          alt="bnb"
                        />
                        <span>BNB</span>
                      </div>
                    )}
                    {baseToken == "usdt" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/usdt.webp"}
                          width={20}
                          height={20}
                          alt="bnb"
                        />
                        <span>USDT</span>
                      </div>
                    )}
                    {baseToken == "custom" && <span>Custom</span>}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bnb" className="flex w-full">
                        <div className="flex  space-x-2">
                          <Image
                            src={"/images/create/token/bnb.webp"}
                            width={20}
                            height={20}
                            alt="bnb"
                          />
                          <span>BNB</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="usdt" className="flex w-full">
                        <div className="flex  space-x-2">
                          <Image
                            src={"/images/create/token/usdt.webp"}
                            width={20}
                            height={20}
                            alt="bnb"
                          />
                          <span>USDT</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col justify-center  space-y-4">
                <Label>Router</Label>
                <Select
                  value={tokenType}
                  onValueChange={(rType: RouterType) => setRouterType(rType)}
                >
                  <SelectTrigger className="w-[180px] h-12">
                    {routerType == "pancakeswap" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/pancakeswap.webp"}
                          width={20}
                          height={20}
                          className="rounded-full"
                          alt="pancakeswap"
                        />
                        <span>PancakeSwap</span>
                      </div>
                    )}

                    {routerType == "uniswap" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/uniswap.webp"}
                          width={20}
                          height={20}
                          className="rounded-full"
                          alt="uniswap"
                        />
                        <span>UniSwap</span>
                      </div>
                    )}
                    {routerType == "melegaswap" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/melegaswap.webp"}
                          width={20}
                          height={20}
                          className="rounded-full"
                          alt="melegaswap"
                        />
                        <span>MelegaSwap</span>
                      </div>
                    )}
                    {routerType == "apeswap" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/apeswap.webp"}
                          width={20}
                          height={20}
                          className="rounded-full"
                          alt="apeswap"
                        />
                        <span>Apeswap</span>
                      </div>
                    )}
                    {routerType == "babydogeswap" && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/images/create/token/babydogeswap.webp"}
                          width={20}
                          height={20}
                          className="rounded-full"
                          alt="babydogeswap"
                        />
                        <span>Babydogeswap</span>
                      </div>
                    )}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="pancakeswap" className="flex w-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={"/images/create/token/pancakeswap.webp"}
                            width={20}
                            height={20}
                            className="rounded-full"
                            alt="pancakeswap"
                          />
                          <span>Pancakewap</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="uniswap" className="flex w-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={"/images/create/token/uniswap.webp"}
                            width={20}
                            height={20}
                            className="rounded-full"
                            alt="uniswap"
                          />
                          <span>UniSwap</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="melegaswap" className="flex w-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={"/images/create/token/melegaswap.webp"}
                            width={20}
                            height={20}
                            className="rounded-full"
                            alt="melegaswap"
                          />
                          <span>MelegaSwap</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="apeswap" className="flex w-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={"/images/create/token/apeswap.webp"}
                            width={20}
                            height={20}
                            className="rounded-full"
                            alt="apeswap"
                          />
                          <span>Apeswap</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="babydogeswap" className="flex w-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={"/images/create/token/babydogeswap.webp"}
                            width={20}
                            height={20}
                            className="rounded-full"
                            alt="babydogeswap"
                          />
                          <span>Babydogeswap</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex col-span-3 items-center space-x-4 border border-green-400 rounded-lg p-2">
                <div className="flex items-center bg-green-600 justify-center max-h-8 max-w-8 rounded-full">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>Max Total fee is 20%</div>
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Sell Liquidity Fee (%)</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Buy Liquidity Fee (%)</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Sell Marketing Fee (%)</Label>
                <Input className="h-12" />
              </div>
              <div className="flex flex-col justify-center space-y-4 ">
                <Label>Buy Marketing Fee (%)</Label>
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
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Dex Router</span>
                <span className="capitalize">{routerType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Marketing Wallet</span>
                <span>{tokenType}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Sell Liquidity Fee</span>
                <span>%</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Buy Liquidity Fee</span>
                <span>%</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Sell Marketing Fee</span>
                <span>%</span>
              </li>
              <li className="flex w-full items-center justify-between border-b-2 border-b-gray-900 py-1">
                <span>Buy Marketing Fee</span>
                <span>%</span>
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

export default StandartTokenForm;
