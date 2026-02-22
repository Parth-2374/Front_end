#include <iostream>
using namespace std;

int main(){
	int a[2][2],b[2][2],sum[2][2],i,j;
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			cout<<"Enter A "<<i<<": row :"<<j<<": col:";
			cin>>a[i][j];
		}
	}
	cout<<"\n Matrix B\n";
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			cout<<"Enter B "<<i<<": row :"<<j<<": col:";
			cin>>b[i][j];
		}
	}
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			sum[i][j] = a[i][j] + b[i][j];
		}
	}
	cout<<"\n Sum of Matrix :\n";
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			cout<<"\nsum["<< i << "][" << j << "] : " << sum[i][j];
		}
	}
	
	return 0;
}
