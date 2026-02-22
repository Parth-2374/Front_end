#include <iostream>
using namespace std;

int main(){
	int a[5],i,sum=0;
	float aver;
	
	for(i=0;i<5;i++){
		cout<<"Enter a["<<i<<"] :";
		cin>>a[i];
	}
	for(i=0;i<5;i++){
		cout<<i<<"["<<a[i]<<"]"<<endl;
		sum+=a[i];
	}
	cout<<"\n Total sum is : "<<sum;
	aver=sum/5;
	cout<<"\n Total average is : "<<aver;
	
	return 0;
}
