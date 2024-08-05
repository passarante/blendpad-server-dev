import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, Info } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

type CreatePresaleNormalStep3Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreatePresaleNormalStep3 = ({
  step,
  setStep,
}: CreatePresaleNormalStep3Props) => {
  const [enableReferral, setEnableReferral] = useState(false);
  const [bonusSale, setBonusSale] = useState(false);
  const [saleVesting, setSaleVesting] = useState(false);
  const [buybackAndBurn, setBuybackAndBurn] = useState(false);
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
              <div className="flex flex-col w-full gap-4">
                <Label>Presale Type</Label>
                <Select value={tokenType} onValueChange={setStokenType}>
                  <SelectTrigger>Presale Type</SelectTrigger>
                  <SelectContent className="bg-black">
                    <SelectGroup>
                      <SelectItem value="pancakeswap">
                        <div className="flex items-center space-x-2">
                          <span>Public</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="pancakeswap">
                        <div className="flex items-center space-x-2">
                          <span>Whitelist</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 flex w-1/2 justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="enableReferral"
                    className="border-white border"
                    checked={enableReferral}
                    onCheckedChange={() => setEnableReferral(!enableReferral)}
                  />
                  <label
                    htmlFor="enableReferral"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enable Referral System
                  </label>
                </div>
                <Button className="uppercase" variant={"outline"} size={"sm"}>
                  Read More
                </Button>
              </div>
              {enableReferral && (
                <div className="w-1/2">
                  <Label>Reward Percent</Label>
                  <Input />
                </div>
              )}
              <div className="mt-4 flex w-1/2 justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="bonusSale"
                    className="border-white border"
                    checked={bonusSale}
                    onCheckedChange={() => setBonusSale(!bonusSale)}
                  />
                  <label
                    htmlFor="bonusSale"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Bonus Sale
                  </label>
                </div>
                <Button className="uppercase" variant={"outline"} size={"sm"}>
                  Read More
                </Button>
              </div>
              {bonusSale && (
                <div className="w-full items-center mt-2">
                  <div className="w-full flex items-center justify-between">
                    <div>
                      <Label>Stage 1 </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Min Buy Amount for Bonus </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Bonus Received(%) </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Bonus Spots Available </Label>
                      <Input />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex w-1/2 justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saleVesting"
                    className="border-white border"
                    checked={saleVesting}
                    onCheckedChange={() => setSaleVesting(!saleVesting)}
                  />
                  <label
                    htmlFor="saleVesting"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add Sale Vesting
                  </label>
                </div>
                <Button className="uppercase" variant={"outline"} size={"sm"}>
                  Read More
                </Button>
              </div>
              {saleVesting && (
                <div>
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <Label>Token release on launch(%) </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>
                        Cliff(Extra delay in days before vesting cycle){" "}
                      </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Token relases per vesting cycle(%)</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Vesting period each cycle (days)</Label>
                      <Input />
                    </div>
                  </div>
                </div>
              )}
              {buybackAndBurn && (
                <div>
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <Label>BuyBack % of Total Raise </Label>
                      <Input />
                    </div>
                    <div>
                      <Label>BuyBack % per Time Period</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Minimum BuyBack Time Period (hr)</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Maximum BuyBack Time Period (hr)</Label>
                      <Input />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex w-1/2 justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="daybackAndBurn"
                    className="border-white border"
                    checked={buybackAndBurn}
                    onCheckedChange={() => setBuybackAndBurn(!buybackAndBurn)}
                  />
                  <label
                    htmlFor="daybackAndBurn"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add Dayback & Burn
                  </label>
                </div>
                <Button className="uppercase" variant={"outline"} size={"sm"}>
                  Read More
                </Button>
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
                <span>Total Supply</span>
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
                <span>Dex Liquidity</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Minimum Buy Amount</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Maximum Buy Amount</span>
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
                <span>Presale Type</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Estimated Market Cap:</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between border-b border-slate-900">
                <span>Required Tokens for Sale</span>
                <span>{tokenAddress}</span>
              </li>
            </ul>
            <div className="w-full mt-4 items-center justify-center text-center">
              110.560 CWC needed to create a pool!
            </div>
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

export default CreatePresaleNormalStep3;
