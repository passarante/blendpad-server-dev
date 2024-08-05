import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect, Connector, useNetwork, useSigner } from 'wagmi';

import WalletInfo from "./WalletInfo";
import WalletConnect from "./wallet/WalletConnect";
import MetaMask from "./wallet/MetaMask";
import BrowserWallet from "./wallet/BrowserWallet";
import TrustWallet from "./wallet/TrustWallet";
import Coinbase from "./wallet/Coinbase";
import AllWallets from "./wallet/AllWallets";
import handleSwitchNetwork from "@/hooks/useNetworkSwitcher";
import { truncateAddress } from "@/lib/utils";
import { getUser, loginUser } from "@/apis/authentication";
import { useAuthDispatch, useAuthState } from "@/context/authContext";

export default function ConnectWallet() {
  const { connector: connectorData, isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { data: signer } = useSigner()

  const { disconnect } = useDisconnect();
  const { chain } = useNetwork()
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [userAdress, setUserAdress] = useState<string>('');
  const dispatch = useAuthDispatch();
  const { user, token } = useAuthState();


  console.log('token', token)
  const connectWallet = (connector: Connector) => {
    if (connectorData?.id === connector.id) {
      disconnect();
    } else {
      connect({ connector });
    }
  };

  const login = async () => {
    if (token) return;
    loginUser(dispatch, address, signer);
  };

  const getUserDetails = async () => {
    if (userAdress !== undefined || userAdress !== '') {
      const details = await getUser(dispatch, userAdress);
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [userAdress])

  useEffect(() => {
    if (userAdress !== '' || userAdress !== undefined) {
      login()
    };
  }, [signer]);

  useEffect(() => {
    if (isConnected) {
      setIsDialogOpen(false);
      const truncatedAddress = truncateAddress(address);
      setUserAdress(truncatedAddress)
    }
  }, [isConnected, address]);

  useEffect(() => {
    if (isConnected && chain?.id !== 56) {
      console.log('switch to BSC')
      handleSwitchNetwork()
    }
  }, [isConnected, chain])


  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}>{isConnected == true ? userAdress : 'Connect Wallet'}</Button>
      </DialogTrigger>
      <DialogContent className="w-[450px] ">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-4 border-b border-gray-800 pb-4">
            <div>
              <WalletInfo />
            </div>
            <div>Connect Wallet</div>
          </DialogTitle>
          <DialogDescription>
            <ul className="mt-4 space-y-2">
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <WalletConnect />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <MetaMask onClick={() => connectWallet(connectors[0])} />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <BrowserWallet />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <TrustWallet />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <Coinbase />
              </li>
              <li className="flex w-full items-center justify-between space-x-2 bg-gray-900 rounded-lg p-1 cursor-pointer hover:opacity-85 duration-300 transition-all">
                <AllWallets />
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
