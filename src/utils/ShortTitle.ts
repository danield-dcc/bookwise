export function shorterTitle(title: string) {
  if (title.length > 27) {
    return title.slice(0, 27).concat('...')
  }
  return title
}
