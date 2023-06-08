import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.isValid()) {
      this.updateBalance(amount + 10);
      console.log(`You deposited ${amount + 10}`);
    } else {
      console.log('Invalid account');
    }
  }
}
