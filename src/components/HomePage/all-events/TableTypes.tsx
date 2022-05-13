export interface Column {
  id: 'start' | 'discipline' | 'status' | 'event' | 'location'
  label: string
  minWidth?: number
  maxWidth?: number
  width?: string | number
  align?: 'center' | 'right'
  format?: (value: number) => string
}
export interface Data {
  start: string
  discipline: string
  status: string
  event: string
  location: string
}
