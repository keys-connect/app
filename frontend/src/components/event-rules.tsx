import {
  usePrepareTokenMintConditions,
  useTokenMintConditions,
} from "@/lib/generated";
import { useState } from "react";
import { Address, useAccount, useNetwork } from "wagmi";
import { EventRule } from "./event-rule";
import { RuleItem } from "./rules";
import { Button } from "./ui/button";

interface Props {
  rules: RuleItem[];
  contractAddress: Address;
}

export default function EventRules({ rules, contractAddress }: Props) {
  const [passedRules, setPassedRules] = useState<string[]>([]);
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { config } = usePrepareTokenMintConditions({
    address: contractAddress,
    account: address,
    chainId: chain?.id,
    args: [address!],
    enabled: address !== undefined,
  });
  const { data, writeAsync } = useTokenMintConditions(config);

  console.log({ data });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-6">
          {rules.map((rule) => (
            <EventRule
              key={rule.name}
              {...rule}
              addRulePassed={(ruleName) =>
                setPassedRules((prev) => [...prev, ruleName])
              }
            />
          ))}
          <div className="p-4 overflow-visible transition-all duration-200 max-w-md mx-auto">
            <div>
              <h3 className="text-4xl font-extrabold">Total points: </h3>
              <p className="text-5xl font-extrabold text-green-700">
                {new Set(passedRules).size}
              </p>
            </div>
          </div>
          <Button
            onClick={() => {
              writeAsync?.();
            }}
          >
            Mint Soulbound k3y
          </Button>
        </div>
      </div>
    </section>
  );
}
