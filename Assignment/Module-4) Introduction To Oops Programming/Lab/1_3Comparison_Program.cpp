
#include <iostream>
using namespace std;


class Rectangle {
private:
    float length;
    float width;

public:
    void getData() {
        cout << "Enter length: ";
        cin >> length;
        cout << "Enter width: ";
        cin >> width;
    }

    float calculateArea() {
        return length * width;
    }
};

int main() {
    Rectangle rect;

    rect.getData();

    float area = rect.calculateArea();

    cout << "Area of rectangle = " << area << endl;

    return 0;
}

