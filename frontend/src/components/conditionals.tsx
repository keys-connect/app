import { Conditional } from "./conditional-with-inputs";
import { Label } from "./ui/label";

export interface ConditionalItem {
  id: string;
  name: string;
  description: string;
}

export const CONDITIONALS: ConditionalItem[] = [
  {
    id: "lens",
    name: "Lens",
    description: "Check if user has a lens profile",
  },
];

interface Props {
  currentConditionals: ConditionalItem[];
}

export function Conditionals({ currentConditionals }: Props) {
  return (
    <div className="">
      <Label className="font-semibold">
        Rules (add rules to the right)
      </Label>
      <div className="space-y-4 p-4 border rounded-lg">
        {CONDITIONALS.map((conditional) => (
          <Conditional
            key={conditional.id}
            {...conditional}
            currentConditionals={currentConditionals}
          />
        ))}
      </div>
    </div>
  );
}
