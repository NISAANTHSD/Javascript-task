let x = prompt("Enter your username:");
let y = prompt("Enter your password:");
let z;

if(x==="SSG" && y==="SSGBIT"){
    let a=confirm("Do you want to know about SSG ?");
    if(a===true){
        z=Number(prompt("1 = High package pacement, 2 = Startups, 3 = Higher studies"));
        switch(z){
            case 1:
                alert("You selected High package pacement !");
                break;
            case 2:
                alert("You selected Startups !");
                break;
            case 3:
                alert("You selected Higher studies !");
                break;
            default:
                alert("Invalid Option");
                break;
        }
    }else{
        alert("Maybe next time! Bye!");
    }

}
else{
    alert("Invalid login! please enter a valid user name and password");
}