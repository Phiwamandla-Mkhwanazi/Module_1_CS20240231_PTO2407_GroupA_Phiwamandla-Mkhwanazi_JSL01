function validateSyntax() 
{
    let input = document.getElementById('petInput').value;
    let result = '';

    //Convert the input to lowercase
    input = input.toLowerCase();

    //Validation
    let regex = /^pet_\d{4}[a-z0-9]+$/;


    ocument.getElementById('result').innerText = result;
}


