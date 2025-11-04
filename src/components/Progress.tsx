"use client"

import React from "react"

export default function Progress({ step }: { step: 1 | 2 | 3 | 4 }) {
    const labels = ["Personal", "Documents", "Selfie", "Review"]
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
                {labels.map((label, i) => {
                    const current = i + 1;
                    const active = current <= step;
                    return (
                        <div key={label} className="flex-1">
                          <div
                            className={`h-2 rounded ${active ? "bg-black" : "bg-gray-300"}`}
                            title={label}
                          />
                          <div className="mt-1 text-center">{label}</div>
                        </div>
                      );
                })}
            </div>
        </div>
    )
}