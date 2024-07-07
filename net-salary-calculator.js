// Program receives monthly basic salary and benefits and computes net salary

// Function to validate the input from the user
function validateUserInput(promptMessage) {
    let userInput;
    while (true) {
        let input = prompt(promptMessage);
        userInput = parseFloat(input);
        if (!isNaN(userInput)) {
            break;
        }
        alert("Invalid amount. Please click 'OK' to enter a valid amount and try again.");
    }
    return userInput;
}

let grossSalaryAmount = validateUserInput("Enter gross salary amount :");
let totalTaxableBenefit = validateUserInput("Enter total taxable benefits amount :");

const totalGrossIncome = (Math.abs(grossSalaryAmount) + Math.abs(totalTaxableBenefit));// Makes sure the input is always a positive number
(`Total Gross Income = ${(totalGrossIncome.toFixed(2))}`);

// Function to calculate NSSF
function nssfCalculator(grossIncome) {
    let nssfAmount;
    if(grossIncome === 0) {
        nssfAmount = 0;
    } else if (grossIncome <= 7000) {
        nssfAmount = grossIncome * 0.06;
    } else if(grossIncome > 7000 && grossIncome <= 36000) {
        nssfAmount = 7000 * 0.06 + ((grossIncome - 7000) * 0.06);
    } else if(grossIncome > 36000) {
        nssfAmount = 36000 * 0.06;
    };
    return nssfAmount;
}
(`NSSF Amount = ${nssfCalculator(totalGrossIncome)}`);

// Function to calculate NHIF
function nhifCalculator(grossIncome) {
    let nhifAmount;
    
    if(grossIncome === 0) {
        nhifAmount = 0;
    } else if(grossIncome <= 150) { 
        return nhifAmount = 0;
    } else if(grossIncome <= 5999) {
        nhifAmount = 150;
    } else if(grossIncome >= 6000 && grossIncome <=7999) {
        nhifAmount = 300;
    } else if(grossIncome >= 8000 && grossIncome <=11999) {
        nhifAmount = 400;
    } else if(grossIncome >= 12000 && grossIncome <= 14999) {
        nhifAmount = 500;
    } else if(grossIncome >= 15000 && grossIncome <= 19999) {
        nhifAmount = 600;
    } else if(grossIncome >= 20000 && grossIncome<= 24999) {
        nhifAmount = 750;
    } else if(grossIncome >= 25000 && grossIncome <= 29999) {
        nhifAmount = 850;
    } else if(grossIncome >= 30000 && grossIncome <= 34999) {
        nhifAmount = 900;
    } else if(grossIncome >= 35000 && grossIncome <= 39999) {
        nhifAmount = 950;
    } else if(grossIncome >= 40000 && grossIncome <= 44999) {
        nhifAmount = 1000;
    } else if(grossIncome >= 45000 && grossIncome <= 49999) {
        nhifAmount = 1100;
    } else if(grossIncome >= 50000 && grossIncome <= 59999) {
        nhifAmount = 1200;
    } else if(grossIncome >= 60000 && grossIncome <= 69999) {
        nhifAmount = 1300;
    } else if(grossIncome >= 70000 && grossIncome <= 79999) {
        nhifAmount = 1400;
    } else if(grossIncome >= 80000 && grossIncome <= 89999) {
        nhifAmount = 1500;
    } else if(grossIncome >= 90000 && grossIncome <= 99999) {
        nhifAmount = 1600;
    } else if(grossIncome >= 100000) {
        nhifAmount = 1700;
    }               
    
    return nhifAmount;
};
(`NHIF Amount = ${nhifCalculator(totalGrossIncome)}`)

// Function to calculate PAYE
function payeCalculator(grossIncome) {
    let payeAmount;
    const monthlyPersonalrelief = 2400;

    if(grossIncome === 0) {
        payeAmount = 0;
    } else if (grossIncome <= 24000) {
        payeAmount = grossIncome * 0.10;
        // This block of code ensures that an employee is not given a tax relief if 
        //the PAYE is less than the tax relief.
        if(payeAmount > monthlyPersonalrelief) {         
            return payeAmount - monthlyPersonalrelief;   
        } else {                                         
            return payeAmount;                           
        };
    } else if(grossIncome > 24000 && grossIncome <= 32333) {
        payeAmount = (24000 * 0.1) + ((grossIncome - 24000) * 0.25);
        if(payeAmount > monthlyPersonalrelief) {
            return payeAmount - monthlyPersonalrelief;
        } else {
            return payeAmount;
        };
    } else if(grossIncome > 32333 && grossIncome <= 500000) {
        payeAmount = (24000 * 0.1) + (8333 * 0.25) + ((grossIncome - 32333) * 0.30);
        if(payeAmount > monthlyPersonalrelief) {
            return payeAmount - monthlyPersonalrelief;
        } else {
            return payeAmount;
        };
    } else if(grossIncome > 500000 && grossIncome <= 800000) {
        payeAmount = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((grossIncome - 500000) * 0.325);
        if(payeAmount > monthlyPersonalrelief) {
            return payeAmount - monthlyPersonalrelief;
        } else {
            return payeAmount;
        };
    }else {
        payeAmount = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossIncome - 800000) * 0.35);
        if(payeAmount > monthlyPersonalrelief) {
            return payeAmount - monthlyPersonalrelief;
        } else {
            return payeAmount - monthlyPersonalrelief;
        };
    };
}
(`PAYE Amount = ${payeCalculator(totalGrossIncome)}`);

//Function to calculate net salary
function netSalaryCalculator(func1, func2, func3, grossIncome) {
    const paye = func1(grossIncome.toFixed(2));
    const nssf = func2(grossIncome.toFixed(2));
    const nhif = func3(grossIncome.toFixed(2));
   if(grossIncome === 0) {
       netSalary = (0).toFixed(2);
   } else {
        netSalary = (grossIncome.toFixed(2) - (paye + nssf + nhif)).toLocaleString();
   };
   return netSalary; 
};
alert(`Net Salary = KES ${netSalaryCalculator(payeCalculator, nssfCalculator, nhifCalculator, totalGrossIncome)}`);

