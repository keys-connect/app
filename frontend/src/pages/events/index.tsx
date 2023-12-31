import Link from "next/link";
import { useQuery } from "wagmi";

async function getEvents() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/events"
    );
    const json = await response.json();
    return json;
  } catch (e) {
    throw e;
  }
}

export default function EventsPage() {
  const { data } = useQuery(["events"], () => getEvents());

  if (!data) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Events Page</h1>
      </div>
    );
  }
  console.log(data);
  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight">Events Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.events.map((event: any) => (
          <div className="rounded-lg overflow-hidden shadow-md" key={event.id}>
            <img
              src={`https://gateway.lighthouse.storage/ipfs/${event.hash}`}
              alt="Logo"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              height="300"
              width="400"
              className="w-full h-60 object-cover"
            />
            <div className="p-6 bg-white dark:bg-zinc-950">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                {event.description}
              </p>
              <Link
                className="mt-4 inline-flex text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
                href={`/events/${event.id}`}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
