"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BellDotIcon,
  Bitcoin,
  Circle,
  CircleDashed,
  CircleX,
  MegaphoneIcon,
  Snowflake,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConnectWallet from "../wallet-connect/ConnectWallet";
import { useRouter } from "next/navigation";

export default function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
  const [text, setText] = useState("Get a FREE audit on CORE Chain");
  const { push } = useRouter();
  const slogans = useMemo(
    () => [
      {
        icon: <Snowflake />,
        text: "Get a FREE audit on CORE Chain",
        link: "#",
      },
      {
        icon: <Snowflake />,
        text: "Create SOL Sale on NEW Radyum V5 - No OpenBook FEES!",
        link: "#",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === slogans[0].text) {
        setText(slogans[1].text);
      } else {
        setText(slogans[0].text);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slogans, text]);

  return (
    <nav
      className={cn(
        "flex bg-black border-b border-gray-900 h-20  fixed w-[calc(100vw-300px)] items-center justify-between px-8 z-50",
        { "w-[calc(100vw-100px)]": isCollapsed }
      )}
    >
      <div className="w-full flex  items-center justify-between">
        <div className="hidden lg:flex space-x-2">
          {text == slogans[0].text ? (
            <span className="flex items-center">
              <span className="w-4 h-4 animate-pulse bg-green-500 rounded-full"></span>
            </span>
          ) : (
            <span>
              <MegaphoneIcon className="w-8 h-8 animate-bounce text-gray-400" />
            </span>
          )}
          <p>
            {text.split(" ").map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Button
            variant={"outline"}
            className="space-x-2"
            onClick={() =>
              push(
                "/presale/0xD644BdAF8627118d723168e5083864c041CdC2d5?network=abbey"
              )
            }
          >
            <Snowflake />
            <span>PadB Sale</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center " variant={"ghost"}>
                <Bitcoin />
                <span>0</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>0 blend points</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Buy $BLEND token</DropdownMenuItem>
              <DropdownMenuItem>Read More</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"link"}>
                <BellDotIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription className="border-b border-dashed border-gray-700 pb-2">
                  You have <span className="font-bold ">0</span> unread messages
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="-mr-12">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </nav>
  );
}
