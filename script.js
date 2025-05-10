function fibonacci(num) {
// your code here
	let newarray = [0,1]
	let first = 1

	while(true){
		if (newarray[newarray.length-1]===num) {
			return first
		}
		else if (newarray[newarray.length-1]>num) {
			return false
			
		}
		newarray.push(first);
		first += newarray[newarray.length-1];
		
	}
}

module.exports = fibonacci;
