import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadFile } from "@/lib/lighthouse";
import { cn } from "@/lib/utils";
import { FormEventHandler, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { Rule } from "./rule";
import { RuleItem, Rules } from "./rules";
import { RULES } from "../constants/components";
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog";
import { useAccount } from "wagmi";

export function CreateKeyForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState<FileList | null>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const contactLinkRef = useRef<HTMLInputElement>(null);
  const ipfsHashRef = useRef<HTMLInputElement>(null);
  const { address } = useAccount();

  const [rules, setRules] = useState<RuleItem[]>([]);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "RULES",
      drop: (item) => {
        const rule = RULES.find((c) => c.id === (item as { id: string }).id);
        const exists = rules.find((c) => c.id === rule?.id);
        console.log({ rule, rules, exists });
        if (rule && !exists) {
          setRules((prev) => [...prev, rule]);
        } else {
          console.log("Did not add rule", rule, item, exists);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [rules]
  );

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      let hash: string;
      if (logo) {
        const response = await uploadFile(logo);
        hash = response.data.Hash;
      } else if (ipfsHashRef.current?.value) {
        hash = ipfsHashRef.current.value;
      } else {
        throw new Error("No hash");
      }
      const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hash,
          title: titleRef.current?.value,
          startDate: startDateRef.current?.value,
          endDate: endDateRef.current?.value,
          description: descriptionRef.current?.value,
          contactLink: contactLinkRef.current?.value,
          address,
          conditionals: rules.map((conditional) => ({
            id: conditional.id,
          })),
        }),
      });

      const data = await res.json();

      console.log({ data });
    } catch (e) {
      console.log(e);
    }

    return "";
  };

  return (
    <section className="gap-8 grid grid-cols-2 mx-auto">
      <form
        className="space-y-4 p-4 px-6 rounded-lg shadow border"
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
            onChange={(e) => {
              if (e.target.files) {
                setLogo(e.target.files);
              }
            }}
          />
          <Input
            className="w-full"
            type="text"
            placeholder="or enter IPFS CID here"
            ref={ipfsHashRef}
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
        <Rules currentRules={rules} />
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
            {rules.length === 0 ? (
              <span className="text-sm text-gray-500">Drag rules here...</span>
            ) : (
              rules.map((conditional) => (
                <Rule
                  key={conditional.id}
                  {...conditional}
                  removeRule={() =>
                    setRules((prev) =>
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
