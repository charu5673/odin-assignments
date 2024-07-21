import { mergeSort } from "./mergesort.js";
import { Node } from "./node.js";

export class Tree
{
    constructor(array)
    {
        array=mergeSort(array);
        array=this.unique(array);
        this.root=this.buildTree(array);
        this.ta=[];
    }
    buildTree(array)
    {
        if(array.length==0)
            return null;
        if(array.length==1)
            return new Node(array[0]);
        let start=0;
        let end=array.length-1;
        let mid=(start+end)/2;
        let rootNode=new Node(array[Math.floor(mid)]);
        rootNode.left=this.buildTree(array.slice(start,mid));
        rootNode.right=this.buildTree(array.slice(mid+1));
        return rootNode;
    }
    unique(array)
    {
        for(var i=1;i<array.length;i++)
        {
            if(array[i]==array[i-1])
            {
                array.splice(i,1);
                i--;
            }
        }
        return array;
    }
    prettyPrint(node, prefix = "", isLeft = true)
    {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
    insert(value)
    {
        let n=new Node(value);
        let tmp=this.root;
        while(!(tmp.left==null&&tmp.right==null))
        {
            if(value==tmp.data)
                return;
            else if(value>tmp.data)
                tmp=tmp.right;
            else
            tmp=tmp.left;
        }
        if(tmp.data==value)
            return;
        else if(tmp.data>value)
            tmp.left=n;
        else
        tmp.right=n;
    }
    deleteItem(value)
    {
        let tmp=this.root;
        let p=null;
        while(tmp.data!=value&&tmp!=null)
        {
            if(tmp.data<value)
            {
                p=tmp;
                tmp=tmp.right;
            }
            else
            {
                p=tmp;
                tmp=tmp.left;
            }
        }
        if(tmp==null)
            return;
        if(tmp.left==null&&tmp.right==null)
        {
            if(p.data<value)
                p.right=null;
            else
            p.left=null;
        }
        else if(tmp.left==null||tmp.right==null)
        {
            if(tmp.left==null)
                tmp=tmp.right;
            else
            tmp=tmp.left;
        }
        else
        {
            let n=tmp.right;
            p=tmp;
            let flag=false;
            while(n.left==null)
            {
                p=n;
                n=n.left;
                flag=true;
            }
            tmp.data=n.data;
            if(flag)
                p.left=null;
            else
            tmp.right=null;
        }
    }
    find(value)
    {
        let tmp=this.root;
        while(tmp.data!=value&&tmp!=null)
        {
            if(tmp.data<value)
                tmp=tmp.right;
            else
            tmp=tmp.left;
        }
        return tmp;
    }
    levelOrder(...argument)
    {
        let flag=true;
        if(argument.length==0)
            flag=false;
        let q=[];
        let a=[];
        q.push(this.root);
        while(q.length!=0)
        {
            if(flag)
                argument[0](q[0]);
            else
            a.push(q[0].data);
            if(q[0].left!=null)
                q.push(q[0].left)
            if(q[0].left!=null)
                q.push(q[0].right)
            q.splice(0,1);
        }
        if(!flag)
            return a;
    }
    inorder(...argument)
    {
        let flag=true;
        if(argument.length==0)
            flag=false;
        this.ta=[];
        return this.inorderRec(this.root,flag,argument);
    }
    preorder(...argument)
    {
        let flag=true;
        if(argument.length==0)
            flag=false;
        this.ta=[];
        return this.preorderRec(this.root,flag,argument);
    }
    postorder(...argument)
    {
        let flag=true;
        if(argument.length==0)
            flag=false;
        this.ta=[];
        return this.postorderRec(this.root,flag,argument);
    }
    inorderRec(r,f,a)
    {
        if(r==null)
            return;
        if(f)
        {
            if(r.left!=null)
            a[0](this.inorderRec(r.left,f,a));
            a[0](r.data);
            if(r.right!=null)
            a[0](this.inorderRec(r.right,f,a));
            return;
        }
        if(r.left!=null)
        this.ta.concat(this.inorderRec(r.left,f,a));
        this.ta.push(r.data);
        if(r.right!=null)
        this.ta.concat(this.inorderRec(r.right,f,a));
        return this.ta;
    }
    preorderRec(r,f,a)
    {
        if(r==null)
            return;
        if(f)
        {
            a[0](r.data);
            if(r.left!=null)
            a[0](this.preorderRec(r.left,f,a));
            if(r.right!=null)
            a[0](this.preorderRec(r.right,f,a));
            return;
        }
        this.ta.push(r.data);
        if(r.left!=null)
        this.ta.concat(this.preorderRec(r.left,f,a));
        if(r.right!=null)
        this.ta.concat(this.preorderRec(r.right,f,a));
        return this.ta;
    }
    postorderRec(r,f,a)
    {
        if(r==null)
            return;
        if(f)
        {
            if(r.left!=null)
            a[0](this.postorderRec(r.left,f,a));
            if(r.right!=null)
            a[0](this.postorderRec(r.right,f,a));
            a[0](r.data);
            return;
        }
        if(r.left!=null)
        this.ta.concat(this.postorderRec(r.left,f,a));
        if(r.right!=null)
        this.ta.concat(this.postorderRec(r.right,f,a));
        this.ta.push(r.data);
        return this.ta;
    }
    height(n)
    {
        if(n==null)
            return 0;
        let lf=this.height(n.left);
        let rf=this.height(n.right);
        if(lf>rf)
            return lf+1;
        return rf+1;
    }
    depth(n)
    {
        let c=0;
        let tmp=this.root;
        while(tmp!=n&&tmp!=null)
        {
            c++;
            if(tmp.data>n.data)
                tmp=tmp.left;
            else
            tmp=tmp.right;
        }
        return c;
    }
    isBalanced(...argument)
    {
        let r;
        if(argument.length==0)
            r=this.root;
        else
        r=argument[0];
        if(r==null)
            return true;
        else
        {
            let h=this.height(r.left)-this.height(r.right);
            if(!(h>=-1&&h<=1))
                return false;
            else return this.isBalanced(r.left) && this.isBalanced(r.right);
        }
    }
    rebalance()
    {
        if(this.isBalanced())
            return;
        this.root=this.buildTree(this.inorder());
    }
}