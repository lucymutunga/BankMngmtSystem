class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this._accountNumber = accountNumber;
      this._accountHolder = accountHolder;
      this._balance = balance;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    get accountHolder() {
      return this._accountHolder;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      this._balance += amount;
      console.log(`Deposited ${amount} into account ${this._accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this._accountNumber}.`);
      } else {
        console.log("Insufficient balance.");
      }
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this._interestRate = interestRate;
    }
  
    calculateInterest() {
      const interestAmount = this._balance * (this._interestRate / 100);
      console.log(
        `Interest amount for account ${this._accountNumber}: ${interestAmount}.`
      );
      return interestAmount;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this._overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this._accountNumber}.`);
      } else if (amount <= this._balance + this._overdraftLimit) {
        const overdraftAmount = amount - this._balance;
        this._balance = 0;
        console.log(
          `Withdrawn ${amount} from account ${this._accountNumber} (including overdraft of ${overdraftAmount}).`
        );
      } else {
        console.log("Exceeded overdraft limit.");
      }
    }
  }
  
  // Create instances of each account type
  const savingsAccount = new SavingsAccount("SA001", "John Doe", 5000, 5);
  const checkingAccount = new CheckingAccount("CA001", "Jane Smith", 2000, 1000);
  
  // Retrieve account information
  console.log("Savings Account Information:");
  console.log("Account Number:", savingsAccount.accountNumber);
  console.log("Account Holder:", savingsAccount.accountHolder);
  console.log("Balance:", savingsAccount.balance);
  
  console.log("\nChecking Account Information:");
  console.log("Account Number:", checkingAccount.accountNumber);
  console.log("Account Holder:", checkingAccount.accountHolder);
  console.log("Balance:", checkingAccount.balance);
  
  // Deposit into accounts
  savingsAccount.deposit(1000);
  checkingAccount.deposit(500);
  
  // Withdraw from accounts
  savingsAccount.withdraw(2000);
  checkingAccount.withdraw(3000);
  
  // Calculate interest for savings account
  savingsAccount.calculateInterest();
  
  // Perform a withdrawal within overdraft limit for checking account
  checkingAccount.withdraw(2500);
  
  // Perform a withdrawal exceeding overdraft limit for checking account
  checkingAccount.withdraw(4000);








// class BankAccount {
//     constructor(accountNumber, accountHolder, balance) {
//       this._accountNumber = accountNumber;
//       this._accountHolder = accountHolder;
//       this._balance = balance;
//     }
//     get accountNumber() {
//         return this._accountNumber;
//       }
//     get accountHolder() {
//         return this._accountHolder;
//       }
//     get balance() {
//         return this._balance;
//       }
//     set accountHolder(accountHolder) {
//         this._accountHolder = accountHolder;
//       }
//     set balance(balance) {
//         this._balance = balance;
//       }
//     deposit(amount) {
//         this._balance += amount;
//       }
//     withdraw(amount) {
//         this._balance -= amount;
//       }
//     toString() {
//         return `(${this._accountNumber}, ${this._accountHolder}, ${this._balance})`;
//       }
//     }
//     class CheckingAccount extends BankAccount {
//     constructor(accountNumber, accountHolder, balance, overdraftLimit) {
//         super(accountNumber, accountHolder, balance);
//         this._overdraftLimit = overdraftLimit;
//       }
//     get overdraftLimit() {
//         return this._overdraftLimit;
//       }
//     set overdraftLimit(overdraftLimit) {
//         this._overdraftLimit = overdraftLimit;
//       }
//     withdraw(amount) {
//         if (amount <= this._balance + this._overdraftLimit) {
//           this._balance -= amount;
//         } else {
//           throw new Error("Insufficient funds");
//         }
//       }
//     toString() {
//         return `Checking account ${this._accountNumber}: balance ${this._balance}`;
//       }
//     endOfMonth() {
//         if (this._balance < 0) {
//           return `Warning, low balance CheckingAccount ${this._accountNumber}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
//         }
//         return "";
//       }
//     }
//     class SavingsAccount extends BankAccount {
//     constructor(accountNumber, accountHolder, balance, interest) {
//         super(accountNumber, accountHolder, balance);
//         this._interest = interest;
//       }
//     get interest() {
//         return this._interest;
//       }
//     set interest(interest) {
//         this._interest = interest;
//       }
//     addInterest() {
//         this._balance += this._balance * this._interest / 100;
//       }
//     toString() {
//         return `Savings account ${this._accountNumber}: balance ${this._balance}`;
//       }
//     endOfMonth() {
//         this.addInterest();
//         return `Interest added SavingsAccount ${this._accountNumber}: balance: ${this._balance} interest: ${this._interest}`;
//       }
//     }
//     class Bank {
//     constructor() {
//         this._accounts = [];
//       }
//     addAccount() {
//         this._accounts.push(new BankAccount(this._accounts.length + 1, "accountHolder", 0));
//       }
//     addSavingsAccount(interest) {
//         this._accounts.push(new SavingsAccount(this._accounts.length + 1, "accountHolder", 0, interest));
//       }
//     addCheckingAccount(overdraft) {
//         this._accounts.push(new CheckingAccount(this._accounts.length + 1, "accountHolder", 0, overdraft));
//       }
//     closeAccount(number) {
//         this._accounts = this._accounts.filter((account) => account.accountNumber !== number);
//       }
//     accountReport() {
//         return this._accounts.map((account) => account.toString()).join("\n");
//       }
//     endOfMonth() {
//         return this._accounts.map((account) => account.endOfMonth()).join("\n");
//       }
//     }
//     const bank = new Bank();
//     bank.addAccount();
//     bank.addCheckingAccount(500);
//     bank.addSavingsAccount(25);
//     console.log(bank.accountReport());
//     bank._accounts[0].deposit(1000);
//     bank._accounts[1].deposit(1000);
//     bank._accounts[2].deposit(1000);
//     console.log(bank.accountReport());
//     bank._accounts[0].withdraw(1500);
//     bank._accounts[1].withdraw(1500);
//     bank._accounts[2].withdraw(1500);
//     console.log(bank.accountReport());
//     bank.closeAccount(1);
//     console.log(bank.accountReport());
//     console.log(bank.endOfMonth());


  