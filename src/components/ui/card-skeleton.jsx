export const CardSkeleton = () => {
  return (
    <div className="flex h-[290px] animate-pulse flex-col gap-4 rounded-md bg-softDark p-4">
      <div className="h-6 w-full rounded-full bg-dark" />
      <div className="h-20 w-full rounded-md bg-dark" />
      <div className="h-4 w-full rounded-full bg-dark" />
      <div className="h-4 w-full rounded-full bg-dark" />
      <div className="h-4 w-full rounded-full bg-dark" />
      <div className="mt-auto flex gap-2">
        <div className="h-8 w-20 rounded-md bg-dark" />
        <div className="h-8 w-20 rounded-md bg-dark" />
      </div>
    </div>
  )
}
