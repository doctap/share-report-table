export interface IResponseStock {
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

export interface IStock extends IResponseStock {
  rowNumber: number
}

export interface IStocksFetching {
  pagesCount: number
  stocks: IResponseStock[]
  error: string
  isLoading: boolean
}

export interface IResponse {
  totalItemCount: number
  stocks: IResponseStock[]
}

export interface IItems<T> {
  items: T[]
  error: string
  isLoading: boolean
}
