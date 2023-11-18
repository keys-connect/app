import { useRouter } from "next/router";

export async function getStaticProps() {
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

  return <div>hasd</div>;
}
