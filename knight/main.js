function init(i,j)
    {
        let a=[];
        if(inRange(i+2)&&inRange(j+1))
            a.push([i+2,j+1]);
        if(inRange(i+2)&&inRange(j-1))
            a.push([i+2,j-1]);
        if(inRange(i-2)&&inRange(j+1))
            a.push([i-2,j+1]);
        if(inRange(i-2)&&inRange(j-1))
            a.push([i-2,j-1]);
        if(inRange(i+1)&&inRange(j+2))
            a.push([i+1,j+2]);
        if(inRange(i+1)&&inRange(j-2))
            a.push([i+1,j-2]);
        if(inRange(i-1)&&inRange(j+2))
            a.push([i-1,j+2]);
        if(inRange(i-1)&&inRange(j-2))
            a.push([i-1,j-2]);
        return a;
    }

function inRange(n)
{
    return (n>=0&&n<8);
}

function initD(a)
{
    let d=[];
    for(var i=0;i<8;i++)
    {
        let b=[];
        for(var j=0;j<8;j++)
        {
            if(i==a[0]&&j==a[1])
            b.push(0);
            else
            b.push(-1);
        }
        d.push(b);
    }
    return d;
}

function initP()
{
    let p=[];
    for(var i=0;i<8;i++)
    {
        let b=[];
        for(var j=0;j<8;j++)
        {
            b.push([-1,-1]);
        }
        p.push(b);
    }
    return p;
}

function knightMoves(a,b)
{
    let dist=initD(a);
    let p=initP(a);
    let q=[];
    let tmp=a;
    q.push(tmp);
    while(q.length!=0)
    {
        let ad=init(q[0][0],q[0][1]);
        for(var i=0;i<ad.length;i++)
        {
            if(dist[ad[i][0]][ad[i][1]]==-1)
            {
                p[ad[i][0]][ad[i][1]]=q[0];
                dist[ad[i][0]][ad[i][1]]=dist[q[0][0]][q[0][1]]+1;
                q.push([ad[i][0],ad[i][1]]);
            }
        }
        q.splice(0,1);
    }
    let path=[[b[0],b[1]]];
    i=b[0]
    let j=b[1];
    while(!(i==a[0]&&j==a[1]))
    {
        path=[p[i][j]].concat(path);
        i=path[0][0];
        j=path[0][1];
    }
    return path;
}

console.log(knightMoves([0,0],[7,7]));