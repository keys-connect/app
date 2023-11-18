import { cn } from "@/lib/utils";
import { useDrag } from "react-dnd";
import { ConditionalItem } from "./conditionals";
import { TrashIcon } from "lucide-react";
import { Button } from "./ui/button";

interface Props extends ConditionalItem {
  removeConditional: () => void;
}

export function Conditional({
  id,
  name,
  description,
  removeConditional,
}: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CONDITIONAL",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div>
      <div
        className={cn(
          "flex items-center p-2 border rounded-lg cursor-move bg-gray-50",
          isDragging && "cursor-not-allowed"
        )}
        ref={drag}
      >
        <svg
          className=" w-5 h-5 text-gray-400 mr-2"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <path d="m17 12 3-2v8" />
        </svg>
        <div className="flex-grow">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Button
          variant={"outline"}
          className="px-2"
          onClick={() => removeConditional()}
        >
          <TrashIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
