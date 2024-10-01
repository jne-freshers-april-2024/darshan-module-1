// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple func  tions. 
// It has the information on what function is currently being run and what functions are invoked from within that function…

function one(){
    two(); 
    console.log("function one exicuted")
}


function two(){
    three();
    console.log("function two exicuted");
}

function three(){
    console.log("function three exicuted");
}

one();