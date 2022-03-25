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
// this will get the right answer, but takes a bit. Turns out, it still finished before I could write the below, so it was fast enough



const fastfib_lib = {};
fastfib_lib[0] = 1;
fastfib_lib[1] = 1;

function fastfib(number) { // a way of doing a faster fib function
    if(!fastfib_lib[number])
    {
        let fm1 = fastfib(number - 1);
        if(fm1 % 2 == 0)
        {
            fm1 = fm1/2;
        }
    
        let fm2 = fastfib(number - 2);
        if(fm2 % 7 == 0)
        {
            fm2 += 1;
        }
        
        fastfib_lib[number] = fm1 + fm2;
    }
    return fastfib_lib[number];
}

console.log(fastfib(50));
