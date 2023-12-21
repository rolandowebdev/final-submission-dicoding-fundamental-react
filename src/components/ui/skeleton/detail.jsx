export const DetailSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-2">
      <div className="h-60 w-full rounded-md bg-slate-300 dark:bg-softDark" />
      <div className="h-6 w-44 rounded-full bg-slate-300 dark:bg-softDark" />
      <div className="h-3 w-11/12 rounded-full bg-slate-300 dark:bg-softDark" />
      <div className="h-3 w-10/12 rounded-full bg-slate-300 dark:bg-softDark" />
      <div className="h-3 w-full rounded-full bg-slate-300 dark:bg-softDark" />
      <div className="h-3 w-28 rounded-full bg-slate-300 dark:bg-softDark" />
    </div>
  )
}
