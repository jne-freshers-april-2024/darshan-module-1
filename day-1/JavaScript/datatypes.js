function checkDatatyps() {
    let num1 = 21;
    let num2 = 23;
    let v1 = "Hi";
    let v2 = "Hi";
    
    console.log(num1 + num2);
    console.log(v1 + num1 + num2);
    console.log(num1 + num2 + v2);
    console.log(v1 == v2);

    let v3 = "JavaScript";
    v3.charAt(0) == "j";
    console.log(v3);

    let v4 = Symbol();
    console.log(v4);
    console.log(Symbol() == Symbol())

    let a = Boolean('Hi');
    console.log(a); // true
    console.log(typeof (a));

    let v5=null;
    let v6;
    console.log(v5);
    console.log(v6);
}

checkDatatyps();