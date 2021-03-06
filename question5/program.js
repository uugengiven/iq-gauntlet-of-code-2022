const data = "9,Q,J,5,10,4,8,8,K,3,Q,Q,10,4,A,A,4,7,K,8,2,9,10,3,K,J,J,A,2,K,3,7,6,6,3,8,2,5,10,9,2,J,A,7,7,5,6,Q,5,6,9,4,J,10,6,6,3,4,4,4,9,A,7,2,5,Q,5,3,K,10,J,K,3,Q,9,10,2,J,K,Q,8,10,8,2,Q,6,A,7,6,9,8,J,A,2,3,5,7,7,A,9,5,4,8,K,3,2,J,3,6,4,6,J,Q,9,10,9,8,3,Q,6,4,4,K,Q,8,Q,7,10,2,10,A,5,5,A,A,K,7,2,7,J,5,A,4,3,8,K,6,9,5,8,2,10,9,K,J,7,9,A,4,4,2,4,8,7,6,2,2,Q,10,K,5,7,9,5,6,J,10,8,Q,8,J,3,5,10,J,4,3,Q,A,3,9,6,7,7,10,Q,A,8,K,J,3,K,6,5,A,K,2,9,4,9,J,9,Q,8,7,A,K,3,10,A,K,9,K,3,7,10,J,8,2,4,10,2,5,4,Q,A,8,J,9,5,6,Q,8,3,7,2,6,5,2,A,4,5,K,7,6,10,6,Q,J,3,5,8,A,5,K,6,3,7,K,8,4,7,J,6,7,8,Q,2,2,4,5,5,10,Q,K,Q,K,3,J,A,9,10,J,9,6,4,2,6,3,Q,J,A,10,7,3,4,8,9,10,9,A,2,10,8,6,10,4,5,Q,J,4,7,3,A,2,K,Q,5,3,4,A,5,J,8,3,10,Q,Q,9,8,6,9,K,2,8,7,J,5,A,7,6,A,9,9,K,10,3,J,2,7,K,6,2,4,9,J,K,8,6,6,4,2,J,J,4,A,3,4,A,7,8,2,8,5,9,A,7,3,2,A,5,9,10,10,K,10,3,8,Q,4,Q,6,K,7,7,5,6,Q,Q,9,2,K,J,5,10,3"
const shuffle = data.split(',')

let results = 0;

function get_value(card)
{
    if(card == "Q" || card == "J" || card == "K")
    {
        return 10;
    }
    else
    {
        return Number(card)
    }
}

function check_21(index, current_value)
{
    if(current_value == 21)
    {
        results += 1;
        return;
    }
    if(current_value > 21 || index > shuffle.length)
    {
        return;
    }
    if(shuffle[index] == "A")
    {
        // split in 2
        check_21(index + 1, current_value + 1);
        check_21(index + 1, current_value + 11);
    }
    else
    {
        check_21(index + 1, current_value + get_value(shuffle[index]));
    }
}

for(let i = 0; i < shuffle.length - 1; i++)
{
    check_21(i, 0);
}

console.log(results);