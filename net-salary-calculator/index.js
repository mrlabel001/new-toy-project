//calculate the PAYE for the different salary groups//
function payeCalc(grossSalary){
  if (grossSalary<=24000){
      console.log(grossSalary*0.1)
  }
  else if (grossSalary>24000 && grossSalary<=32333){
      console.log(grossSalary*0.25)
  }
  else if (grossSalary>32333 && grossSalary<=500000){
      console.log(grossSalary*0.3)
  }
  else if (grossSalary>500000 && grossSalary<=800000){
      console.log(grossSalary*0.325)
  }
  else console.log(grossSalary*0.35)
  }
  payeCalc(30000)
 
//calculate the nhif for the different salary groups//
  function nhifCalc(grossSalary){
      if (grossSalary<=5999){
          console.log(150)
      }
      else if (grossSalary>5999 && grossSalary<=7999){
          console.log(300)
      }
      else if (grossSalary>7999 && grossSalary<=11999){
          console.log(400)
      }
      else if (grossSalary>11999 && grossSalary<=14999){
          console.log(500)
      }
      else if (grossSalary>14999 && grossSalary<=19999){
          console.log(600)
      }
      else if (grossSalary>19999 && grossSalary<=24999){
          console.log(750)
      }
      else if (grossSalary>24999 && grossSalary<=29999){
          console.log(850)
      }
      else if (grossSalary>29999 && grossSalary<=34999){
          console.log(900)
      }
      else if (grossSalary>34999 && grossSalary<=39999){
          console.log(950)
      }
      else if (grossSalary>39999 && grossSalary<=44999){
          console.log(1000)
      }
      else if (grossSalary>44999 && grossSalary<=49999){
          console.log(1100)
      }
      else if (grossSalary>49999 && grossSalary<=59999){
          console.log(1200)
      }
      else if (grossSalary>59999 && grossSalary<=69999){
          console.log(1300)
      }
      else if (grossSalary>69999 && grossSalary<=79999){
          console.log(1400)
      }
      else if (grossSalary>79999 && grossSalary<=89999){
          console.log(1500)
      }
      else if (grossSalary>89999 && grossSalary<=99999){
          console.log(1600)
      }
      else console.log(1700)
  }

nhifCalc(53000)

//calculate the NSSF for the different salary groups//
function nssfCalc(grossSalary){
  if(grossSalary<=18000){
      confirm.log(grossSalary*0.06)
  }
}
nssfCalc()

//calculate the gross salary//
let basicSal;
let benefits;
function grossSalary(basicSal,benefits){
  return (basicSal+benefits)
}
grossSalary()

function netSal(grossSalary,payeCalc,nssfCalc){
  return ((grossSalary)-(payeCalc+nssfCalc))
}

netSal()

