import Web3Connect from "@/hooks/Web3Connect";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Chess3</h1>
        <Web3Connect />
    </main>
  );
}
