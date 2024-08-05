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
import { Calendar, Info } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

type CreatePresaleNormalStep2Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreatePresaleNormalStep2 = ({
  step,
  setStep,
}: CreatePresaleNormalStep2Props) => {
  const [setTime, setSetTime] = useState(true);
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [saleType, setSaleType] = useState<"tba" | "custom" | "stealth" | "">(
    ""
  );
  const [tokenAddress, setTokenAddress] = useState("");

  const [baseToken, setBaseToken] = useState("eth");

  const [tokenType, setStokenType] = useState("standart");

  const [router, setRouter] = useState("uniswap");

  const handleNext = () => {
    if (step == 4) return;
    setStep(step + 1);
  };

  return (
    <div className="w-full flex gap-10">
      <div className="w-3/5">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col  justify-between w-full">
              <div className="grid grid-cols-3 w-full gap-4">
                <div>
                  <Label>Listing Dex</Label>
                  <Select value={tokenType} onValueChange={setStokenType}>
                    <SelectTrigger>Select Dex</SelectTrigger>
                    <SelectContent className="bg-black">
                      <SelectGroup>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/pancakeswap.webp"}
                              width={20}
                              height={20}
                              alt="pancakeswap"
                            />
                            <span>PancakeSwap</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/uniswap.webp"}
                              width={20}
                              height={20}
                              alt="uniswap"
                            />
                            <span>UniSwap</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="melegaswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/melega.webp"}
                              width={20}
                              height={20}
                              alt="melega"
                            />
                            <span>MelegaSwap</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="apeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/apeswap.webp"}
                              width={20}
                              height={20}
                              alt="apeswap"
                            />
                            <span>ApeSwap</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="babydogeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/babydogeswap.webp"}
                              width={20}
                              height={20}
                              alt="babydogeswap"
                            />
                            <span>BabydogeSwap</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Fund Raising Token</Label>
                  <Select value={tokenType} onValueChange={setStokenType}>
                    <SelectTrigger>Select Fund Raising Token</SelectTrigger>
                    <SelectContent className="bg-black">
                      <SelectGroup>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/bnb.webp"}
                              width={20}
                              height={20}
                              alt="pancakeswap"
                            />
                            <span>BNB</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/usdt.webp"}
                              width={20}
                              height={20}
                              alt="uniswap"
                            />
                            <span>USDT</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="melegaswap">
                          <div className="flex items-center space-x-2">
                            <span>Custom</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>If there are any unsold tokens</Label>
                  <Select value={tokenType} onValueChange={setStokenType}>
                    <SelectTrigger>Unsold Tokens</SelectTrigger>
                    <SelectContent className="bg-black">
                      <SelectGroup>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <span>Burn</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="pancakeswap">
                          <div className="flex items-center space-x-2">
                            <span>Refund</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <Label>Presale Rate</Label>
                  <Input />
                </div>
                <div>
                  <Label>Dex Listing Rate</Label>
                  <Input />
                </div>
                <div>
                  <Label>Dex Liquidity (%)</Label>
                  <Input />
                </div>
                <div>
                  <Label>Liquidity Lock (Days)</Label>
                  <Input />
                </div>
                <div>
                  <Label>Soft Cap (BNB)</Label>
                  <Input />
                </div>
                <div>
                  <Label>Hard Cap (BNB)</Label>
                  <Input />
                </div>
                <div>
                  <Label>Minimum Buy (BNB)</Label>
                  <Input />
                </div>
                <div>
                  <Label>Maximum Buy (BNB)</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="border-white border"
                    checked={setTime}
                    onCheckedChange={() => {
                      setSetTime(!setTime);
                      console.log(setTime);
                    }}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Set Time (Uncheck to list sale as TBA and set time later)
                  </label>
                </div>
                {setTime && (
                  <div>
                    <div className="mt-4 border-white border w-full flex space-x-2 items-center text-sm p-2 rounded-lg">
                      <div>
                        <Info className="w-4 h-4" />
                      </div>
                      <span>
                        We recommend raise to start 3 days or more after listing
                        for maximum exposure.{" "}
                        <Link href="#" className="text-green-500">
                          Read more
                        </Link>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label>Start Date(UTC)</Label>
                        <div className="flex items-center relative">
                          <Input type="datetime-local" />
                          <Calendar className="w-4 h-4 absolute right-4 " />
                        </div>
                      </div>
                      <div>
                        <Label>End Date(UTC)</Label>
                        <div className="flex items-center relative">
                          <Input type="datetime-local" />
                          <Calendar className="w-4 h-4 absolute right-4 " />
                        </div>
                      </div>
                      <div>
                        <Label>Estimated Launch</Label>
                        <div className="flex items-center relative">
                          <Input type="datetime-local" />
                          <Calendar className="w-4 h-4 absolute right-4 " />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-2/5">
        <Card>
          <CardContent className="p-4">
            <h4 className="my-4 font-bold text-md">Token Information</h4>
            <ul className="text-gray-400">
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Fund Raising Token</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Presale Rate</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Dex Listing Rate</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Listing Dex</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Liquidity Lockup</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Minimum Buy</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Maximum Buy</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Soft Cap</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Hard Cap</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Unsold Tokens</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Start Date</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>End Date</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Dex Listing</span>
                <span>{tokenAddress}</span>
              </li>
            </ul>
            <Button
              onClick={handleNext}
              className="w-full my-4 bg-teal-600 text-white hover:opacity-80 hover:bg-teal-600"
            >
              Next
            </Button>

            <div className="w-full flex items-center  justify-center mt-4">
              <iframe
                width="480"
                height="270"
                src="https://www.youtube.com/embed/Sljoo8AxvbM"
                title="Creating An Auto Presale | Evo Tutorial | GemPad"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePresaleNormalStep2;
