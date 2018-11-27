function countChar(str, char) {
	var count = 0;
	for(var pos = 0; pos < str.length; pos++) {
		if(str.charAt(pos) == char) count++;
	}
	return count;
}
console.log(countChar("BBC", "B"));
console.log(countChar("kakkerlak", "k"));
