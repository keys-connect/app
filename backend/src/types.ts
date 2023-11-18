interface KeyRules {
  rules: KeyRule[];
  operations: Operation[]; // len(rules) - 1
}

enum Operation {
  AND,
  OR,
}

enum KeyRuleType {
  GRAPH,
  ALCHEMY,
  DUNE,
  CONTRACT,
}

interface KeyRule {
  
}
