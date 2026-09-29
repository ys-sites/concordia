// =========================================================================
// MIAE 215: Programming for Mechanical, Industrial & Aerospace Engineers
// Week 3 - In-Person Lecture 1: In-Class Programming Problem #1
// =========================================================================
//
// PROBLEM STATEMENT:
// Write a program that:
//   a) Inputs 5 doubles from the keyboard one at a time and counts the
//      number of doubles with values < 7.7. Print out the final count to
//      the screen.
//   b) If a negative number is input, stop the program immediately using
//      return or exit(1).
// =========================================================================

#include <iostream>
#include <cstdio>
#include <cmath>
#include <cstdlib> // Required for exit()

using namespace std;

int main()
{
    const int TOTAL_INPUTS = 5;
    const double THRESHOLD = 7.7;
    int count_less_than_threshold = 0;
    double current_value = 0.0;

    cout << "=== MIAE 215: Week 3 In-Person Lecture 1 Example ===\n";
    cout << "Enter " << TOTAL_INPUTS << " floating-point numbers one at a time.\n";
    cout << "(Note: Entering any negative value terminates the program immediately)\n\n";

    for (int i = 1; i <= TOTAL_INPUTS; i++)
    {
        cout << "Enter double #" << i << ": ";
        cin >> current_value;

        // Part (b): Immediate negative input guard
        if (current_value < 0.0)
        {
            cout << "\n[ALERT] Negative value detected (" << current_value << ")!\n";
            cout << "Stopping program immediately via exit(1)...\n";
            exit(1); // Immediate termination
        }

        // Part (a): Count values strictly less than 7.7
        if (current_value < THRESHOLD)
        {
            count_less_than_threshold++;
        }
    }

    cout << "\n===================================================\n";
    cout << "Total numbers evaluated: " << TOTAL_INPUTS << "\n";
    cout << "Numbers with value < " << THRESHOLD << ": " << count_less_than_threshold << "\n";
    cout << "===================================================\n";
    cout << "\nDone.\n";

    return 0;
}
