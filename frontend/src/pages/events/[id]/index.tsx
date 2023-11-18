import { useRouter } from "next/router";

export async function getServerSideProps() {
  return {
    props: {
      showNetworkButtons: false,
    },
  };
}

export default function EventPage() {
  const { query } = useRouter();
  const id = query.id?.toString();

  if (!id) {
    return null;
  }

  return (
    <div className="text-center">
      <div className="p-10 mt-12 rounded-full border shadow mx-auto">LOGO</div>
      <div className="flex justify-center pt-12">
        <w3m-connect-button />
        <w3m-network-button />
      </div>
    </div>
  );
}
