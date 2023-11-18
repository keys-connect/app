import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="py-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tighter pb-4 pt-12">
        Welcome to our landing page
      </h1>
      <p className="max-w-[600px] text-lg pb-12">Tagline</p>
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="col-span-1 container flex flex-col items-center justify-center space-y-6 px-4 py-12 md:px-6 backdrop-blur-lg rounded-lg border shadow">
          <div className="flex flex-col space-y-4 sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-center">
            <Button className="w-full font-bold">Enter as a User</Button>
          </div>
        </div>
        <div className="col-span-1 row-span-2 flex items-center justify-center border shadow rounded-lg">
          <Button>Create Event</Button>
        </div>
        <div className="col-span-1 container flex flex-col items-center justify-center space-y-6 px-4 py-12 md:px-6 backdrop-blur-lg rounded-lg border shadow">
          <div className="flex flex-col space-y-4 sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-center">
            <Button className="w-full font-bold">Enter as a Protocol</Button>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold tracking-tighter pb-4 pt-12">
        Discover
      </h2>
      <div className="grid grid-cols-4 gap-8">
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          ICON
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          ICON
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          ICON
        </div>
        <div className="border px-4 py-12 shadow rounded-lg w-[200px]">
          ICON
        </div>
      </div>
    </section>
  );
}
