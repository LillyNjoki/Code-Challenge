//declaring functions
//function for calculating nhif
function nhifDeduction(input) {
    if (input >= 0 && input <= 5999) {
      return 150;
    } else if (input >= 6000 && input <= 7999) {
      return 300;
    } else if (input >= 8000 && input <= 11999) {
      return 400;
    } else if (input >= 12000 && input <= 14999) {
      return 500;
    } else if (input >= 15000 && input <= 19999) {
      return 600;
    } else if (input >= 20000 && input <= 24999) {
      return 750;
    } else if (input >= 25000 && input <= 29999) {
      return 850;
    } else if (input >= 30000 && input <= 34999) {
      return 900;
    } else if (input >= 35000 && input <= 39999) {
      return 950;
    } else if (input >= 40000 && input <= 44999) {
      return 1000;
    } else if (input >= 45000 && input <= 49999) {
      return 1100;
    } else if (input >= 50000 && input <= 59999) {
      return 1200;
    } else if (input >= 60000 && input <= 69999) {
      return 1300;
    } else if (input >= 70000 && input <= 79999) {
      return 1400;
    } else if (input >= 80000 && input <= 89999) {
      return 1500;
    } else if (input >= 90000 && input <= 99999) {
      return 1600;
    } else if (input >= 100000) {
      return 1700;
    }
}
//declaring functions
//function for calculating nssf
function nssfDeduction(input) {
    input = input * 0.06;
    return input;
  }

  //declaring functions
//function for calculating taxable income
  function kra(taxableIncome) {
    if (taxableIncome >= 0 && taxableIncome <= 24000) {
       return 0.1 * taxableIncome;

    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
      return 0.25 * taxableIncome;

    } else if (taxableIncome > 32333) {
      return 0.3 * taxableIncome;

    }
}

//declaring functions
//function for calculating gross salary
function grossPay(basicSalary, ...allowances){
    let sum = basicSalary
    for(let allowance of allowances){
        sum += allowance
    }
    return sum
}

//declaring functions
//function for calculating paye
function taxableAmount(grosspay, ...deductions){
    for(let deduction of deductions){
        grosspay -= deduction
    }
    return grosspay
}

//declaring functions
//function for calculating net pay
function netPay(taxableIncome, Kra){
    return taxableIncome - Kra
}

//declaring functions
//function oninput event
function handleSalary(event){
    let basic = parseInt(document.getElementById('basic-salary').value)
    let realBasic = Boolean(basic) ? basic : 0
    let allowances = Array.from(document.getElementsByClassName('allowances')).map((element)=>{
        let val = element.value
        let realVal = Boolean(val) ? parseInt(val) : 0
        return realVal
    })
    let gross = grossPay(basic, ...allowances)
    let nhif = nhifDeduction(gross)
    let nssf = nssfDeduction(gross)
    let taxes = taxableAmount(gross, nhif, nssf)
    let paye = kra(taxes)
    let net = netPay(taxes, paye)
    document.getElementById('nhif').textContent = Math.floor(nhif)
    document.getElementById('nssf').textContent = Math.floor(nssf)
    document.getElementById('paye').textContent = Math.floor(paye)
    document.getElementById('net-salary').textContent = Math.floor(net)