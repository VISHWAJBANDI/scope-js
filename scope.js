// // BLOCK SCOPE

{
    var a=10;
    let b=20;
    const c=30;
    console.log(a+b+c)
}
{
    let a=20;
    const c=20;
    console.log(a+c)
}

// FUNCTION SCOPE
function fruits(){
    const apple=20;
    const banana=20;
    const orange=60;
    console.log(fruits)
}
fruits()


// GLOBAL SCOPE

var a=100;
var x=100;
{
    let x=100;
    const y=100;
    console.log(a+x+y)
}