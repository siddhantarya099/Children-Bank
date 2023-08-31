export class account {
  accountNumber: number;
  balance: number;
  transactions: [];
  id: string;

  constructor(accountNumber: number, balance: number, transactions: [], id: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = transactions
    this.id = id
  }
}