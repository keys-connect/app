import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ADDRESS } from "@/constants/address";
import {
  usePrepareTokenFactoryCreate,
  useTokenFactoryCreate,
} from "@/lib/generated";
import { uploadFile } from "@/lib/lighthouse";
import { cn } from "@/lib/utils";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { pad, toHex } from "viem";
import { polygonMumbai } from "viem/chains";
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";
import { RULES } from "../constants/rules";
import { Rule } from "./rule";
import { RuleItem, Rules } from "./rules";
import { useToast } from "./ui/use-toast";

export function CreateKeyForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState<FileList | null>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const contactLinkRef = useRef<HTMLInputElement>(null);
  const ipfsHashRef = useRef<HTMLInputElement>(null);

  const { address } = useAccount();
  const { chain } = useNetwork();
  const [rules, setRules] = useState<(RuleItem & { parameters?: string[] })[]>(
    []
  );
  const apecoinRule = rules.find((r) => r.name === "apecoin");
  const { config } = usePrepareTokenFactoryCreate({
    address: ADDRESS.TokenFactory,
    chainId: chain?.id,
    account: address,
    args: [
      titleRef.current?.value!,
      (titleRef.current?.value || "").slice(0, 3).toUpperCase()!,
      address!,
      [ADDRESS.TokenFactoryERC20BalanceOf],
      [
        [
          pad(ADDRESS.DummyErc20, { size: 32 }),
          toHex(+apecoinRule?.parameters?.[0]! || "", { size: 32 }),
        ],
      ],
      ADDRESS.FunctionsConsumer,
      toHex(titleRef.current?.value || "", { size: 32 }),
    ],
    enabled:
      Boolean(apecoinRule?.parameters?.[0]) && Boolean(titleRef.current?.value),
  });
  let {
    data: writeData,
    writeAsync,
    isLoading,
  } = useTokenFactoryCreate(config);
  writeData = {
    hash: "0x6a8e397685af27b5d1ef3b7fa48ecdcd4cea6e8e7c75ec1817303db5358216c3",
  };
  const { data: txReceipt } = useWaitForTransaction({
    hash: writeData?.hash,
    chainId: chain?.id,
    enabled: writeData !== undefined,
  });
  const [keyId, setKeyId] = useState<string>();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "RULES",
      drop: (item: { id: string }) => {
        const rule = RULES.find((c) => c.name === item.id);
        const exists = rules.find((c) => c.name === rule?.name);
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

  const { toast } = useToast();
  const [hasToastedReceipt, setHasToastedReceipt] = useState(false);

  async function createKey() {
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
          contract: txReceipt?.contractAddress,
          conditionals: rules.map((rule) => ({
            name: rule.name,
            title: rule.title,
            description: rule.description,
            score: rule.score,
            parameters: rule.parameters,
          })),
        }),
      });

      const data = await res.json();

      setKeyId(data.id);
    } catch (e) {
      toast({
        title: "Error creating event",
        description: "Please check the console for more details.",
        variant: "destructive",
      });
      throw e;
    }
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await writeAsync?.();

    toast({
      title: "Event created!",
      description:
        "Please wait for the transaction to complete. Hash: " + writeData?.hash,
    });
  };

  useEffect(() => {
    if (txReceipt?.contractAddress && !keyId) {
      if (!hasToastedReceipt) {
        toast({
          title: "Transaction completed!",
          description: "Doing some entities behind the scene...",
        });
        createKey();
        setHasToastedReceipt(true);
      }
    }
  }, [createKey, keyId, txReceipt]);

  return (
    <section className="gap-8 grid grid-cols-2 mx-auto">
      <form
        className="space-y-4 p-4 px-6 rounded-lg shadow border"
        onSubmit={onSubmit}
      >
        <h1 className="font-bold text-xl">
          Create your Event or Campaign below!
        </h1>
        <div>
          <Label className="font-semibold" htmlFor="title">
            Title of Event/Campaign
          </Label>
          <Input
            required
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
              required
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
              required
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
            required
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
            required
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
          <Button className="w-full" type="submit" disabled={isLoading}>
            Create Event/Campaign
          </Button>
        </div>
      </form>
      <div className="p-4 rounded-lg shadow border h-full mt-auto">
        <div className="space-y-4 h-full">
          <div
            className={cn(
              "bg-gray-50 rounded-lg p-4 h-full border-2 border-dashed space-y-4",
              isOver && "border-solid border-gray-600"
            )}
            ref={drop}
          >
            {rules.length === 0 ? (
              <span className="text-sm text-gray-500">Drag rules here...</span>
            ) : (
              rules.map((conditional) => (
                <Rule
                  key={conditional.name}
                  {...conditional}
                  removeRule={() =>
                    setRules((prev) =>
                      prev.filter((c) => c.name !== conditional.name)
                    )
                  }
                  updateRule={(parameters) => {
                    setRules((prev) => {
                      const ruleIndex = prev.findIndex(
                        (c) => c.name === conditional.name
                      );
                      if (ruleIndex !== -1) {
                        return [
                          ...prev.slice(0, ruleIndex),
                          { ...prev[ruleIndex], parameters },
                          ...prev.slice(ruleIndex + 1),
                        ];
                      }
                      return prev;
                    });
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
