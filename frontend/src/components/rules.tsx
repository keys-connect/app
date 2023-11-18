import { RULES } from "../constants/components";
import { RuleWithInput } from "./rule-with-inputs";
import { Label } from "./ui/label";

export interface RuleItem {
  id: string;
  name: string;
  description: string;
}

interface Props {
  currentRules: RuleItem[];
}

export function Rules({ currentRules }: Props) {
  return (
    <div className="">
      <Label className="font-semibold">Rules (add rules to the right)</Label>
      <div className="space-y-4 p-4 border rounded-lg">
        {RULES.map((conditional) => (
          <RuleWithInput
            key={conditional.id}
            {...conditional}
            currentRules={currentRules}
          />
        ))}
      </div>
    </div>
  );
}
