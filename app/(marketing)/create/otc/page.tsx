"use client";
import Tiptap from "@/components/tiptap/Tiptap";
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
import { cn } from "@/lib/utils";

import { Calendar, Check, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsFileText,
  BsGlobe,
  BsTelegram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { MdPictureInPictureAlt } from "react-icons/md";

const CreateOtcSalePage = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [limitedPeriod, setLimitedPeriod] = useState(true);
  const [whiteListedPool, setWhiteListedPool] = useState(false);
  const [fundRaisingToken, setFundRaisingToken] = useState("bnb");
  const [postSaleRate, setPostSaleRate] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [plan, setPlan] = useState("standart");
  const [logo, setLogo] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [banner, setBanner] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [website, setWebsite] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");

  return (
    <div className="mt-20 p-6">
      <Link
        href="/create"
        className="flex space-x-2 items-center cursor-pointer"
      >
        <ChevronLeft />
        <span className="text-sm">Back</span>
      </Link>

      <div className="w-full flex gap-10 mt-4">
        <div className="w-3/5">
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Label>Fund Raising Token</Label>
                  <div className="mt-2">
                    <Select
                      value={fundRaisingToken}
                      onValueChange={setFundRaisingToken}
                    >
                      <SelectTrigger>
                        {fundRaisingToken == "bnb" && (
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/bnb.webp"}
                              width={20}
                              height={20}
                              alt="bnb"
                            />
                            <span>BNB</span>
                          </div>
                        )}
                        {fundRaisingToken == "usdt" && (
                          <div className="flex items-center space-x-2">
                            <Image
                              src={"/images/create/presale/usdt.webp"}
                              width={20}
                              height={20}
                              alt="usdt"
                            />
                            <span>USDT</span>
                          </div>
                        )}
                        {fundRaisingToken == "custom" && (
                          <div className="flex items-center space-x-2">
                            Custom
                          </div>
                        )}
                      </SelectTrigger>
                      <SelectContent className="bg-black mt-4">
                        <SelectGroup>
                          <SelectItem value="bnb">
                            <div className="flex items-center space-x-2">
                              <Image
                                src={"/images/create/presale/bnb.webp"}
                                width={20}
                                height={20}
                                alt="bnb"
                              />
                              <span>BNB</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="usdt">
                            <div className="flex items-center space-x-2">
                              <Image
                                src={"/images/create/presale/usdt.webp"}
                                width={20}
                                height={20}
                                alt="usdt"
                              />
                              <span>USDT</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="custom">
                            <div className="flex items-center space-x-2">
                              <span>Custom</span>
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <Label>Project Token Address</Label>
                  </div>

                  <Input
                    className=" mt-4"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                  />
                </div>
                <div className="col-span-2 w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      className="border-white border"
                      checked={limitedPeriod}
                      onCheckedChange={() => setLimitedPeriod(!limitedPeriod)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Limited Period
                    </label>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-8">
                  <div className="w-full">
                    <Label>Start Date (UTC)</Label>

                    <div className="flex items-center relative">
                      <Input type="datetime-local" />
                      <Calendar className="w-4 h-4 absolute right-4 " />
                    </div>
                  </div>
                  {limitedPeriod && (
                    <div className="w-full">
                      <Label>End Date (UTC)</Label>

                      <div className="flex items-center relative">
                        <Input type="datetime-local" />
                        <Calendar className="w-4 h-4 absolute right-4 " />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <Label>Post Sale Rate</Label>
                  </div>

                  <Input
                    className=" mt-4"
                    value={postSaleRate}
                    onChange={(e) => setPostSaleRate(e.target.value)}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between w-full">
                    <Label>Token Amount</Label>
                  </div>

                  <Input
                    className=" mt-4"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                  />
                </div>
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
                      <h3 className="text-muted-foreground text-xl">Fee</h3>
                      <h4 className="text-xl">0.5 BNB</h4>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center justify-between rounded-lg h-64 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                      plan === "standart" ? "border-yellow-500 border" : ""
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
                      <h3 className="text-muted-foreground text-xl">Fee</h3>
                      <h4 className="text-xl">1 BNB</h4>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center justify-between rounded-lg h-64 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                      plan === "premium" ? "border-green-500 border" : ""
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
                      <h3 className="text-muted-foreground text-xl">Fee</h3>
                      <h4 className="text-xl">1.5 BNB</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 my-4">
                <Checkbox
                  id="terms"
                  className="border-white border"
                  checked={whiteListedPool}
                  onCheckedChange={() => setWhiteListedPool(!whiteListedPool)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Whitelisted Pool
                </label>
              </div>
              <div className="grid grid-cols-2 w-full gap-8 my-4">
                <div className="col-span-2 grid grid-cols-3 gap-10">
                  <div className="w-full">
                    <Label className="flex items-center space-x-2">
                      <BsGlobe />
                      <span>Website</span>
                    </Label>
                    <Input
                      className="h-12 mt-4"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <Label className="flex items-center space-x-2">
                      <BsTelegram />
                      <span>Telegram</span>
                    </Label>
                    <Input
                      className="h-12 mt-4"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <Label className="flex items-center space-x-2">
                      <BsTwitterX />
                      <span>Twitter</span>
                    </Label>
                    <Input
                      className="h-12 mt-4"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label className="flex items-center space-x-2">
                    <MdPictureInPictureAlt />
                    <span>Banner</span>
                  </Label>
                  <Input
                    type="file"
                    className="h-12 mt-4"
                    value={banner}
                    onChange={(e) => setBanner(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Label className="flex items-center space-x-2">
                    <MdPictureInPictureAlt />
                    <span>Banner URL</span>
                  </Label>
                  <Input
                    className="h-12 mt-4"
                    value={bannerUrl}
                    onChange={(e) => setBannerUrl(e.target.value)}
                  />
                </div>
                <div>
                  <Label className="flex items-center space-x-2">
                    <MdPictureInPictureAlt />
                    <span>Logo</span>
                  </Label>
                  <Input
                    type="file"
                    className="h-12 mt-4"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Label className="flex items-center space-x-2">
                    <MdPictureInPictureAlt />
                    <span>Logo URL</span>
                  </Label>
                  <Input
                    className="h-12 mt-4"
                    value={bannerUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full w-mt-4">
                <Label>Project Description</Label>
                <Tiptap />
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

export default CreateOtcSalePage;
