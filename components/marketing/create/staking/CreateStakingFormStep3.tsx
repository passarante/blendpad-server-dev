import Tiptap from "@/components/tiptap/Tiptap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BsFileText, BsGlobe, BsTelegram, BsYoutube } from "react-icons/bs";
import { MdPictureInPictureAlt } from "react-icons/md";

type CreateStakingFormStep3Props = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const CreateStakingFormStep3 = ({
  step,
  setStep,
}: CreateStakingFormStep3Props) => {
  const [listingType, setListingType] = useState<"auto" | "manual">("auto");
  const [saleType, setSaleType] = useState<"tba" | "custom" | "stealth" | "">(
    ""
  );
  const [plan, setPlan] = useState("premium");
  const [website, setWebsite] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtubePresentation, setYoutubePresentation] = useState("");
  const [whitelistUrl, setWhitelistUrl] = useState("");
  const [description, setDescription] = useState("");

  const [banner, setBanner] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [rewardLogo, setRewardLogo] = useState("");
  const [rewardLogoUrl, setRewardLogoUrl] = useState("");

  const handleNext = () => {
    if (step == 3) return;
    setStep(step + 1);
  };

  return (
    <div className="w-full flex gap-10">
      <div className="w-3/5">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 w-full gap-8">
              <div className="w-full">
                <Label className="flex items-center space-x-2">
                  <BsGlobe />
                  <span>WebSite</span>
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
                  <BsGlobe />
                  <span>Twitter</span>
                </Label>
                <Input
                  className="h-12 mt-4"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-8 my-4">
              <div className="w-full">
                <Label className="flex items-center space-x-2">
                  <BsYoutube />
                  <span>Youtube Presentation Video</span>
                </Label>
                <Input
                  className="h-12 mt-4"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Label className="flex items-center space-x-2">
                  <BsFileText />
                  <span>Whitelist Contest (Zealy,Gleam,etc)</span>
                </Label>
                <Input
                  className="h-12 mt-4"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
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
              <div>
                <Label className="flex items-center space-x-2">
                  <MdPictureInPictureAlt />
                  <span>Reward Logo</span>
                </Label>
                <Input
                  type="file"
                  className="h-12 mt-4"
                  value={rewardLogo}
                  onChange={(e) => setRewardLogo(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Label className="flex items-center space-x-2">
                  <MdPictureInPictureAlt />
                  <span>Reward Logo URL</span>
                </Label>
                <Input
                  className="h-12 mt-4"
                  value={bannerUrl}
                  onChange={(e) => setRewardLogoUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full w-mt-4">
              <Label>Project Description</Label>
              <Tiptap />
            </div>
            <div className="w-full mt-4">
              <div className="mt-4 w-full">
                <Label>Select Package</Label>
                <div className="w-full grid grid-cols-3 gap-4 mt-4">
                  <div
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg h-32 p-4 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                      plan === "simple" ? "border-primary border" : ""
                    )}
                    onClick={() => setPlan("simple")}
                  >
                    <h4 className="text-xl font-bold">Simple</h4>

                    <div>
                      <h4 className="text-sm">free and 5% of rewards token</h4>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg h-32 p-4 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                      plan === "standart" ? "border-yellow-500 border" : ""
                    )}
                    onClick={() => setPlan("standart")}
                  >
                    <h4 className="text-xl font-bold text-yellow-600">
                      Standart
                    </h4>

                    <div>
                      <h4 className="text-sm">
                        0.5 BNB and 2.5% of rewards token
                      </h4>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg h-32 p-4 cursor-pointer py-2 bg-gray-900/80 hover:bg-primary/10 duration-200 transition-all border-gray-900",
                      plan === "premium" ? "border-green-500 border" : ""
                    )}
                    onClick={() => setPlan("premium")}
                  >
                    <h4 className="text-xl font-bold">Premium</h4>

                    <div>
                      <h4 className="text-sm">1 BNB and 1% of rewards token</h4>
                    </div>
                  </div>
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
                <span>Staking Token Address</span>
                <span></span>
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
                <span></span>
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

export default CreateStakingFormStep3;
