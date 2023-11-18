import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDrop } from "react-dnd";
import { CONDITIONALS, ConditionalItem, Conditionals } from "./conditionals";
import { useState } from "react";
import { Conditional } from "./conditional";

export function ConditionBuilder() {
  const [conditionals, setConditionals] = useState<ConditionalItem[]>([]);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CONDITIONAL",
      drop: (item) => {
        const conditional = CONDITIONALS.find(
          (c) => c.id === (item as { id: string }).id
        );
        const exists = conditionals.find((c) => c.id === conditional?.id);
        console.log({ conditional, conditionals, exists });
        if (conditional && !exists) {
          setConditionals((prev) => [...prev, conditional]);
        } else {
          console.log("Did not add conditional", conditional, item, exists);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [conditionals]
  );

  return (
    <section key="1" className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-4">
        <Conditionals currentConditionals={conditionals} />
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg mb-4">Builder</h2>
          <div className="space-y-4">
            <div
              className={cn(
                "bg-gray-50 rounded-lg p-4 h-[200px] border-2 border-dashed",
                isOver && "border-solid border-gray-600"
              )}
              ref={drop}
            >
              {conditionals.length === 0 ? (
                <span className="text-sm text-gray-500">
                  Drag conditionals here...
                </span>
              ) : (
                conditionals.map((conditional) => (
                  <Conditional
                    key={conditional.id}
                    {...conditional}
                    removeConditional={() =>
                      setConditionals((prev) =>
                        prev.filter((c) => c.id !== conditional.id)
                      )
                    }
                  />
                ))
              )}
            </div>
            <Button
              className="mt-4 bg-gray-800 text-white rounded-md px-4 py-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
