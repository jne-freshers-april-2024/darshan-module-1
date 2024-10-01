function compareValue(a, b){

    if(a>b){
        return "a is greater than b";
    }
    else if(a<b){
        return "b is greater than a";
    }
    else{
        return "both are equal";
    }
}

let result=compareValue(12,43);
console.log(result);