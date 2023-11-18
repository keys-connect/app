export const RULES = [
  {
    id: "lens",
    name: "Lens",
    description: "Check if user has a lens profile",
  },
  {
    id: "ens",
    name: "ENS",
    description: "Check if user has a ENS domain",
  },
  {
    id: "safe",
    name: "Safe",
    description: "Check if user has a safe account",
  },
  {
    id: "apecoin",
    name: "Apecoin DAO",
    description: "Check amount of APECOINs a user has",
  },
] as const;

export type RuleType = (typeof RULES)[number]["id"];
