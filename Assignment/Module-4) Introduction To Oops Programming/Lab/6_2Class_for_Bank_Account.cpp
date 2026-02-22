#include <iostream>
using namespace std;

class bankaccount{
	int balance;
	public:	
		bankaccount(int avlbalance){
			if(avlbalance >= 0){
				balance = avlbalance;
			}
			else{
				balance = 0;
			}
		}
		void deposit(int amount){
			if(amount > 0){
				balance += amount;
				cout<<"Deposited : "<<amount <<endl;
			}
			else{
				cout << "Invalid deposit amount!" << endl;	
			}
		}
		void withdraw(int amount){
			if(amount >0 && amount <= balance){
				balance -= amount;
				cout<<"Withdrawn :"<<amount << endl;
			}
			else{
				cout<<"Insufficient balance or invalid amount!" << endl;
			}
		}
		
		void showbalance(){
			cout << "Current Balance: " << balance << endl;
		}
};

int main(){
	bankaccount account(1000);
	
	account.showbalance();
	account.deposit(500);
	account.showbalance();
	account.withdraw(1000);
	account.showbalance();
	account.withdraw(3000);
	
	return 0;
}
