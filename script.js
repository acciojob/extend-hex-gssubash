const extendHex = (shortHex) => {
  // write your code here
	let ans = '';
	
	if(shortHex[0] != '#')
	{
		return '#'+shortHex[0]+shortHex[0]+shortHex[1]+shortHex[1]+shortHex[2]+shortHex[2];
	}
	else{
		return shortHex[0]+shortHex[1]+shortHex[1]+shortHex[2]+shortHex[2]+shortHex[3]+shortHex[3]+
	}		
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
