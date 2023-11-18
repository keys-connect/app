import { RuleType } from "@/constants/components";
import { Address, useEnsName, useQuery } from "wagmi";

type Parameter = {
  type: RuleType;
  address?: Address;
  isTestnet?: boolean;
};

export function useValidateRule({ address, type, isTestnet }: Parameter) {
  const { data, isLoading, refetch } = useQuery(
    ["rule", address, type, isTestnet],
    async () => {
      switch (type) {
        case "lens": {
          try {
            const URL = isTestnet
              ? "https://api-v2-mumbai.lens.dev"
              : "https://api-v2.lens.dev";
            const response = await fetch(URL, {
              headers: {
                "content-type": "application/json",
              },
              body: `{"operationName":"LensProfiles","variables":{"address":"${address}"},"query":"query LensProfiles($address: EvmAddress!) {\\n  profiles(request: {where: {ownedBy: [$address]}}) {\\n    items {\\n      id\\n      createdAt\\n      handle {\\n        fullHandle\\n      }\\n    }\\n  }\\n}\\n"}`,
              method: "POST",
            });
            const data = await response.json();
            return data.data.profiles.items.length > 0;
          } catch (e) {
            console.log(e);
            return false;
          }
        }
        case "safe": {
        }
        case "apecoin": {
        }
        default: {
          return false;
        }
      }
    },
    {
      enabled: type !== "lens" && Boolean(address),
    }
  );
  const {
    data: ensName,
    isLoading: isEnsNameLoading,
    refetch: refetchEnsName,
  } = useEnsName({
    address: address!,
    enabled: type === "ens" && Boolean(address),
  });
  if (type === "ens") {
    return {
      data: Boolean(ensName),
      isLoading: isEnsNameLoading,
      refetch: refetchEnsName,
    };
  }

  return { data, isLoading, refetch };
}
