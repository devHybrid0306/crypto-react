export interface ICrypto {
  id: number;
  name: string;
  currency: string;
  change_value: number;
  change_percentage: number;
  buy: number;
  sell: number;
  src: string;
  bkg_color: string;
}
