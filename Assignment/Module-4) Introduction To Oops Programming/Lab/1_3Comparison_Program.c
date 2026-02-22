#include <stdio.h>
#include <conio.h>



int main(){
	float length,width,area;
	
	printf("Enter length :");
	scanf("%f",&length);

	printf("Enter width :");
	scanf("%f",&width);
	
	area=length*width;
	printf("\n Total Area is : %f",area);
	
	
	return 0;
}
