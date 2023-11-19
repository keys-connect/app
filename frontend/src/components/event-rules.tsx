import { useState } from "react";
import { EventRule } from "./event-rule";
import { RuleItem } from "./rules";

interface Props {
  rules: RuleItem[];
}

export default function EventRules({ rules }: Props) {
  const [passedRules, setPassedRules] = useState<string[]>([]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-4xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-6">
          {rules.map((rule) => (
            <EventRule
              key={rule.name}
              {...rule}
              addRulePassed={(ruleName) =>
                setPassedRules((prev) => [...prev, ruleName])
              }
            />
          ))}
          <div className="p-4 overflow-visible transition-all duration-200 max-w-md mx-auto">
            <div>
              <h3 className="text-4xl font-extrabold">Total points: </h3>
              <p className="text-5xl font-extrabold text-green-700">
                {new Set(passedRules).size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
