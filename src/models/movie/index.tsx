export type Movie = {
  id: string,
  name: string,
  rating: string,
  category: string,
  starRating: number,
  price?: number,
  tomatometer?: number,
  isQualified?: string,
  rent: number,
  thumbnail: string,
  largeThumbnail: string,
  trailer?: string,
  info?: string,
  warning?: string,
  description: string,
  duration: number,
  year: number,
}