let num="11";
let a=Number(num);
if(a%2==0)
{
    console.log("even");
}
else{
    console.log("odd");
}
let day=7;
switch(true){
    case(day>=1 && day<=5):
    console.log("It's a weekday");
    break;
    case(day>=6 && day<=7):
    console.log("It's the weekend");
    break;
    default:
        console.log("Invalid day");
}