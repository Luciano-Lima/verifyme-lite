# VerifyMe Lite

A lightweight identity verification (KYC) demo built with **Next.js (App Router)**, **TypeScript**, and **Prisma ORM**.  
The project implements a multi-step onboarding flow with server-side validation, database-backed session auth, file uploads, and an admin review panel — all without client-side fetch or third-party auth libraries.

---

## What is KYC?

KYC (**Know Your Customer**) is a mandatory identity verification process used by banks, fintech apps, and online platforms to prevent fraud, fake accounts, and money laundering.

Typical KYC flow:
1. Collect personal information  
2. Upload identity document (passport, ID card, driver’s licence)  
3. Upload selfie or live face scan  
4. Manual or automated review → approved or rejected  

This project implements a simplified version of that flow using modern full-stack React patterns.

---

## Tech Stack

- **Next.js (App Router)** — server-first React architecture  
- **TypeScript** — static typing across frontend + backend  
- **Prisma ORM** — typed database client  
- **SQLite (dev)** with optional Postgres deployment  
- **Server Actions** — direct mutations without REST API endpoints  
- **Zod** — form/data validation  
- **Tailwind CSS** — UI styling  
- **bcrypt + HttpOnly cookies** — password hashing + sessions (no NextAuth)

---

## Features

- User authentication with session cookies  
- Multi-step KYC wizard (personal → documents → selfie → review)  
- File uploads stored locally (can be swapped for S3)  
- Admin dashboard for approval / rejection  
- Database-backed audit log  
- Uses server components by default, client components only where needed  
- Cache-revalidation using `revalidateTag` for instant UI updates  
- Avoids client-side data fetching — logic stays on the server

---

## Folder Structure (high level)

