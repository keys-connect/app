import { RULES } from "../constants/rules";
import { RuleWithoutInput } from "./rule-without-input";
import { Label } from "./ui/label";

export interface RuleItem {
  name: string;
  title: string;
  description: string;
  score?: number;
}

interface Props {
  currentRules: RuleItem[];
}

export function Rules({ currentRules }: Props) {
  return (
    <div className="">
      <Label className="font-semibold">Rules (add rules to the right)</Label>
      <div className="space-y-4 p-4 border rounded-lg max-h-[200px] overflow-y-auto">
        {RULES.map((conditional) => (
          <RuleWithoutInput
            key={conditional.name}
            {...conditional}
            currentRules={currentRules}
          />
        ))}
      </div>
    </div>
  );
}
