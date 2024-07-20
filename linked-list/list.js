export class LinkedList
{
    constructor()
    {
        this.head=new Node();
        this.size=0;
        this.tail=null;
    }
    append(value)
    {
        if(this.head.value==null)
        {
            this.size++;
            this.head.value=value;
            this.tail=this.head;
        }
        else
        {
            let tmp=new Node();
            tmp.value=value;
            this.tail.nextNode=tmp;
            this.tail=tmp;
            this.size++;
        }
    }
    prepend(value)
    {
        if(this.head.value==null)
        {
            this.head.value=value;
            this.size++;
        }
        else
        {
            let tmp=new Node();
            tmp.value=value;
            tmp.nextNode=this.head;
            this.head=tmp;
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
    pop()
    {
        let i=this.size-2;
        let tmp=this.head;
        while(i-->0)
            tmp=tmp.nextNode;
        tmp.nextNode=null;
        this.tail=tmp;
        this.size--;
    }
    contains(value)
    {
        let tmp=this.head;
        while(tmp.value!=value)
            {
                tmp=tmp.nextNode;
                if(tmp==null)
                    break;
            }
        if(tmp==null)
            return false;
        return true;
    }
    find(value)
    {
        let tmp=this.head;
        let i=0;
        while(tmp.value!=value&&tmp!=null)
            {
                i++;
                tmp=tmp.nextNode;
            }
        if(tmp==null)
            return null;
        return i;
    }
    toString()
    {
        let s="";
        let tmp=this.head;
        while(tmp!=null)
        {
            s+=`( ${tmp.value} ) -> `;
            tmp=tmp.nextNode;
        }
        s+="null";
        return s;
    }
    insertAt(value,index)
    {
        if(index<0||index>=this.size)
            return;
        let node=new Node();
        node.value=value;
        let tmp=this.head;
        let i=0;
        while(i++!=index-1)
            tmp=tmp.nextNode;
        let tmp2=tmp.nextNode;
        node.nextNode=tmp2;
        tmp.nextNode=node;
        this.size++;
    }
    removeAt(index)
    {
        if(index<0||index>=this.size)
            return;
        let tmp=this.head;
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
            this.value=null;
            this.nextNode=null;
    }
}