async function  handleSwitchNetwork(){
  try {
    await window.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{  chainId: '0x38' }],
    });
  } catch (err: any) {
    console.log(err);
    if (err.code === 4902) {
      try {
        await window.ethereum?.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x38",
              chainName: "Binance Smart Chain",
              nativeCurrency: {
                name: "Binance Smart Chain",
                symbol: "BSC",
                decimals: 18
              },
              rpcUrls: ["https://bsc-dataseed.binance.org/"],
              blockExplorerUrls: ["https://bscscan.com"],
              iconUrls: ["https://bitbill.oss-accelerate.aliyuncs.com/pics/coins/bsc.svg"]
            },
        ],
        });
      } catch (addError) {
        return null;
      }
    }
  }
  return null;
};
export default handleSwitchNetwork