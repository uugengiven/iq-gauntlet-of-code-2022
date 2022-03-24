
function sumb(value)
{
    const numbers = `${value}`.split('');
    let result = 0;
    numbers.forEach(num => result += Number(num));
    return result;
}

function triangle(value)
{
    let result = 0;
    for(let i = 1; i <= value; i++)
    {
        result += i;
    }
    return result;
}

let number = 0;
let counter = 1;
let final_result = 0;

while(number < 27)
{
    console.log(`Number ${counter} - Triangle ${triangle(counter)} - Sum ${sumb(triangle(counter))}`);
    if(sumb(triangle(counter)) >= 10)
    {
        final_result = counter;
        number += 1;
    }
    counter += 1;
}

// the answer was the Triangle, not the Number