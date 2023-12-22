export const DetailSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-2">
      <div className="dark:bg-brand-softDark bg-brand-softLight h-60 w-full rounded-md" />
      <div className="dark:bg-brand-softDark bg-brand-softLight h-6 w-44 rounded-full" />
      <div className="dark:bg-brand-softDark bg-brand-softLight h-3 w-11/12 rounded-full" />
      <div className="dark:bg-brand-softDark bg-brand-softLight h-3 w-10/12 rounded-full" />
      <div className="dark:bg-brand-softDark bg-brand-softLight h-3 w-full rounded-full" />
      <div className="dark:bg-brand-softDark bg-brand-softLight h-3 w-28 rounded-full" />
    </div>
  )
}
