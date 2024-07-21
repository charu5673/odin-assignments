export class LinkedList
{
    constructor()
    {
        this.head=new Node();
        this.size=0;
        this.tail=null;
    }
    append(value,key)
    {
        if(this.head.value==null)
            {
                this.size++;
                this.head.value=value;
                this.head.key=key;
                this.tail=this.head;
            }
            else
            {
                let tmp=new Node();
                tmp.value=value;
                tmp.key=key;
                this.tail.nextNode=tmp;
                this.tail=tmp;
                this.size++;
            }
    }
    at(index)
    {
        if(index>=this.size)
            return -1;
        let tmp=this.head;
        while(index-->0)
            tmp=tmp.nextNode;
        return tmp;
    }
    contains(key)
    {
        let tmp=this.head;
        while(tmp.key!=key)
            {
                tmp=tmp.nextNode;
                if(tmp==null)
                    break;
            }
        if(tmp==null)
            return false;
        return true;
    }
    find(key)
    {
        let tmp=this.head;
        let i=0;
        while(tmp.key!=key)
            {
                i++;
                tmp=tmp.nextNode;
                if(tmp==null)
                    break;
            }
        if(tmp==null)
            return null;
        return i;
    }
    keyArray()
    {
        let s=[];
        let tmp=this.head;
        while(tmp!=null)
        {
            if(tmp.key==null)
                break;
            s.push(tmp.key);
            tmp=tmp.nextNode;
        }
        return s;
    }
    valueArray()
    {
        let s=[];
        let tmp=this.head;
        while(tmp!=null)
            {
                if(tmp.key==null)
                    break;
            s.push(tmp.value);
            tmp=tmp.nextNode;
        }
        return s;
    }
    entriesArray()
    {
        let s=[];
        let tmp=this.head;
        while(tmp!=null)
            {
                if(tmp.key==null)
                    break;
            s.push([tmp.key,tmp.value]);
            tmp=tmp.nextNode;
        }
        return s;
    }
    insertAt(value,index)
    {
        if(index<0||index>=this.size)
            return;
        let tmp=this.head;
        let i=0;
        while(i++!=index)
            tmp=tmp.nextNode;
        tmp.value=value;
        this.size++;
    }
    removeAt(index)
    {
        if(index<0||index>=this.size)
            return;
        let tmp=this.head;
        if(index==0)
        {
            tmp=tmp.nextNode;
            this.head=tmp;
            return;
        }
        let i=0;
        while(i++!=index-1)
            tmp=tmp.nextNode;
        let tmp2=tmp.nextNode;
        tmp.nextNode=tmp2.nextNode;
        this.size--;
    }
}

class Node
{
    constructor()
    {
            this.key=null;
            this.value=null;
            this.nextNode=null;
    }
}