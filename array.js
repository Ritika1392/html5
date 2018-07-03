var bills =[124,48,268];
var a,b,c;
function cal(bill) {
	 if(bill<50){
	 	 return 0.2*bill;
	 }
	 else if (bill>50 && bill<200){
	 	 return 0.15*bill;
	 }
	 else {
         return 0.1 * bill;
	 }
	 
	// body...
}
 
 
  var tips= [cal(bills[0]),cal(bills[1]),cal(bills[2])];
  console.log(tips);
 
var final = [cal(bills[0])+bills[0],cal(bills[1])+bills[1],cal(bills[2])+bills[2]];
console.log(final);
