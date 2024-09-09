// it used to terminate the loop or statement e.g


for(let i=1;i<10;i++){
    // we want to exicute statement only in 5 time then used break
    console.log(i)
    if(i==5){
        break;
    }
}

// it used to skip certain condition in the loop or statement e.g
console.log("-------------------------------------------------------------------")


for(let i=1;i<10;i++){
    // we want to skip print 5 and 6 inthe loop  then used continue
    
    if(i==5 || i==6){
        continue;
    }
    console.log(i)
}