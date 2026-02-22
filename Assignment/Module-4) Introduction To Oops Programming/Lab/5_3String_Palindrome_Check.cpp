
#include <iostream>
using namespace std;

int main() {
    string s;
    int i;

    cout << "Enter word: ";
    cin >> s;

    for(i = 0; i < s.length()/2; i++) {
        if(s[i] != s[s.length() - i - 1]) {
            cout << "Not Palindrome";
            return 0;
        }
    }

    cout << "Palindrome";
    return 0;
}

