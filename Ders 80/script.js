const test = "Hello World";
const test$ = "programist";
const $test = "CODING";
const $test$ = "Men proqramlasdirmain sevirem";
const $$test = "JavaScript çox maraqlıdır";
const $$test$ = "Salam, dostum!";
const $$$test = "HTML, CSS, JavaScript"

function one(){
    console.log(test.length);
}

function two(){
    console.log(test.charAt(5));
}

function three(){
    console.log(test$.toUpperCase());
}

function four(){
    console.log($test.toLowerCase());
}

function five(){
    console.log($test$.indexOf("sev"))
}

function six(){
    console.log($$test.includes("maraqlədır"));
}

function seven(){
    console.log($$test$.replace("dostum","dunya"));
}

function eight(){
    console.log($$test.trim());
}

function nine(){
    console.log(test$.slice(0,4));
}

function ten(){
    console.log($$$test.split(","));
}

function start(){
    one();
    two();
    three();
    four();
    five();
    six();
    seven();
    eight();
    nine();
    ten();
}

start()