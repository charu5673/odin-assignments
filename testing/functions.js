function capitalize(s)
{
    if(s=='')
        return '';
    return s.substring(0,1).toUpperCase()+s.substring(1);
}

function reverseString(s)
{
    if(s=='')
        return '';
    let a='';
    for(var i=0;i<s.length;i++)
    {
        a=s.charAt(i)+a;
    }
    return a;
}

var calculator={
    add:(a,b)=>{
        return a+b;
    },
    subtract:(a,b)=>{
        return a-b;
    },
    multiply:(a,b)=>{
        return a*b;
    },
    divide:(a,b)=>{
        return a/b;
    },
};

function caesarCipher(s,k)
{
    let rev='';
    if(s==''||k==0)
        return s;
    else
    {
        for(var i=0;i<s.length;i++)
        {
            let c=s.charCodeAt(i);
            if(c>=97&&c<=122)
            {
                if(c+k<97)
                rev+=String.fromCharCode(k+c+26)
                else if(c+k>122)
                rev+=String.fromCharCode(k+c-26);
                else
                rev+=String.fromCharCode(k+c);
            }
            else if(c>=65&&c<=90)
                {
                    if(c+k<65)
                    rev+=String.fromCharCode(k+c+26)
                    else if(c+k>90)
                    rev+=String.fromCharCode(k+c-26);
                    else
                    rev+=String.fromCharCode(k+c);
                }
            else
            rev+=s.charAt(i);
        }
        return rev;
    }
}

function analyzeArray(a)
{
    let min=a[0],max=a[0],avg=0;
    for(var i=0;i<a.length;i++)
    {
        if(a[i]>max)
            max=a[i];
        if(a[i]<min)
            min=a[i];
        avg+=a[i];
    }
    return {
        average: avg/a.length,
        min: min,
        max: max,
        length: a.length,
    }
}

module.exports = {capitalize,reverseString,calculator,caesarCipher,analyzeArray};