//********************************      Math Functions      *****************************//


function add_numbers(num1, num2){
            var int1 = parseFloat(num1);
            var int2 = parseFloat(num2);
            
            if (isNaN(int1) || isNaN(int2)) {
                return false;
            } else {
                //confirm("Which equals.."  + (parseFloat(int1) + parseFloat(int2)));
                return(int1 + int2);
            } 
            add_numbers(number1, number2); 
            
        };

function subtract_numbers(num1, num2){
            var int1 = parseFloat(num1);
            var int2 = parseFloat(num2);
            
            if (isNaN(int1) || isNaN(int2)) {
                return false;
            } else {
                //confirm("Your first number less your second number equals" + (parseFloat(int1) - parseFloat(int2)));
                return(int1 - int2);
            } 
            subtract_numbers(number1, number2); 
            
        };


function multiply_numbers(num1, num2){
            var int1 = parseFloat(num1);
            var int2 = parseFloat(num2);
            
            if (isNaN(int1) || isNaN(int2)) {
                return false;
            } else {
                //confirm("Multiplied to..." + (parseFloat(int1) * parseFloat(int2)));
                return(int1 * int2);
            } 
            multiply_numbers(number1, number2); 
            
        };



function divide_numbers(num1, num2){
            var int1 = parseFloat(num1);
            var int2 = parseFloat(num2);
            
            if (isNaN(int1) || isNaN(int2)) {
                return false;
            } else {
                if (num2 > 0) {
                    //confirm("Divided equals " + (parseFloat(int1) / parseFloat(int2)));
                    return(int1 / int2);
                } else {
                    alert('you cannot divide by zero');
                    return false;
                }
            }
            divide_numbers(number1, number2);
             
            
        };

function exponential_numbers(num1, num2){
            var int1 = parseFloat(num1);
            var int2 = parseFloat(num2);
            
            if (isNaN(int1) || isNaN(int2)) {
                return false;
            } else {
                return Math.pow(int1, int2);
            }
            exponential_numbers(number1, number2);
        };
            
            
             
            
        









// function test() {

//     var number1 = document.querySelector('#inputnum1').value;
//     var operator = document.querySelector('#opp').value;
//     var number2 = document.querySelector('#inputnum2').value;

//     switch(operator) {
//         case '+':
            
//             var my_result = add_numbers(number1, number2);
            
//             break;
//         case '-':
            
//             var my_result = subtract_numbers(number1, number2);
            
//             break;
//         case '*':
            
//             var my_result = multiply_numbers(number1, number2);
            
//             break;
//         case '/':
            
//             var my_result = divide_numbers(number1, number2);
            
//             break;
//         default:
//             alert('You messed up');
//             break;
//     }
//     if(my_result!==false) {
//         //alert("The result is " + my_result);
//         document.querySelector('#result').value=my_result;
//     } else {
//         document.querySelector('#result').value="You Need Help";
//     }
// };
// 

var number_array = ['',''];
var number_index = 0;
var operator = '';
var error = '';
var result = null;

function add_number(digit) {
    if(result!=null) {
    result=null;
    document.querySelector('#result').value='';
    } else {
        document.querySelector('#input').value+=digit;
        number_array[number_index]+=digit;
    }
}

function add_operator(input_operator) {
    if (result!=null) {
        number_array[0] = result;
        result = null;
        number_array[1] = '';
    }
    document.querySelector('#input').value+=input_operator;
    operator = input_operator;
    number_index = 1;
}

function calculate(number_array){
    document.querySelector('#result').value+=(number_array[0] + operator + number_array[1]);
}


function calculate() {

    switch(operator) {
        case '+':
            result = add_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '-':
            result = subtract_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '*':
            result = multiply_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case '/':
            result = divide_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;
        case 'xy':
            result = exponential_numbers(parseFloat(number_array[0]), parseFloat(number_array[1]));
            break;

    }
    document.querySelector('#result').value=result;
    reset_calculator();
}














































