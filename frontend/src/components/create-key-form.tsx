import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEventHandler, useRef, useState } from "react";
import { CONDITIONALS, ConditionalItem, Conditionals } from "./conditionals";
import { Conditional } from "./conditional";
import { cn } from "@/lib/utils";
import { useDrop } from "react-dnd";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";

export function CreateKeyForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const contactLinkRef = useRef<HTMLInputElement>(null);

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

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(
      titleRef.current?.value,
      logoRef.current?.value,
      startDateRef.current?.value,
      endDateRef.current?.value,
      descriptionRef.current?.value,
      contactLinkRef.current?.value
    );

    setIsOpen(true);
  };

  return (
    <section className="my-12 gap-8 grid grid-cols-2 mx-auto">
      <form
        className="space-y-4 p-4 px-6 rounded-lg shadow border h-full"
        onSubmit={onSubmit}
      >
        <div>
          <Label className="font-semibold" htmlFor="title">
            Title of Event/Campaign
          </Label>
          <Input
            aria-required="true"
            className="w-full"
            id="title"
            placeholder="Enter title"
            type="text"
            ref={titleRef}
          />
        </div>
        <div>
          <Label className="font-semibold" htmlFor="logo">
            Upload Logo
          </Label>
          <Input
            aria-required="true"
            className="w-full"
            id="logo"
            type="file"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-semibold" htmlFor="startDate">
              Start Date
            </Label>
            <Input
              aria-required="true"
              className="w-full"
              id="startDate"
              type="date"
              ref={startDateRef}
            />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="endDate">
              End Date
            </Label>
            <Input
              aria-required="true"
              className="w-full"
              ref={endDateRef}
              id="endDate"
              type="date"
            />
          </div>
        </div>
        <div>
          <Label className="font-semibold" htmlFor="description">
            Description / Details
          </Label>
          <Textarea
            aria-required="true"
            ref={descriptionRef}
            className="w-full h-32"
            id="description"
          />
        </div>
        <div>
          <Label className="font-semibold" htmlFor="contactLink">
            Contact Link
          </Label>
          <Input
            aria-required="true"
            className="w-full"
            id="contactLink"
            ref={contactLinkRef}
            placeholder="Enter contact link"
            type="link"
          />
        </div>
        <Conditionals currentConditionals={conditionals} />
        <div>
          <Button className="w-full" type="submit">
            Create Event/Campaign
          </Button>
        </div>
      </form>
      <div className="p-4 rounded-lg shadow border h-full mt-auto">
        <div className="space-y-4 h-full">
          <div
            className={cn(
              "bg-gray-50 rounded-lg p-4 h-full border-2 border-dashed",
              isOver && "border-solid border-gray-600"
            )}
            ref={drop}
          >
            {conditionals.length === 0 ? (
              <span className="text-sm text-gray-500">Drag rules here...</span>
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
        </div>
      </div>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Congratulations!</AlertDialogTitle>
            <AlertDialogDescription>
              Your event has been created. Here is a link to share with your
              followers.
              <Input
                type="text"
                disabled
                defaultValue={"https://k3ys.xyz/events/id"}
                className="mt-4 bg-slate-200 text-black"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
