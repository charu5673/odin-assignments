import { Tree } from "./tree.js";

function randomArray(n)
{
    let a=[];
    while(n-->0)
        a.push(parseInt(Math.floor(Math.random()*100)));
    return a;
}

let bst=new Tree(randomArray(15));

console.log(bst.prettyPrint(bst.root));

console.log(bst.isBalanced());

console.log(bst.levelOrder());

console.log(bst.preorder());

console.log(bst.inorder());

console.log(bst.postorder());

bst.insert(145);

bst.insert(157);

bst.insert(434);

console.log(bst.prettyPrint(bst.root));

console.log(bst.isBalanced());

bst.rebalance();

console.log(bst.prettyPrint(bst.root));

console.log(bst.isBalanced());

console.log(bst.levelOrder());

console.log(bst.preorder());

console.log(bst.inorder());

console.log(bst.postorder());



