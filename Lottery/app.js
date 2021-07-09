let inputprice = document.getElementById('inputprice');
let inputamount = document.getElementById('inputamount');
let button = document.getElementById('button');
let output = document.getElementById('output');



function runcode() {
    const ticket_price = Number(inputprice.value);
    const number_of_tickets = Number(inputamount.value);
    let first_price_win = 0;
    let two_digit_win = 0;
    let three_digit_win = 0;
    let first_three_digit_win = 0;
    let loss = 0;
    const initial = ticket_price*number_of_tickets;
    let amount = ticket_price*number_of_tickets;
    let result = '';
    
    for (let i = 0; i < number_of_tickets; i++) {
    random_lotto()
    }
        function random_lotto() {
            const random = Math.floor(Math.random() * 1000000);
            const random_ai = Math.floor(Math.random() * 1000000);
            const first_price = random;
            const first_price_ai = random_ai;
            const last2digit = random % 100;
            const last2digit_ai = random_ai % 100;
            const last3digit = random % 1000;
            const last3digit_ai = random_ai % 1000;
            const last3digit_secondtime = random % 1000;
            const last3digit_secondtime_ai = random_ai % 1000;
            const str_first_three_d = ""+random
            const str_first_three_d_ai = ""+random_ai
            const first3digit = Number(str_first_three_d.substring(0,3));
            const first3digit_ai = Number(str_first_three_d_ai.substring(0,3));
            const first3digit_secondtime = Number(str_first_three_d.substring(0,3));
            const first3digit_secondtime_ai = Number(str_first_three_d_ai.substring(0,3));


            if (first_price === first_price_ai) {
                return first_price_win++, 
                amount += 6000000,
                amount -= ticket_price;      
            }
            if (first3digit === first3digit_ai) {
                return first_three_digit_win++, 
                amount += 4000,
                amount -= ticket_price;
            }
            if (first3digit_secondtime === first3digit_secondtime_ai) {
                return first_three_digit_win++, 
                amount += 4000,
                amount -= ticket_price;
            }  
            if (last3digit === last3digit_ai) {
                return three_digit_win++, 
                amount += 4000,
                amount -= ticket_price;
            }
            if (last3digit_secondtime === last3digit_secondtime_ai) {
                return three_digit_win++, 
                amount += 4000,
                amount -= ticket_price;
            } 
            if (last2digit === last2digit_ai) {
                return two_digit_win++, 
                amount += 2000,
                amount -= ticket_price;      
            }
            
            
            else {
                return loss++, 
                amount -= ticket_price;
            }
          
        }
        result += '</p>';
        result += "total first price won  = " + first_price_win;
        result += '</p>';
        result += "total 2 digit won  = " + two_digit_win;
        result += '</p>';
        result += "total first 3 digit won  = " + first_three_digit_win;
        result += '</p>';
        result += "total last 3 digit won  = " + three_digit_win;
        result += '</p>';
        result += "total tickets loss  = "+ loss;
        result += '</p>';
        result += "initial amount  = "+ initial;
        result += '</p>';
        result += "amount left  = "+  amount;
        result += '</p>';
        let profit = amount-initial
        result += "Profit  =  " + profit;
        result += '</p>';
        output.innerHTML = result
}


button.addEventListener('click', runcode)
document.addEventListener('keyup', display)



function display(event) {

    if (event.key === 'Enter') {
        runcode();
    }
}









