import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tighter pb-4 pt-12">
        The k3ys to your events
      </h1>
      <p className="max-w-[600px] text-lg pb-12">Powered by zero knowledge</p>
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="col-span-1 container flex flex-col items-center justify-center space-y-6 px-4 py-12 md:px-6 backdrop-blur-lg rounded-lg border shadow">
          <div className="flex flex-col space-y-4 sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-center">
            <Button className="w-full font-bold">Enter as a User</Button>
          </div>
        </div>
        <div className="col-span-1 row-span-2 flex flex-col items-center justify-center border shadow rounded-lg">
          <Button asChild>
            <Link href="/create">Click Here</Link>
          </Button>
          <p className="text-muted-foreground pt-2 tracking-tight">
            Quick-Launch Your Event or Campaign
          </p>
        </div>
        <div className="col-span-1 container flex flex-col items-center justify-center space-y-6 px-4 py-12 md:px-6 backdrop-blur-lg rounded-lg border shadow">
          <div className="flex flex-col space-y-4 sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-center">
            <Button className="w-full font-bold">Enter as a Protocol</Button>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold tracking-tighter pb-4 pt-12">
        Discover new events here!
      </h2>
      <div className="grid grid-cols-4 gap-8">
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          <Image
            src="/chiliz.png"
            className="aspect-square mx-auto"
            width={100}
            height={100}
            alt="Chiliz Logo"
          />
          <p className="text-muted-foreground tracking-tight pt-4 leading-6">
            Event Round Up - Leaderboard Prize Giveaway
          </p>
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          <Image
            src="/aave.png"
            className="aspect-square mx-auto"
            width={100}
            height={100}
            alt="Aave Logo"
          />
          <p className="text-muted-foreground tracking-tight pt-4 leading-6">
            The after-ETH underground Rave
          </p>
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          <Image
            src="/apecoin.png"
            className="aspect-square mx-auto"
            width={100}
            height={100}
            alt="Apecoin Logo"
          />
          <p className="text-muted-foreground tracking-tight pt-4 leading-6">
            New NFT drop - get on the allow list
          </p>
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          <Image
            src="/nouns.png"
            className="aspect-square mx-auto"
            width={100}
            height={100}
            alt="Nouns Logo"
          />
          <p className="text-muted-foreground tracking-tight pt-4 leading-6">
            Red Glasses Meet Up - Secret Location
          </p>
        </div>
      </div>
    </section>
  );
}
