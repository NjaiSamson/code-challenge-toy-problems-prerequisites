
This README.md file provides details about three programs that perform three different operations independently. These three programs are Net Salary Calculator, Speed Detector and Student Grade Generator programs. Below is the overview of how each program works it purpose, features and usage.

1. Student Grade Generator

Overview

The Student Grade Generator is a simple JavaScript program that prompts the user to input student marks and outputs the corresponding grade based on the input. The grades are assigned as follows:

=> A: > 79
=> B: 60 to 79
=> C: 49 to 59
=> D: 40 to 49
=> E: Less than 40

How It Works

=> validateMarks(marksToValidate): This function takes the user input and validates if the marks are a number within the range of 0 to 100.
=> If invalid input is entered the program will prompt the user to enter a valid input before proceeding with the operations.
=> studentGradeGenerator(func): This function takes a validation function as an argument, processes the marks, and assigns the correct grade using a switch statement.

Usage

=> The program prompts the user to enter student marks.
=> The validateMarks function checks if the input is a number between 0 and 100.
=> The studentGradeGenerator function assigns a grade based on the validated marks and displays the result using an alert method.


2. Speed Detector 

This program determines the speed of a car and provides feedback based on the speed limit of 70 km/h. If the speed exceeds this limit, it calculates demerit points. Accumulating 12 or more than 12 demerit points results in a suspended license.

Overview

=> Accepts car speed input from the user.
=> Validates the input to ensure it is a number.
=> Compares the input speed with the recommended limit (70 km/h).
=> Issues demerit points for every 5 km/h above the speed limit.
=> Notifies the user if the license is suspended upon accumulating 12 or more than 12 demerit points.

How It Works

=> Speed Input: The program prompts the user to enter the speed of the car.
=> validateSpeed(inputValue) function: It validates the input to ensure it is a number.
=> If invalid input is entered the program will prompt the user to enter a valid input before proceeding with the operations.
=> speedGovernor(speedFunc) function: It checks the speed against the maximum limit of 70km/h.
    - If the speed is less than or equal to 70 km/h, it prints "Ok".
    - If the speed exceeds 70 km/h, it calculates the demerit points after every speed of 5km/h above 70km/h and prints the total demerit points.
    - If the demerit points is 12 or exceeds 12, it prints "License suspended".

Usage

=> Run the program.
=> Enter the speed value when prompted.
=> The program will display one of the following:
    - "Ok" if the speed is within the limit.
    - "Your total demerit points.
    - "License suspended" if demerit points are 12 or more than 12.
    - An error message if the input is not valid.


3. Net Salary Calculator

This program calculates an individual’s monthly Net Salary by taking inputs for montlhly basic salary and monthly taxable benefits. It computes the payee (i.e., Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary based on the current KRA, NHIF, and NSSF rates.

Overview

=> Prompts the user to input basic salary and benefits.
=> Validates the user inputs using validateUserInput(promptMessage) function.
=> Calculates:
  - Gross Salary using input from the user. 
  - NSSF Deductions using nssfCalculator(grossIncome) fuction.
  - NHIF Deductions using nhifCalculator(grossIncome) function.
  - PAYE (Tax) using payeCalculator(grossIncome) function.
  - Net Salary using netSalaryCalculator(func1, func2, func3, grossIncome) function.

How It Works

=> Input: The program prompts the user to enter their gross salary and total taxable benefits.
=> Validation: It validates the inputs to ensure they are numbers.
=> If invalid input is entered the program will prompt the user to enter a valid input before proceeding with the operations.
=> Gross Income Calculation: It calculates the total gross income.
 
=> Deductions:
    - NSSF Deductions: Based on the gross income, calculates NSSF contributions.
    - NHIF Deductions: Based on the gross income, calculates NHIF contributions.
    - PAYE (Tax): Based on the gross income, calculates the PAYE, accounting for personal relief.
=> Net Salary Calculation: Subtracts the total deductions (NSSF, NHIF, PAYE) from the gross income to get the net salary.
=> Output: Displays the net salary using alert methode.

Usage

=> Run the program.
=> Enter the gross salary amount when prompted.
=> Enter the total taxable benefits amount when prompted.
=> The program will calculate and display the Net Salary.


References

=> [KRA Tax Rates](https://www.aren.co.ke/payroll/taxrates.htm)
=> [KRA Calculating Tax](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)


Conclusion.

This README provides a detailed overview of the Student Grade Generator, Speed Detector and Net Salary Calculator programs. It expalins each programs purpose, features, usage instructions and data used reference links.

   