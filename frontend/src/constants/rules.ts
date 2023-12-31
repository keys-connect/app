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
    name: "ens-with-avatar",
    title: "ENS",
    description: "Check if user has a ENS domain + avatar",
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
    description: "Require user to login with Worldcoin",
  },
] as const;

export type RuleType = (typeof RULES)[number]["name"];
