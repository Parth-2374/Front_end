#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    // Arithmetic
    cout << "a+b :  " << a+b << endl;

    // Relational
    cout << "a>b=" << (a>b) << endl;

    // Logical
    cout << "(a>b && b>0)=" << (a>b && b>0) << endl;

    // Bitwise
    cout << "a&b=" << (a&b) << endl;

    return 0;
}
