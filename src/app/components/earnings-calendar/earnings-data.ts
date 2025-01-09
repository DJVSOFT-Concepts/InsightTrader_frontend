export interface EarningsData {
  symbol: string;
  reportDate: string;
  fiscalDateEnding: string;
  estimate: number;
  actual: number;
  surprise: number;
  surprisePercentage: number;
}