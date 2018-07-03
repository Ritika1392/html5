var  johnScore = (116+94+123)/3;
var mikeScore = (116+94+123)/3;

console.log(johnScore+' '+mikeScore);

if(johnScore>mikeScore){
	console.log("john is winner with"+' '+ johnScore +' '+ "score");
}
else if(mikeScore>johnScore){
   console.log("mike is winner with"+' '+mikeScore +' '+ "score");
}
else
{
	console.log("Its a draw");
}

var maryScore =(97+134+105)/3;

if(johnScore>mikeScore && johnScore>maryScore){
	console.log("john is the winner"+' '+ johnScore);
}
else if(mikeScore>johnScore && mikeScore>maryScore){
	console.log("mike is the winner"+' '+ mikeScore);
}
else{
	console.log("mary is the winner"+' '+ maryScore);
}
