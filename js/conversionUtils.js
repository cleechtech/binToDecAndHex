// CONVERSION UTILS
// =====================

// input decimal 0-15, output hexadecimal
function decToHex(dec){
  var dec = parseInt(dec);

  // only accept 0 to 15
  if (dec < 0 || dec > 15 || isNaN(dec)){
    return false;
  }
  switch (dec){
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    case 12:
      return "C";
      break;
    case 13:
      return "D";
      break;
    case 14:
      return "E";
      break;
    case 15:
      return "F";
      break;
    default:
      return dec;
  }
}

// input binary, output decimal
function convertBinToDec(binary){
	var result = 0;

	var binary = binary.split('')
	while(binary.length !== 0){
		var exponent = binary.length -1;
		var current = binary.shift();

		result += current * Math.pow(2, exponent);
	}
	
	return result;
}

// input binary number, output hexadecimal
function convertBinToHex(binary){
	var result = "";
	var binaryString = binary;

	while(binaryString.length != 0){
		// convert binary to hexadecimal four digits at a time, from the left
		lastFour = binaryString.substr(-4);
		binaryString = binaryString.slice(0,-4);

		lastFour = zeroPad(lastFour, 4);
		lastFour = convertBinToDec(lastFour);	// convert to decimal
		lastFour = decToHex(lastFour);			// convert to hexadecimal

		result = lastFour + result;				// add to output
	}
	return result;
}

// zero pad string a specified number of digits
function zeroPad(toPad, digits){
  var toPad = toPad = String(toPad);

  while (toPad.length < digits){
    toPad = "0" + toPad;
  }
  return toPad;
}