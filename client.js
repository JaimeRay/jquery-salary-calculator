console.log('js')

$(document).ready(readyNow);

let salary = [];

let monthlySalary = [];

function readyNow(){
    console.log('JQ');
    $('#enterButton').on('click', displayNames)
}

function displayNames(){
    console.log('The Enter Button Was CLicked');
    let firstNames = $('#firstName').val();
   console.log($('#firstName').val());

    let lastNames = $('#lastName').val();
    console.log($('#lastName').val());

    let idNumbers = $('#idNumber').val();
    console.log($('#idNumber').val());

    let jobTitles = $('#jobTitle').val();
    console.log( $('#jobTitle').val());

    let annualSalary = $('#annualSalart').val();
    console.log($('#annualSalart').val())



    $('#tbodyID').append(`
    <tr>
        <td>
            ${firstNames}
        </td>
        <td>
             ${lastNames}
        <td>
            ${idNumbers}
        </td>
        <td>
            ${jobTitles}
        </td>
        <td>
            ${annualSalary}
        </td>
    <tr> 
    
    
     `)//end append

addMonthly(annualSalary);


}//end displayNames

function addMonthly(num1){
    let num2 = num1 / 12;
    monthlySalary.push(num2);
    console.log(monthlySalary);
    addTogether();
    
}


function addTogether(){
    let totalMonthly  = 0;
    for (let i = 0; i < monthlySalary.length; i++){
      totalMonthly = totalMonthly + monthlySalary[i];

    }//end for
    console.log(totalMonthly);

    $('#totalSarary').empty();

    $('#totalSarary').append(
    'Total Monthly: ', Number (totalMonthly)
    )
}

