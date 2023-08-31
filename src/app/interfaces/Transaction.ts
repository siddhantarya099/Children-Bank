export class transactions {
  senderAccount: number;
  receiverAccount: number;
  type: string;
  amountInvloved: number;

  constructor(senderAccount: number, receiverAccount: number, type: string, amountInvolved: number) {
    this.senderAccount = senderAccount;
    this.receiverAccount = receiverAccount;
    this.type = type;
    this.amountInvloved = amountInvolved;
  }
}