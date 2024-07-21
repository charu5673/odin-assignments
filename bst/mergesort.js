export function mergeSort(a)
{
    if(a.length==1)
        return a;
    else
    {
        let n=a.length;
        let l=mergeSort(a.slice(0,n/2));
        let r=mergeSort(a.slice(n/2));
        n=l.length;
        let m=r.length;
        let li=0,ri=0;
        let ans=[];
        for(var i=0;i<n+m;i++)
        {
            if(l[li]<r[ri]||ri==m)
                {
                    ans.push(l[li]);
                    li++;
                }
            else
            {
                ans.push(r[ri]);
                ri++;
            }
        }
        return ans;
    }
}