export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`You deposited ${amount}`);
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`You withdrew ${amount}`);
    } else {
      console.log('Insufficient funds or invalid account');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected updateBalance = (amount: number): void => {
    this.balance += amount;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected isValid = (): boolean => {
    return this.validateStatus();
  }
}
