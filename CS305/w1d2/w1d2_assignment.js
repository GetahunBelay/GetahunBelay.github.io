/*
Question 1.

Write a function, computeSalesCommission that takes a Boolean argument for salaried and
number argument for salesAmount. It should return the sales commission based on following
rules. First make a defining table for the function.
    • If the salesman is salaried then
        • These is no commission for sales below $300
        • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
        • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the first 500)
    • If the salesman is not salaried then
        • no commission for sales below $300
        • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
        • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the first 500)
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
 
                                defining table
              input                 process              output
              sales           compute comission          comission
              salesman
 */
              function computeSalesComission(isSalaried, salesAmount){
                let comission;
               if(isSalaried){
                   if(salesAmount < 300){
                       comission = 0;
                   }else if(salesAmount >= 300 && salesAmount <= 500){
                       comission = 0.01 * salesAmount;
                   }else{
                       comission = 0.02 * (salesAmount-500) + 0.01 * 500;
               }
               }else {
                  if( salesAmount < 300){
                   comission = 0;
                 }else if(salesAmount >= 300 && salesAmount <= 500){
                       comission = 0.02 * salesAmount;
                   }else{
                       comission = 0.03 * (salesAmount-500) + 0.02 * 500
                   }
               }
                   return comission;
               }
               console.log(computeSalesComission(true, 200));//0
               console.log(computeSalesComission(false, 200));//0
               console.log(computeSalesComission(true, 300));//3
               console.log(computeSalesComission(false, 300));//6
               console.log(computeSalesComission(true, 3500));//65
               console.log(computeSalesComission(false, 3500));//100
               
               
               //*************************************************************
               
               /*
               Question 2.
               
               Make a defining table and function that will return the balance of a savings account that
               compounds interest monthly. Parameters for the function will be:
               • initial amount
               • annual interest rate
               • number of years to compound
               console.log("expect 110.47", compoundInterest(100, 10, 1));
               console.log("expect 16470.09", compoundInterest(10000, 5, 10));*/
               
               /*
                                                   Defining table
                     input                            process                            output
                  initialAmount                  compute balance of saving            balanceOfSaving
                  annualInterestRate
                  numberOfYearsToCompound
                */
               
               function compoundInterest1(initial, rate, years){
                 let balance;//balance of saving
                 for(let i=0; i<=years; i++){
                   balance = initial * ( ( 1 + rate/1200 )**(12 * i) )
                 }
                 return balance
               }
               console.log(compoundInterest1(100, 10, 1));//110.471
               console.log(compoundInterest1(10000, 5, 10));//16470.09
               
               //**********************************************
               
               /*
               Question 3.
               
               Make a defining table and then write a function that calculates down payment for a home loan based on
               following rules. Your function should have a parameter for the cost and return the down payment
               amount.
               
                       Cost of House                         Down Payment
                     $0 to less than 50K                     5% of the cost
                     $50K to less than 100K                  $2500 + 10% of (cost - $50K)
                     $100K to less than 200K                 $7500 + 15% of (cost - $100K)
                     $200K and above                         $20000 + 10% of (cost - $200K)
               
               console.log("expect 2000: ", calcDownpayment(40000));
               console.log("expect 2500: ", calcDownpayment(50000));
               console.log("expect 7500: ", calcDownpayment(100000));
               console.log("expect 25000: ", calcDownpayment(250000));
               
                                         defining table
                     input                          Processing                output
                     cost of the house         compute down payment                             downpayment
               
                   */
               
               function downPayment(cost){
                 let downPayment;
                 if(cost < 50000){
                   downPayment = 0.05 * cost;
                 }else if(cost < 100000){
                   downPayment = 2500 + 0.1 * ( cost - 50000);
                 }else if( cost < 200000){
                   downPayment = 7500 + 0.15 * ( cost - 100000);
                 }else{
                   downPayment = 20000 + 0.1* ( cost - 200000);
                 }
                 return downPayment;
               }
               console.log(downPayment(40000));//2000
               console.log(downPayment(50000));//2500
               console.log(downPayment(100000));//7500
               console.log(downPayment(250000));//25000
               
               //*************************************************************
               
               /*
               Question 4.
               
               Write functions sumDigits and multDigits that take an integer parameter and return the sum or
               product of the digits in the number. Use the / and % operators to find the digits.
               
                   Input         sumDigitsOutput             multDigits Output
                   1234                10                          24
                   102                  3                          0
                    8                   8                          8
               */
               
               function sumAndProduct(num){
                 let sum = 0; 
                 let product = 1;
               
                 while(num){
                   sum += (num % 10);
                   product *= (num % 10);
                   num = Math.floor(num / 10);
                 }
               
                 return `sum of the digits = ${sum}, and product of the digits = ${product}`;
               }
               console.log(sumAndProduct(1234));//sum of the digits = 10, and product of the digits = 24
               console.log(sumAndProduct(102));//sum of the digits = 3, and product of the digits = 0
               console.log(sumAndProduct(8));//sum of the digits = 10, and product of the digits = 8
               
               //***********************************************************************
               
               /*
               Question 5.
               
               Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
               and returns the temperature in Celsius.
               
               console.log("expect 0: ", convertFahrenheit (32));
               console.log("expect -17.7778: ", convertFahrenheit (0));
               console.log("expect 100: ", convertFahrenheit (212));
               console.log("expect 37.7778: ", convertFahrenheit (100));*/
               
               function convertFahrenheit(fahrenheit){
               
                 let celsius = ( 5/9 )*( fahrenheit - 32 );
                 return celsius;
               }
               console.log(convertFahrenheit(32));//0
               console.log(convertFahrenheit(0));//-17.7778
               console.log(convertFahrenheit(212));//100
               console.log(convertFahrenheit(100));//37.7778
               
               //******************************************************
               
               /*
               Question 6.
               
               Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
               between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
               
               console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));*/
               
               function distance( x1, y1, x2, y2){
               
                 let distance = Math.sqrt( ( x2 - x1 )**2 + ( y2 - y1 )**2 );
                 return distance;// distance between two points, (x1, y1) and (x2, y2)
               }
               console.log(distance( 0, 0, 5, 5 ));//7.07