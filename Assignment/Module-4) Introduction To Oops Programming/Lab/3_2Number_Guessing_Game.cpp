#include <iostream>
using namespace std;

int main(){
	int number=45,u_number,i;
		for(i=0;i<5;i++){
			cout<<"\nGuess The Number 1 to 100 : ";
			cin>>u_number;
			if(number == u_number){
			cout<<"\nCongrets your carect..";
			break;
		}
		else if(number > u_number){
			cout<<"\nthe guess is too low..";
		}
		else{
			cout<<"\nthe guess is too high..";
		}
	}
	
	
	return 0;
}
