/** Shown while the next page is being prepared on the server. */
export default function JourneyLoading() {
  return (
    <div className="grid min-h-[100dvh] place-items-center">
      <div className="flex flex-col items-center gap-5">
        <span className="block h-14 w-14 animate-spin rounded-full border border-ink/10 border-t-accent" />
        <p className="font-serif text-xl italic text-muted">One moment</p>
      </div>
    </div>
  );
}
