import { Conditional } from "./conditional-with-inputs";

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
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-4">Conditionals</h2>
      <div className="space-y-4">
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
