import { RuleType } from "@/constants/components";

type Parameter = {
  type: RuleType;
  address: string;
  isTestnet?: boolean;
};

export async function validateRule({ address, type, isTestnet }: Parameter) {
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
    case "ens": {
    }
    case "safe": {
    }
    case "apecoin": {
    }
    default: {
      return false;
    }
  }
}
