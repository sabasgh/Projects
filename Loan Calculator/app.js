// first we should define our vars:

const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
// here we want to add an event on the loan form:

document.querySelector('#loan-form').addEventListener('submit' , function(e){
//hide resault:
document.querySelector('#results').style.display = 'none';

//show loader gif:
document.querySelector('#loading').style.display = 'block';

setTimeout(calculateResults, 1500);

// we should prevent cause its a form:
e.preventDefault(); } ) ;
// Define the calculateResults you mentioned:

function calculateResults(){
console.log('calculating...');
    // we define principle for the number that we enter for amount:

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12 
const calculatedPayments = parseFloat(years.value) * 12;
 
//compute monthly payment:
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

//we should check if the monthy is finite or not
//javascript has a method for that:

    if(isFinite(monthly)){
        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        //show results:
        document.querySelector('#results').style.display = 'block';

        //hide loader:
        document.querySelector('#loading').style.display = 'none';
    } else{
        showError('Please check your numbers');
    }
 
 
}

// now you should define the showError function: 

function showError(error){
//hide results:
    document.querySelector('#results').style.display = 'none';

//hide loader:
    document.querySelector('#loading').style.display = 'none';
// we should create div:

    const errorDiv = document.createElement('div');
    //we use one of the bootstarp classes here:
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(error));
//here we should use the elements that we want to insert our div to that:

    card.insertBefore(errorDiv, heading);

// we want our error to be cleared after 3seconds so:

setTimeout(clearError, 3000);
    
}
//now we define clearErrorfunction:

    function clearError(){
        document.querySelector('.alert').remove();
}