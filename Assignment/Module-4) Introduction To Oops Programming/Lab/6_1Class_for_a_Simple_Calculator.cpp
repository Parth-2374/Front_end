#include <iostream>
using namespace std;
class Calculat{
	public:
		int addition(int a,int b){
			return a+b;
		}
		int subtraction(int a,int b){
			return a-b;
		}
		int multiplication(int a,int b){
			return a*b;
		}
		int division(int a,int b){
			return a/b;
		}
};

int main(){
	Calculat cal;
	int x,y;
	
	cout<<"Enter X :";
	cin>>x;
	cout<<"Enter Y :";
	cin>>y;
	
	cout<<"\naddition :" << cal.addition(x,y);
	cout<<"\nsubtraction :"<< cal.subtraction(x,y);
	cout<<"\nmultiplication :"<< cal.multiplication(x,y);
	cout<<"\ndivision :"<< cal.division(x,y);
	
	return 0;
}
