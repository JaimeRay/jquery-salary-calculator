console.log('js')

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    $('#enterButton').on('click', displayNames)
}

function displayNames(){
    console.log('The Enter Button Was CLicked')
}