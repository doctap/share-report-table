export interface IStock {
  stockId: string
  fields: string[]
}

export interface IItems<T> {
  items: T[]
  error: string
  isLoading: boolean
}
