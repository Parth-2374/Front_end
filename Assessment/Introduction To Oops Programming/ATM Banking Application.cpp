#include <iostream>
#include <ctime>
using namespace std;

class ATM {
private:
    int pin;
    double balance;

public:
    // Constructor (Compulsory)
    ATM() {
        pin = 12345;
        balance = 20000;   // Present balance
    }

    void welcomeScreen();
    void helpScreen();
    bool verifyPin();
    void mainMenu();
    void deposit();
    void withdraw();
    void checkBalance();
};

// Display welcome screen with date & time
void ATM::welcomeScreen() {
    time_t now = time(0);
    cout << "\n============================================\n";
    cout << "              WELCOME TO ATM                \n";
    cout << "============================================\n";
    cout << "Current Date & Time : " << ctime(&now);
    cout << "--------------------------------------------\n";
    cout << "Press 1 and Enter to Access Account\n";
    cout << "Press 0 and Enter to Get Help\n";
    cout << "--------------------------------------------\n";
}

// Help screen
void ATM::helpScreen() {
    cout << "\n============================================\n";
    cout << "             ATM ACCOUNT STATUS              \n";
    cout << "============================================\n";
    cout << "You must have the correct PIN number\n";
    cout << "to access this account.\n";
    cout << "Please contact bank representative\n";
    cout << "during bank working hours.\n";
    cout << "Thank you!\n";
    cout << "============================================\n";
}

// PIN verification (only one attempt)
bool ATM::verifyPin() {
    int enteredPin;
    cout << "\n============================================\n";
    cout << "           ATM ACCOUNT ACCESS                \n";
    cout << "============================================\n";
    cout << "Enter Your ATM PIN (Only one attempt): ";
    cin >> enteredPin;

    if (enteredPin == pin) {
        return true;
    } else {
        cout << "\n============================================\n";
        cout << "                 THANK YOU                  \n";
        cout << "============================================\n";
        cout << "Incorrect PIN!\n";
        cout << "No more attempts allowed.\n";
        cout << "Sorry!\n";
        return false;
    }
}

// Main menu
void ATM::mainMenu() {
    int choice;
    do {
        cout << "\n============================================\n";
        cout << "            ATM MAIN MENU SCREEN             \n";
        cout << "============================================\n";
        cout << "Enter [1] To Deposit Cash\n";
        cout << "Enter [2] To Withdraw Cash\n";
        cout << "Enter [3] To Balance Inquiry\n";
        cout << "Enter [0] To Exit ATM\n";
        cout << "--------------------------------------------\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
        case 1:
            deposit();
            break;
        case 2:
            withdraw();
            break;
        case 3:
            checkBalance();
            break;
        case 0:
            cout << "\nThank you for using ATM!\n";
            break;
        default:
            cout << "\nInvalid choice!\n";
        }
    } while (choice != 0);
}

// Deposit cash
void ATM::deposit() {
    double amount;
    cout << "\n============================================\n";
    cout << "          ATM ACCOUNT DEPOSIT SYSTEM         \n";
    cout << "============================================\n";
    cout << "Account Holder : Rakesh Kharva\n";
    cout << "Address        : Mumbai\n";
    cout << "Branch         : Andheri\n";
    cout << "Account No     : 5678\n";
    cout << "--------------------------------------------\n";
    cout << "Present Balance : Rs. " << balance << endl;
    cout << "Enter Amount to Deposit : Rs. ";
    cin >> amount;

    balance += amount;
    cout << "New Available Balance : Rs. " << balance << endl;
    cout << "Thank You!\n";
}

// Withdraw cash
void ATM::withdraw() {
    double amount;
    cout << "\n============================================\n";
    cout << "          ATM ACCOUNT WITHDRAWAL             \n";
    cout << "============================================\n";
    cout << "Enter Amount to Withdraw : Rs. ";
    cin >> amount;

    if (amount > balance) {
        cout << "\nInsufficient Balance in your account!\n";
        cout << "Sorry!\n";
    } else {
        balance -= amount;
        cout << "Please collect your cash.\n";
        cout << "Remaining Balance : Rs. " << balance << endl;
    }
}

// Balance inquiry
void ATM::checkBalance() {
    cout << "\n============================================\n";
    cout << "           ACCOUNT BALANCE INQUIRY           \n";
    cout << "============================================\n";
    cout << "Available Balance : Rs. " << balance << endl;
}

// Main function
int main() {
    ATM atm;
    int choice;

    atm.welcomeScreen();
    cout << "Enter your choice: ";
    cin >> choice;

    if (choice == 1) {
        if (atm.verifyPin()) {
            atm.mainMenu();
        }
    } else if (choice == 0) {
        atm.helpScreen();
    } else {
        cout << "\nInvalid choice!\n";
    }

    return 0;
}

