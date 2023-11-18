import { cn } from "@/lib/utils";
import { useDrag } from "react-dnd";
import { RuleItem } from "./rules";
import { RulerIcon } from "lucide-react";

interface Props extends RuleItem {
  currentRules: RuleItem[];
}

export function RuleWithoutInput({
  name: id,
  title: name,
  description,
  currentRules,
}: Props) {
  const isDraggable = !currentRules.find((c) => c.name === id);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "RULES",
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      canDrag: () => isDraggable,
    }),
    [isDraggable]
  );

  return (
    <div>
      <div
        className={cn(
          "flex items-center p-2 border rounded-lg cursor-move bg-gray-50",
          (isDragging || !isDraggable) && "cursor-not-allowed opacity-50"
        )}
        ref={drag}
      >
        <RulerIcon className="mr-4 ml-2" />
        <div className="flex-grow">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
