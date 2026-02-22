#include <iostream>
using namespace std;

class data{
	private:
		int a,b,sum;
	
	public:
		void sum1(){
			cout<<"Enter A :";
			cin>>a;
			
			cout<<"Enter B :";
			cin>>b;
			
		
			sum = a + b;
        	cout << "Sum = " << sum;
		}	
};

int main(){
	data obj;
	obj.sum1();
}
