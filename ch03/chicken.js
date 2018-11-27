var stackLevel = 0;
function chicken() {
	console.log(stackLevel);
	stackLevel ++;
	return egg();
}
function egg() {
	console.log(stackLevel);
	stackLevel ++;
	return chicken();
}
console.log(chicken() + " came first.");

