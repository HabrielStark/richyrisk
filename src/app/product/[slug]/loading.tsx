export default function Loading() {
  return (
    <div className="mx-auto max-w-[1500px] px-6 pt-32 md:px-8 md:pt-40">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] animate-pulse bg-porcelain-deep" />
        <div className="flex flex-col gap-4 py-6">
          <div className="h-4 w-24 animate-pulse bg-porcelain-deep" />
          <div className="h-14 w-3/4 animate-pulse bg-porcelain-deep" />
          <div className="h-4 w-40 animate-pulse bg-porcelain-deep" />
          <div className="mt-4 h-24 w-full animate-pulse bg-porcelain-deep" />
          <div className="mt-4 h-12 w-full animate-pulse bg-porcelain-deep" />
        </div>
      </div>
    </div>
  );
}
