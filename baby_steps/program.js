var sum  = 0;
process.argv.slice(2).forEach(function(arg){
	sum += Number(arg);
});
console.log(sum);