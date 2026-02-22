#include <iostream>
using namespace std;

class data{
	private:
		int a,b; //This is private variable
	public:
		void getdata(){
			cout<<"Enter A : ";
			cin>>a;
			cout<<"Enter B : ";
			cin>>b;
			
			int sum=a+b; // Sum is public variable 
			cout<<"Total Sum is : "<<sum;
		}
};

int main(){
	data obj;
	obj.getdata();
	
	return 0;
}
