// closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

function employee(){
    let lastName="Sharma";

    department();
    function department(){
        console.log(lastName);
    }
}
employee();