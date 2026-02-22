#include <iostream>
using namespace std;


int main(){
	float a,b,c,d,totalsum,total;
	
	cout<<"Enter subject A :";
	cin>>a;
	
	cout<<"Enter subject B :";
	cin>>b;
	
	cout<<"Enter subject C :";
	cin>>c;
	
	cout<<"Enter subject D :";
	cin>>d;
	
	totalsum=a+b+c+d;
	cout<<"\nTotal subject marks :  400/"<<totalsum;
	
	total=(totalsum*100)/400;
	cout<<"\n Percentage : "<<total<<"%";
	
	if(total>100 || total < 0){
		cout<<"\nEnter Valid marks...";
	}
	else if(total >= 80 && total <= 100){
		cout<<"\nA Grade";
	}
	else if(total >= 60 && total <= 79){
		cout<<"\nB Grade";
	}
	else if(total >= 45 && total <= 59){
		cout<<"\nC Grade";
	}
	else if(total >= 0 && total <= 44){
		cout<<"\nFail...";
	}
	return 0;
}
