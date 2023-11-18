import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="w-screen h-screen py-12 flex items-center justify-center bg-slate-900 dark:bg-[#1C1C1E]">
      <div className="container flex flex-col items-center justify-center space-y-6 px-4 py-12 md:px-6 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-20 backdrop-blur-lg rounded-lg border border-white border-opacity-20 shadow-lg">
        <h2 className="text-4xl font-bold tracking-tighter text-white">
          Welcome to our landing page
        </h2>
        <p className="max-w-[600px] text-lg text-zinc-100">
          Choose your role and start exploring.
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-center">
          <Button className="w-full font-bold">I&apos;m a protocol</Button>
          <Button className="w-full font-bold">I&apos;m a user</Button>
        </div>
      </div>
    </section>
  );
}
