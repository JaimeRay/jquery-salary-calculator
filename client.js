console.log('js')

$(document).ready(readyNow);

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

    


    $('#tbodyID').append(`
    <tr>
        <td>
            ${firstNames}
        </td>
    </tr>
    <tr>
        <td>
             ${lastNames}
         </td>
     </tr>
     <tr>
        <td>
            ${idNumber}
        </td>
    </tr>
    <tr>
        <td>
            ${jobTitle}
        </td>
    </tr>
    <tr>
        <td>
            ${annualSalart}
        </td>
    </tr>
    
    
     `)//end append

}//end displayNames