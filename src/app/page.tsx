export default function Home() {
  // Server Component — static content renders fast
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Faster, safer onboarding</h1>
      <p className="text-gray-700">
        This is a visual prototype of a KYC (Know Your Customer) flow.
        We’ll add real backend later — for now you can click through the steps.
      </p>

      <div className="flex gap-3">
        <a href="/dashboard/kyc/personal" className="rounded bg-black px-4 py-2 text-white">
          Start KYC
        </a>
        <a href="/dashboard" className="rounded border px-4 py-2">
          Go to Dashboard
        </a>
      </div>
    </section>
  );
}
