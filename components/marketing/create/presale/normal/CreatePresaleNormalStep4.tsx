import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, File } from "lucide-react";

import React, { Dispatch, SetStateAction, useState } from "react";
import { FaDiscord, FaGithub, FaReddit, FaYoutube } from "react-icons/fa";

import Tiptap from "@/components/tiptap/Tiptap";
import { cn } from "@/lib/utils";
import { MdRefresh } from "react-icons/md";

type CreatePresaleNormalStep4Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreatePresaleNormalStep4 = ({
  step,
  setStep,
}: CreatePresaleNormalStep4Props) => {
  const [extras, setExtras] = useState(true);
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [plan, setPlan] = useState<"simple" | "standart" | "premium">("simple");
  const [tokenAddress, setTokenAddress] = useState("");

  const [baseToken, setBaseToken] = useState("eth");

  const [tokenType, setStokenType] = useState("standart");

  const [router, setRouter] = useState("uniswap");

  const createSale = () => {
    alert("Sale Created");
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex items-end justify-end">
        <Button
          variant={"outline"}
          onClick={() => setStep(1)}
          className="bg-black hover:bg-primary/10 duration-200 transition-all"
        >
          <MdRefresh size={20} className="mr-2" />
          Start Over (Reset Sale )
        </Button>
      </div>
      <div className="w-full flex gap-10">
        <div className="w-3/5">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col  justify-between w-full">
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label>Sale Title</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Youtube Presentation Video (Optional)</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Upload Logo (Up to 512*512, 1MB)</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Add Your Logo URL</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Upload Your Banner (900*200, up to 3MB)</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>Add Your Banner URL</Label>
                    <Input />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      className="border-white border"
                      checked={extras}
                      onCheckedChange={() => setExtras(!extras)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Add Extras (Socials,Whitelist Registration)
                    </label>
                  </div>
                  {extras && (
                    <div className="w-full">
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col space-y-2">
                          <Label className="flex items-center space-x-2">
                            <FaGithub className="w-4 h-4" />
                            <span>Github</span>
                          </Label>
                          <div className="flex items-center relative">
                            <Input />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label className="flex items-center space-x-2">
                            <FaDiscord className="w-4 h-4" />
                            <span>Discord</span>
                          </Label>
                          <div className="flex items-center relative">
                            <Input />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label className="flex items-center space-x-2">
                            <FaYoutube className="w-4 h-4" />
                            <span>Youtube</span>
                          </Label>
                          <div className="flex items-center relative">
                            <Input />
                          </div>
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-2 gap-4 mt-4">
                        <div className="flex flex-col space-y-2">
                          <Label className="flex items-center space-x-2">
                            <File className="w-4 h-4" />
                            <span>Whitelist Contest (Zealy, Gleam, etc)</span>
                          </Label>
                          <div className="flex items-center relative">
                            <Input />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label className="flex items-center space-x-2">
                            <FaReddit className="w-4 h-4" />
                            <span>Reddit</span>
                          </Label>
                          <div className="flex items-center relative">
                            <Input />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 w-full">
                        <Label>Project Description</Label>
                        <Tiptap />
                      </div>
                      <div className="mt-4 w-full">
                        <Label>Select Package</Label>
                        <div className="w-full grid grid-cols-3 gap-4 mt-4">
                          <div
                            className={cn(
                              "flex flex-col items-center justify-between rounded-lg h-64 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                              plan === "simple" ? "border-primary border" : ""
                            )}
                            onClick={() => setPlan("simple")}
                          >
                            <h4 className="text-xl">Simple</h4>
                            <ul className="flex flex-col space-y-2 text-sm">
                              <li>- No Badges</li>
                            </ul>
                            <div>
                              <h3 className="text-muted-foreground text-xl">
                                Fee
                              </h3>
                              <h4 className="text-xl">0.5 BNB</h4>
                            </div>
                          </div>
                          <div
                            className={cn(
                              "flex flex-col items-center justify-between rounded-lg h-64 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                              plan === "standart"
                                ? "border-yellow-500 border"
                                : ""
                            )}
                            onClick={() => setPlan("standart")}
                          >
                            <h4 className="text-xl">Standart</h4>
                            <ul className="flex flex-col space-y-2 text-sm">
                              <li>- Animated Golden Banner</li>
                              <li>- Presale Banner</li>
                              <li>- Standart Exposure</li>
                            </ul>
                            <div>
                              <h3 className="text-muted-foreground text-xl">
                                Fee
                              </h3>
                              <h4 className="text-xl">1 BNB</h4>
                            </div>
                          </div>
                          <div
                            className={cn(
                              "flex flex-col items-center justify-between rounded-lg h-64 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                              plan === "premium"
                                ? "border-green-500 border"
                                : ""
                            )}
                            onClick={() => setPlan("premium")}
                          >
                            <h4 className="text-xl">Premium</h4>
                            <ul className="flex flex-col space-y-2 text-sm">
                              <li>- Animated Emerald Banner</li>
                              <li>- Presale Banner</li>
                              <li>- Ambient Presale Page</li>
                              <li>- Premium Exposure</li>
                              <li>- BuyBot in BlendPad TG</li>
                            </ul>
                            <div>
                              <h3 className="text-muted-foreground text-xl">
                                Fee
                              </h3>
                              <h4 className="text-xl">1.5 BNB</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full bg-green-400/20 flex items-center justify-between text-green-400 space-x-2  mt-4 rounded-lg p-4 text-xs relative">
            <span className="max-h-8 max-w-8  bg-green-400 rounded-full  flex items-center justify-center mr-4">
              <Check className="text-black w-4 h-4" />
            </span>
            <div>
              Exclude IDO Contract 0xF041690DcBE398d3D8C9e7Ee0Df9Ea9a5Df5Bb5 and
              Pool Address 0x9AD6bC4494b5b6a9E36eae0F5bC6dF4dE2BfE5Bb from Max
              Wallet and Fee if you have them in use.
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <Card>
            <CardContent className="p-4">
              <h4 className="my-4 font-bold text-md">Token Information</h4>
              <ul className="text-gray-400">
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Presale Type</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Listing Mode</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Sale Title</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Total Supply</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Token Address</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Symbol</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Decimals</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Fund Raise Token</span>
                  <span>{tokenAddress}</span>
                </li>
              </ul>
              <h4 className="text-green-700 font-bold my-4">Sale Tokenomics</h4>
              <ul className="text-gray-400">
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Presale Rate</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>DEX Listing Rate</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Listing Dex</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Dex Liquidity</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Liquidity Lock</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Minimum Buy Amount</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Maxiumum Buy Amount</span>
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
                  <span>Sale Start Time</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Sale End Time</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Estimated Launch</span>
                  <span>{tokenAddress}</span>
                </li>
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Unsold Tokens</span>
                  <span>{tokenAddress}</span>
                </li>
              </ul>
              <h4 className="text-green-700 font-bold my-4">
                Additional Options
              </h4>
              <ul className="text-gray-400">
                <li className="flex w-full items-center justify-between border-b border-slate-900">
                  <span>Presale Available To</span>
                  <span>{tokenAddress}</span>
                </li>
              </ul>
              <Button
                onClick={createSale}
                className="w-full my-4 bg-teal-600 text-white hover:opacity-80 hover:bg-teal-600"
              >
                Create Sale
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
    </div>
  );
};

export default CreatePresaleNormalStep4;
