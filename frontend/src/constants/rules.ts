export const RULES = [
  {
    name: "lens",
    title: "Lens",
    description: "Check if user has a lens profile",
  },
  {
    name: "ens",
    title: "ENS",
    description: "Check if user has a ENS domain",
  },
  {
    name: "safe",
    title: "Safe",
    description: "Check if user has a safe account",
  },
  {
    name: "apecoin",
    title: "Apecoin DAO",
    description: "Check if user has sufficient APECOINs",
  },
  {
    name: "worldcoin",
    title: "Worldcoin ID",
    description: "Check if user has Worldcoin ID",
  },
] as const;

export type RuleType = (typeof RULES)[number]["name"];
