#include <iostream>
using namespace std;

int main() {
    int a = 10;
    float b = 3.5;

    // Implicit conversion
    float sum = a + b;  
    cout << "Implicit conversion: " << sum << endl;

    // Explicit conversion
    float x = 7.8;
    int y = (int)x;     
    cout << "Explicit conversion: " << y << endl;

    return 0;
}
