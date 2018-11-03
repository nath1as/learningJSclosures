function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];

    return {
      deposit: function(amount) {
        transactions.push({type: "deposit", amount: amount});
        balance += amount;
        return amount;
      },

      withdraw: function(amount) {
        if (amount > balance) {
          amount = balance;
        }

        transactions.push({type: "withdraw", amount: amount});
        balance -= amount;
        return amount;
      },

      balance: function() {
        return balance;
      },

      number: function() {
        return number;
      },

      transactions: function() {
        return transactions;
      },
    };
  }

  return {
    openAccount: function() {
      var number = accounts.length + 101;
      var account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

var bank = makeBank();
bank.accounts;
var account = makeAccount();
console.log(account.deposit(33));
console.log(account.withdraw(43));
console.log(account.balance);
console.log(account.transactions);

var source = bank.openAccount();
source.deposit(10);
var destination = bank.openAccount();
bank.transfer(source, destination, 7);
source.balance();
destination.balance();
source.transactions();
source.number();

