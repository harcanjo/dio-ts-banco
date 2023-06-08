import { CompanyAccount } from './class/CompanyAccount'
import { PremiumAccount } from './class/PremiumAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(175)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(480)
console.log(companyAccount)
companyAccount.getLoan(1000)
console.log(companyAccount)

const premiumAccount: PremiumAccount = new PremiumAccount('Hugo', 13)
premiumAccount.deposit(100)
console.log(premiumAccount)