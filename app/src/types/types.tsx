export interface AccountDetail {
  alias: string;
  account_number: string; // es string, no number
  balance: number;
  currency: string;
}

export interface User {
  id: number;
  full_name: string;
  profile_photo: string;
  products: { type: string; id: string }[];
}

export interface Transaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: { currency: string; value: number };
  origin: string;
  destination: string;
  transaction_date: string;
}
