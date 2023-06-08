import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.isValid()) {
      this.updateBalance(amount);
      console.log(`You got a loan of ${amount}`);
    } else {
      console.log('Invalid account');
    }
  }
}
