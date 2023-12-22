export const CardSkeleton = () => {
  return (
    <div className="dark:bg-brand-softDark bg-brand-softLight flex h-[290px] animate-pulse flex-col gap-4 rounded-md p-4">
      <div className="dark:bg-brand-dark bg-brand-light h-6 w-full rounded-full" />
      <div className="dark:bg-brand-dark bg-brand-light h-20 w-full rounded-md" />
      <div className="dark:bg-brand-dark bg-brand-light h-4 w-full rounded-full" />
      <div className="dark:bg-brand-dark bg-brand-light h-4 w-full rounded-full" />
      <div className="dark:bg-brand-dark bg-brand-light h-4 w-full rounded-full" />
      <div className="mt-auto flex gap-2">
        <div className="dark:bg-brand-dark bg-brand-light h-8 w-20 rounded-md" />
        <div className="dark:bg-brand-dark bg-brand-light h-8 w-20 rounded-md" />
      </div>
    </div>
  )
}
