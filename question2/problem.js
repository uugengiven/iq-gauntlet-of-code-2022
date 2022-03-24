function fib(number)  {
    if(number < 2)
    {
        return 1;
    }

    let fm1 = fib(number - 1);
    if(fm1 % 2 == 0)
    {
        fm1 = fm1/2;
    }

    let fm2 = fib(number - 2);
    if(fm2 % 7 == 0)
    {
        fm2 += 1;
    }

    return fm1 + fm2;
}

function fastfib(number) { 
    let i = 0;
    while(i <= number)
    {
        
    }

}

console.log(fib(50));
