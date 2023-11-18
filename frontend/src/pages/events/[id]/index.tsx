import EventRules from "@/components/event-rules";
import { useValidateRule } from "@/hooks/useValidateRule";
import { useRouter } from "next/router";
import { useAccount, useQuery } from "wagmi";

export async function getServerSideProps() {
  return {
    props: {
      hideNetworkButtons: true,
    },
  };
}

async function getEvent(id: number) {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/events/" + id
    );
    return data.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export default function EventPage() {
  const { query } = useRouter();
  const id = query.id?.toString();
  const { data } = useQuery([id, "events"], () => getEvent(+id!), {
    enabled: Boolean(id),
  });
  const { address } = useAccount();

  const { data: isValid } = useValidateRule({
    address,
    type: "safe",
    isTestnet: false,
  });

  console.log({ data });

  if (!id) {
    return null;
  }

  if (!data || !data.event) {
    return (
      <div>
        <h1>No event found.</h1>
      </div>
    );
  }

  if (!address)
    return (
      <div className="text-center">
        <img
          src={`https://gateway.lighthouse.storage/ipfs/${data.event.hash}`}
          alt="Logo"
        />
        <div className="flex justify-center pt-12">
          <w3m-connect-button />
          <w3m-network-button />
        </div>
      </div>
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl pb-6">{data.event.title}</h1>
      <div className="flex items-center justify-center">
        <img
          src={`https://gateway.lighthouse.storage/ipfs/${data.event.hash}`}
          alt="Logo"
          className="border-2 rounded-full aspect-square object-cover"
        />
      </div>
      <EventRules rules={data.event.keyRules} />
      <div className="flex space-x-4 justify-center pt-12"></div>
    </div>
  );
}
