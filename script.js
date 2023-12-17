const extendHex = (shortHex) => {
  // write your code here

	let i = 0;
	while(i<shortHex.length){
		if(shortHex.charCodeAt(i)>64 && shortHex.charCodeAt(i)<91){
		 shortHex =	shortHex.toUpperCase();
			// alert(shortHex);
			break;
		}
		i++;
	}
	
	if(shortHex.length != 4)
	{
		return `#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;
	}
	else{
		return `${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}${shortHex[3]}${shortHex[3]}`;
	}		
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");  
alert(extendHex(shortHex));
