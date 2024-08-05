import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { Checkbox } from "@mui/material";
import { Check, Info } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

type CreateStakingFormStep1Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreateStakingFormStep1 = ({
  step,
  setStep,
}: CreateStakingFormStep1Props) => {
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [saleType, setSaleType] = useState<"tba" | "custom" | "stealth" | "">(
    ""
  );
  const [tokenAddress, setTokenAddress] = useState("");
  const [rewardTokenAddress, setRewardTokenAddress] = useState("");

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
            <div className="w-full">
              <Label>Token Address</Label>
              <Input
                className="h-12 mt-4"
                placeholder="Ex: 0x78Aae7e000Bf6FC98a6b717d5eC8Ef2bcd04F428"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
              />
            </div>
            <div className="w-full mt-4">
              <Label>Reward Token Address</Label>
              <Input
                className="h-12 mt-4"
                placeholder="Ex: 0x78Aae7e000Bf6FC98a6b717d5eC8Ef2bcd04F428"
                value={rewardTokenAddress}
                onChange={(e) => setRewardTokenAddress(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-2/5">
        <Card>
          <CardContent className="p-4">
            <h4 className="my-4 font-bold text-md">Token Information</h4>
            <ul className="text-gray-400">
              <li className="flex w-full items-center justify-between">
                <span>Staking Token Address</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Staking Token Name</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Staking Token Symbol</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Staking Token Decimals</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Reward Token Address</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Reward Token Name</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Reward Token Symbol</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Reward Token Decimals</span>
                <span className="uppercase"></span>
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

export default CreateStakingFormStep1;
