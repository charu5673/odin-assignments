// question 1

function sumRange(n)
{
    if(n==1)
        return 1;
    else
    return n+sumRange(n-1);
}

console.log(sumRange(5));

// question 2

function power(base,exp)
{
    if(exp==0)
        return 1;
    else if(exp==1)
        return base;
    else
    return base*power(base,exp-1);
}

console.log(power(5,5));

// question 3

function factorial(f)
{
    if(f==1)
        return 1;
    else
    return f*factorial(f-1);
}

console.log(factorial(4));

// question 4

function all(a,f)
{
    if(a.length==0)
        return true;
    if(!f(a[0]))
        return false;
    else
    {
        a.shift();
        return all(a,f);
    }
}

function even(n)
{
    return n%2==0;
}

console.log(all([2,4,6],even));
console.log(all([2,3,6],even));

// question 5

function productOfArray(a)
{
    if(a.length==0)
        return 1;
    else
    {
        let b=a.shift();
        return b*productOfArray(a);
    }
}

console.log(productOfArray([2,3,6]));

// question 6

function contains(o,v)
{
    if(o==v)
        return true;
    else
    {
        let t=o;
        o=Object.values(o)[0];
        if(o==null||o==undefined||o==t)
            return false;
        return contains(o,v);
    }
}

let ob={
    a:{
        b:{
            c:{
                d:{
                    e:"x",
                }
            }
        }
    }
};

console.log(contains(ob,"x"));
console.log(contains(ob,"k"));


// question 7

function totalIntegers(a)
{
    let c=0;
    for(var i=0;i<a.length;i++)
    {
        if(typeof(a[i])=="number")
            c++;
        else if(Array.isArray(a[i]))
            c+=totalIntegers(a[i]);
    }
    return c;
}

console.log(totalIntegers([[[[5,6],3,4,"a",[[5,6],"a","b",{}],4,"a"],6],6,7]));

// question 8

function SumSquares(a)
{
    let c=0;
    for(var i=0;i<a.length;i++)
    {
        if(typeof(a[i])=="number")
            c+=a[i]*a[i];
        else if(Array.isArray(a[i]))
            c+=SumSquares(a[i]);
    }
    return c;
}

console.log(SumSquares([[[[[[[[[1]]]]]]]]]));

// question 9

function replicate(c,n)
{
    let a=[];
    if(c<=0)
        return [];
    else if(c==1)
        return [n];
    else
    {
        a=replicate(c-1,n);
        a.push(n); 
    }
    return a;

}

console.log(replicate(6,5));