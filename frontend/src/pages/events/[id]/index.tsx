import { useRouter } from "next/router";
import { useQuery } from "wagmi";

export async function getServerSideProps() {
  return {
    props: {
      hideNetworkButtons: true,
    },
  };
}

async function getEvent(id: number) {
  try {
    const data = await fetch(process.env.BACKEND_URL + "/events/" + id);
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

  if (!id) {
    return null;
  }

  if (!data) {
    return (
      <div>
        <h1>No event found.</h1>
      </div>
    );
  }

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
}
