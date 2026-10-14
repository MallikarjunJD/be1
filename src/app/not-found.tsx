import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-bg px-6 text-center text-ink">
      <div>
        <h1 className="font-serif text-5xl">Nothing here.</h1>
        <p className="mt-4 text-muted">This page does not exist.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm text-bg">
          Go to the start
        </Link>
      </div>
    </main>
  );
}
