import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import TokenFactoryToken from "@/abi/TokenFactory#Token.json";
import TokenFactoryTokenFactory from "@/abi/TokenFactory#TokenFactory.json";
import TokenFactoryERC20BalanceOf from "@/abi/TokenFactory#ERC20BalanceOf.json";
import { Abi } from "viem";

export default defineConfig({
  out: "src/lib/generated.ts",
  contracts: [
    { name: "Token", abi: TokenFactoryToken.abi as Abi },
    {
      name: "TokenFactory",
      abi: TokenFactoryTokenFactory.abi as Abi,
    },
    {
      name: "TokenFactoryERC20BalanceOf",
      abi: TokenFactoryERC20BalanceOf.abi as Abi,
    },
  ],
  plugins: [react()],
});
