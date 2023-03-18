export interface IStock {
  askPrice: number
  askSize: number
  bidPrice: number
  bidSize: number
  lastSalePrice: number
  lastSaleSize: number
  lastSaleTime: number
  lastUpdated: number
  sector: string
  securityType: string
  symbol: string
  volume: number
}

export interface IResponse {
  pageCount: number
  stocks: IStock[]
}

export interface IItems<T> {
  items: T[]
  error: string
  isLoading: boolean
}
