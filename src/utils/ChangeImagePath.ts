export function removeStringPublic(imageUrl: string) {
  if (imageUrl) {
    return imageUrl.replaceAll('public/', '/')
  }
  return imageUrl
}
