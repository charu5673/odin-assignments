function fibs(c)
{
    if(c==0)
        return [];
    if(c==1)
        return [0];
    let a=[0,1];
    let n1=0;
    let n2=1;
    c-=2;
    for(var i=0;i<c;i++)
    {
        a.push(n1+n2);
        n2=n1+n2;
        n1=n2-n1;
    }
    return a;
}

console.log(fibs(17));

function fibsRec(c)
{
    console.log("This was printed recursively");
    let a=[0,1];
    if(c==0)
        return [];
    if(c==1)
        return [0];
    if(c==2)
        return [0,1];
    else
    {
        a=fibsRec(c-1);
        return a.concat([a[a.length-1]+a[a.length-2]]);
    }
}

console.log(fibsRec(17));