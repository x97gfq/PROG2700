
function myFunction(event) {
    myFunction1();
    myFunction2();
    myFunction3();
    myFunction4();
    myFunction5();
    myFunction6();
}

function myFunction1() {
    // Creating an array​
    let fruits = ["Apple", "Banana", "Cherry"];  

    // Accessing elements​
    console.log(fruits[0]); // Output: Apple​
    console.log(fruits[1]); // Output: Banana​
}

function myFunction2() {
    let numbers = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }    
}

function myFunction3() {
    let colors = ["red", "green", "blue"];

    colors.pop();
    colors.push("pink");

    colors.forEach(function(color) {
        console.log(color);
    });
}

function myFunction4() {
    // Using map​
    let numbers = [1, 2, 3];
    console.log("numbers",numbers);

    let squares = numbers.map(x => x * x);
    console.log("squares",squares);
}

function myFunction5() {
    // Using filter​
    let numbers = [1, 2, 3];
    console.log("numbers",numbers);

    let evens = numbers.filter(x => x % 2 === 0);
    console.log(evens);
}

function myFunction6() {
    // Using reduce​
    let numbers = [1, 2, 3];
    console.log("numbers",numbers);

    let sum = numbers.reduce((acc, x) => acc + x, 0);
    console.log("sum",sum);
}


window.addEventListener("load", (event) => {
    const btn = document.getElementById("runScript_btn");
    btn.addEventListener("click", myFunction);    
});