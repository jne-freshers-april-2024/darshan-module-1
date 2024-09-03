// if statements 
// used for single condition
let age=10;

if(age >= 18){
    console.log("you are eligible for voting")
}

// nested if 
// used for multile condition both are related in single object
let percentage=70;
let course='CS';

if(course =='CS'){
    if(percentage >=60){
        console.log('You eligible this course')
    }
}

// if else
// if condition is false then exicute else part
let marks=50;
if( marks>35 ) {
    console.log("student is pass in subject")
  } else { 
    console.log("stident is failed in this subject")
  }

// if - else if

// we used to check multiple question in rows

if(marks>=90 ){
    console.log("grade A")
}
else if(marks>=70 && marks <90){
    console.log("grade B")
}
else if(marks>=40 && marks <70){
    console.log("grade C")
}
else{
    console.log("student failed")
}