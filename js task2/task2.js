let name =prompt("Enter your name:");

let a=true;
while(a===true){
    let y=Number(prompt("Enter your age:"));
    if(y>=18)
    {
      alert("Hey"+ name + ", You are eligible to vote !");
    }
    else if(y<18)
    {
       alert("Sorry!"+ name +", Your are not eligible to vote !");
    }
    a=confirm("Do you want to cheak again ?");
    if(a===false){
        alert("Bye !");
        break;
    }
}