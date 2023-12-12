// code your solution here
function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

let fun = saturdayFun();
console.log(fun);
fun = saturdayFun("bathe my dog")
console.log(fun);

const mondayWork = function (activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}

let mondayActivity = mondayWork();

function wrapAdjective(symbol = "*") {
    const innerFunction = function(word = "special") {
        return (`You are ${symbol}${word}${symbol}!`);
    }
    return innerFunction;
}

wrapAdjective("%") ("a dedicated programmer")