"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Progress from "@/components/Progress";

export default function PersonalPage() {
  const router = useRouter();

  // Local UI state for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Load saved values (if user returns to this step)
  useEffect(() => {
    const saved = localStorage.getItem("kyc_personal");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setFirstName(data.firstName ?? "");
        setLastName(data.lastName ?? "");
      } catch {}
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill in both names");
      return;
    }

    // Save to localStorage (UI-only prototype)
    localStorage.setItem(
      "kyc_personal",
      JSON.stringify({ firstName: firstName.trim(), lastName: lastName.trim() })
    );

    // Go to next step
    router.push("/dashboard/kyc/documents");
  }

  return (
    <div className="max-w-md">
      <Progress step={1} />
      <h3 className="mb-2 text-xl font-semibold">Step 1 · Personal details</h3>
      {error && <p className="mb-2 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full rounded border p-2"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="w-full rounded border p-2"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="rounded bg-black px-3 py-2 text-white">Save & Continue</button>
        </div>
      </form>
    </div>
  );
}
