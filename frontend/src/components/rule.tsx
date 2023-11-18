import { cn } from "@/lib/utils";
import { useDrag } from "react-dnd";
import { RuleItem } from "./rules";
import { RulerIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

interface Props extends RuleItem {
  removeRule: () => void;
  updateRule: (parameters: string[]) => void;
}

export function Rule({
  name,
  title,
  description,
  removeRule,
  updateRule,
}: Props) {
  const [parameters, setParameters] = useState<string[]>([]);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "RULES",
    item: { id: name, parameters },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    updateRule(parameters);
  }, [parameters, updateRule]);

  return (
    <div>
      <div
        className={cn(
          "flex items-center p-2 py-6 border rounded-lg cursor-move bg-white",
          isDragging && "cursor-not-allowed"
        )}
        ref={drag}
      >
        <RulerIcon className="ml-2 mr-4" />
        <div className="flex-grow">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          {name === "apecoin" && (
            <Input
              required
              value={parameters[0]}
              onChange={(e) => {
                setParameters((prev) => {
                  prev[0] = e.target.value;
                  return prev;
                });
              }}
              placeholder="Enter amount"
              className="bg-gray-50 mt-2"
            />
          )}
        </div>
        <Button
          variant={"outline"}
          className="px-2 mx-2"
          onClick={() => removeRule()}
        >
          <TrashIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
