import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-gray-700">Your account area. Complete the KYC to unlock features.</p>

      <div className="flex gap-3">
        <Link className="underline" href="/dashboard/kyc/personal">
          Start KYC
        </Link>
        <Link className="underline" href="/dashboard/kyc/review">
          Review (demo)
        </Link>
      </div>
    </div>
  );
}
