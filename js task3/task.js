let pin=prompt("Enter your PIN : ");
let a=confirm("DO you want to open your account !!");
if(a>=0)
{
    z=Number(prompt("1=Withdraw,\n 2=Deposit,\n 3=Check Balance"));
    switch(z){
        case 1:
            let c1=10000;
            b=prompt("Enter Amount ?");
            c1-=b;
            alert("Withdraw Successful ! New Balance : "+ c1);
            break;
        case 2:
            c=prompt("Enter Amount");
            alert("Deposit Successful ! New Balance :" + c);
            break;
        case 3:
            alert("Your Balance is :1000000");
            break;
        default:
            alert("Invalid Input");
            break
    }
}