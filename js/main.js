/******* PURPOSE *********/
// Convert user generated binary number to hexadecimal and decimal when a form is submitted!
// if the input is not a valid binary number, display an error message

var form = document.getElementsByTagName('form')[0];

// on form submit
window.onload = form.addEventListener('submit', function(e){
  e.preventDefault()
  var input = form['binaryInput'].value;
  var regex = /[01]/

  // check if input is a valid binary number
  if(regex.test(input)){

    // display results
    document.getElementById('entered').innerHTML = input;
    document.getElementById('hex').innerHTML = convertBinToHex(input);
    document.getElementById('dec').innerHTML = convertBinToDec(input);

    document.getElementById('results').style.display = 'block';
    document.getElementById('error').style.display = 'none';
  } else {
    // invalid input, show error
    document.getElementById('error').style.display = 'block';
    document.getElementById('results').style.display = 'none';
  }

  // reset input field
  form['binaryInput'].value = ""
})