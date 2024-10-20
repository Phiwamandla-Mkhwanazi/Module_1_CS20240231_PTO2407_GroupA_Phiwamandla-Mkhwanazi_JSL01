function validateSyntax() 
{
    let input = document.getElementById('petInput').value;
    let result = '';

    //Convert the input to lowercase
    input = input.toLowerCase();

    //Debugging using the console 
    console.log("User input: ", input);

    //Validation
    let regex = /^pet_\d{4}[a-z0-9]+$/;

    //Comparison
    result = regex.test(input)? "Valid Syntax" : "Invalid Syntax";

  
    document.getElementById('result').innerText = result;
}


