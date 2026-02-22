#include <iostream>
using namespace std;

class Person {
protected:
    string name;
    int age;

public:
    void setPersonData(string n, int a) {
        name = n;
        age = a;
    }

    void showPersonData() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

class Student : public Person {
private:
    int rollNumber;

public:
    void setStudentData(string n, int a, int roll) {
        setPersonData(n, a); 
        rollNumber = roll;
    }

    void showStudentData() {
        showPersonData();
        cout << "Roll Number: " << rollNumber << endl;
    }
};

class Teacher : public Person {
private:
    string subject;

public:
    void setTeacherData(string n, int a, string sub) {
        setPersonData(n, a);  
        subject = sub;
    }

    void showTeacherData() {
        showPersonData();
        cout << "Subject: " << subject << endl;
    }
};

int main() {
    Student s;
    s.setStudentData("Ketan", 24, 1);
    cout << "Student Details:" << endl;
    s.showStudentData();

    cout << endl;

    Teacher t;
    t.setTeacherData("Mr. shubham", 35, "SE");
    cout << "Teacher Details:" << endl;
    t.showTeacherData();

    return 0;
}
