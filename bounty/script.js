// Bank Account class to manage accounts
class BankAccount {
    constructor(accountHolder, accountType, initialBalance) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = initialBalance;
    }

    // Deposit funds into the account
    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid deposit amount");
        }
        this.balance += amount;
    }

    // Withdraw funds from the account
    withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid withdrawal amount");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}

// Create a new bank account with initial values
const account = new BankAccount("", "Savings", 1000);

// Handle user actions when a button is clicked
document.getElementById("performAction").addEventListener("click", () => {
    const action = document.getElementById("action").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const messageElement = document.getElementById("message");

    try {
        switch (action) {
            case "deposit":
                account.deposit(amount);
                alert("Deposit successful!");
                break;
            case "withdraw":
                account.withdraw(amount);
                alert("Withdrawal successful!");
                break;
            case "checkBalance":
                messageElement.textContent = `Current Balance: $${account.balance.toFixed(2)}`;
                break;
            default:
                throw new Error("Invalid action");
        }

        document.getElementById("balance").textContent = account.balance.toFixed(2);
    } catch (error) {
        messageElement.textContent = error.message;
    } finally {
        document.getElementById("amount").value = "";
    }
});
