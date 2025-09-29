let num="85";
let a=Number(num);
switch(true){
    case (a<=100 && a>=90):
        console.log("A");
        break;
        case(a<90 && a>=75):
        console.log("B");
        break;
        case(a<75 && a>=50):
        console.log("C");
        break;
        case(a<50):
        console.log("Fail");
        break;
}
