import { LinkedList } from "./list.js";

export class HashMap
{
    constructor()
    {
        this.buckets=[];
        this.length=16;
        for(var i=0;i<this.length;i++)
            this.buckets.push(new LinkedList());
        this.size=0;
        this.loadfactor=0.75;
    }
    hash(key)
    {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++)
        {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode%=this.length;
        }
        return hashCode;
    }
    set(key,value)
    {
        let code=this.hash(key);
        let tmp=this.buckets[code].find(key);
        if(tmp==null)
            {
                this.buckets[code].append(value,key);
                this.size++;
            }
        else
        this.buckets[code].insertAt(value,tmp);
        if(this.size>=this.loadfactor*this.length)
        {
            for(var i=0;i<this.length;i++)
                this.buckets.push(new LinkedList());
            this.length*=2;
        }
    }
    get(key)
    {
        for(var i=0;i<this.length;i++)
        {
            let j=this.buckets[i].find(key);
            if(j!=null)
            {
                return (this.buckets[i].at(j)).value;
            }
        }
        return null;
    }
    has(key)
    {
        for(var i=0;i<this.length;i++)
        {
            if(this.buckets[i].contains(key))
            {
                return true;
            }
        }
        return false;
    }
    remove(key)
    {
        for(var i=0;i<this.length;i++)
        {
            if(this.buckets[i].contains(key))
            {
                let j=this.buckets[i].find(key);
                this.buckets[i].removeAt(j);
                return true;
            }
        }
        return false;
    }
    length()
    {
        return this.size;
    }
    clear()
    {
        this.buckets=[];
        this.length=16;
        for(var i=0;i<this.length;i++)
            this.buckets.push(new LinkedList());
        this.size=0;
    }
    keys()
    {
        let k=[];
        for(var i=0;i<this.length;i++)
        {
            k=k.concat(this.buckets[i].keyArray());
        }
        return k;
    }
    values()
    {
        let k=[];
        for(var i=0;i<this.length;i++)
        {
            k=k.concat(this.buckets[i].valueArray());
        }
        return k;
    }
    entries()
    {
        let k=[];
        for(var i=0;i<this.length;i++)
        {
            k=k.concat(this.buckets[i].entriesArray());
        }
        return k;
    }
}