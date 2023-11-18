import { cn } from "@/lib/utils";
import { useDrag } from "react-dnd";
import { ConditionalItem } from "./conditionals";

interface Props extends ConditionalItem {
  currentConditionals: ConditionalItem[];
}

export function Conditional({
  id,
  name,
  description,
  currentConditionals,
}: Props) {
  const isDraggable = !currentConditionals.find((c) => c.id === id);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "CONDITIONAL",
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
          (isDragging || !isDraggable) && "cursor-not-allowed opacity-70"
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
      </div>
    </div>
  );
}
