export const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }

  return new Date(date).toLocaleDateString('en-EN', options)
}
