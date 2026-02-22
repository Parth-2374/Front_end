#include <iostream>
using namespace std;

int main() {
    int a = 20;         
    float b = 5.4;       
    const int c = 10;    

    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;

    a = a + 5;           

    cout << "Updated a = " << a << endl;

    return 0;
}
