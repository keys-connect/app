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
    description: "Check amount of APECOINs a user has",
  },
] as const;

export type RuleType = (typeof RULES)[number]["name"];
