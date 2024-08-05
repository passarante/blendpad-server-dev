import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Checkbox } from "@mui/material";
import { Calendar } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

type CreateStakingFormStep2Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreateStakingFormStep2 = ({
  step,
  setStep,
}: CreateStakingFormStep2Props) => {
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [saleType, setSaleType] = useState<"tba" | "custom" | "stealth" | "">(
    ""
  );
  const [tokenAddress, setTokenAddress] = useState("");
  const [rewardTokenAddress, setRewardTokenAddress] = useState("");

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();
  const [rewardType, setRewardType] = useState("apy");
  const [canBeTransferred, setCanBeTransferred] = useState<boolean>(true);

  const [unistakeTime, setUnistakeTime] = useState();
  const [rewardRatio, setRewardRatio] = useState(0);
  const [rewardEndDate, setRewardEndDate] = useState();
  const [rewardClaimDate, setRewardClaimDate] = useState();
  const [penaltyType, setPenaltyType] = useState("No Penalty");
  const [hardCap, setHardCap] = useState(0);

  const handleNext = () => {
    if (step == 3) return;
    setStep(step + 1);
  };

  return (
    <div className="w-full flex gap-10">
      <div className="w-3/5">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="w-full">
                <Label>Stake Name</Label>
                <Input
                  className="h-12 mt-4"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                />
              </div>
              <div className="w-full ">
                <Label>Stake Symbol</Label>
                <Input
                  className="h-12 mt-4"
                  value={rewardTokenAddress}
                  onChange={(e) => setRewardTokenAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="w-full">
                <Label>Start Date Time (UTC)</Label>

                <div className="flex items-center relative">
                  <Input type="datetime-local" />
                  <Calendar className="w-4 h-4 absolute right-4 " />
                </div>
              </div>
              <div className="w-full">
                <Label>End Date Time (UTC)</Label>

                <div className="flex items-center relative">
                  <Input type="datetime-local" />
                  <Calendar className="w-4 h-4 absolute right-4 " />
                </div>
              </div>
              <div className="w-full">
                <Label>Unistake Time (UTC)</Label>

                <div className="flex items-center relative">
                  <Input type="datetime-local" />
                  <Calendar className="w-4 h-4 absolute right-4 " />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <Label>Reward Type</Label>
                  <Select value={rewardType} onValueChange={setRewardType}>
                    <SelectTrigger>Select Reward Type</SelectTrigger>
                    <SelectContent className="bg-black">
                      <SelectGroup>
                        <SelectItem value="apy">APY %</SelectItem>
                        <SelectItem value="fixed">Fixed Reward</SelectItem>
                        <SelectItem value="balance">Only If Balance</SelectItem>
                        <SelectItem value="noreward">No Reward</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full">
                <Label>Reward Ratio</Label>
                <Input className="h-12 mt-4" />
              </div>
              <div className="w-full">
                <Label>Reward End Time (UTC)</Label>

                <div className="flex items-center relative">
                  <Input type="datetime-local" />
                  <Calendar className="w-4 h-4 absolute right-4 " />
                </div>
              </div>
              <div className="w-full">
                <Label>Reward Claim Time (UTC)</Label>

                <div className="flex items-center relative">
                  <Input type="datetime-local" />
                  <Calendar className="w-4 h-4 absolute right-4 " />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <Label>Penalty Type</Label>
                  <Select value={penaltyType} onValueChange={setPenaltyType}>
                    <SelectTrigger>Select Penalty Type</SelectTrigger>
                    <SelectContent className="bg-black">
                      <SelectGroup>
                        <SelectItem value="nopenalty">No Penalty %</SelectItem>
                        <SelectItem value="fixed">Fixed Penalty</SelectItem>
                        <SelectItem value="timer">Timer Penalty</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full">
                <Label>Hard Cap</Label>
                <Input className="h-12 mt-4" />
              </div>
              <div className="w-full">
                <Label>Min Limit to Stake</Label>
                <Input className="h-12 mt-4" />
              </div>

              <div className="w-full">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="canBeTransferred"
                    className="border-white border"
                    checked={canBeTransferred}
                  />
                  <label
                    htmlFor="canBeTransferred"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Staking Token can be transferred or not
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
            <h4 className="my-4 font-bold text-md">Token Information</h4>
            <ul className="text-gray-400">
              <li className="flex w-full items-center justify-between">
                <span>Stake Name</span>
                <span>{tokenAddress}</span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Stake Symbol</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Start Date Time</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>End Date Time</span>
                <span className="uppercase"></span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span>Unstake Time</span>
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

export default CreateStakingFormStep2;
