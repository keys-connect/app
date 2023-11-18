import { useEffect, useMemo, useState } from "react";
import { RuleItem } from "./rules";
import { validateRule } from "@/lib/rules";
import { useAccount, useQuery } from "wagmi";
import { RuleType } from "@/constants/components";
import { Button } from "./ui/button";
import { RefreshCwIcon } from "lucide-react";

interface Props extends RuleItem {
  addScore: (score: number) => void;
}

export function EventRule({ description, name, title, addScore }: Props) {
  const { address } = useAccount();

  const {
    data: isSuccessful,
    isLoading,
    refetch,
  } = useQuery(
    ["rule", name],
    () =>
      validateRule({
        address: address!,
        type: name as RuleType,
        isTestnet: false,
      }),
    {
      enabled: Boolean(address),
    }
  );

  const [hasAdded, setHasAdded] = useState(false);

  useEffect(() => {
    if (isSuccessful && !hasAdded) {
      addScore(1);
      setHasAdded(true);
    }
  }, [addScore, hasAdded, isSuccessful]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccessful) {
    return (
      <div className="relative bg-gray-300 dark:bg-gray-700 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 overflow-visible bg-opacity-60 hover:bg-opacity-80 transition-all duration-200">
        <div className="w-8 h-8 absolute -top-4 -right-4 text-white bg-red-500 rounded-xl flex items-center justify-center font-bold">
          2
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold text-gray-500">{title}</h3>
            <p className="text-zinc-500 md:text-base lg:text-sm dark:text-zinc-400">
              {description}
            </p>
          </div>
          <Button onClick={() => refetch()} variant={"outline"}>
            <RefreshCwIcon className="w-4 h-4 mr-2" />
            Refetch
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 overflow-visible bg-opacity-60 hover:bg-opacity-80 transition-all duration-200">
      <div className="w-8 h-8 absolute -top-4 -right-4 text-white bg-slate-700 rounded-xl flex items-center justify-center font-bold">
        1
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-zinc-500 md:text-base lg:text-sm dark:text-zinc-400">
            {description}
          </p>
        </div>
        <Button onClick={() => refetch()} variant={"outline"}>
          <RefreshCwIcon className="w-4 h-4 mr-2" />
          Refetch
        </Button>
      </div>
    </div>
  );
}
