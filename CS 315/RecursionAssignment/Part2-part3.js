

/////////////////////////////////Part 2 Q 1
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };
  

function showValueRecursive(node){
    if(node.children==null){
        console.log(`${node.name} : ${node.value} `);
    }
    else{
        for(let subNode of node.children){
           showValueRecursive(subNode);
        }
        console.log(`${node.name} : ${node.value} `);
    }
    }
    showValueNameLooping(node1);
    showValueNameLooping(node2);

    

///////////////////////////////////////////// Part 2 Q 2



function findListNode(node, target) {
    /* base case -- if children is null or empty */
    if (node.children === null) {
        if (node.name === target) {
            return node;
        } else {
            return null;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (node.name === target) {
            return node;
        }
        for (let child of node.children) {
            childResult = findListNode(child, target);
            if (childResult !== null) {
                return childResult;
            }
        }
        return null; //did not find the target 
    }
}

console.log(findListNode(node2, "div"));

///////////////////////////////////////////////// Part 3 Q 1
"use strict";

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function nameInTree(tree) {

    console.log(tree.value);
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => nameInTree(child));
}

nameInTree(homer);
/**
Homer
Bart
Lisa
Maggie
 */


///////////////////////////////////////////// Part 3 Q 2

"use strict";

{
class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
// create nodes with values
const abe1 = new TreeNode1('Abe');
const homer1 = new TreeNode1('Homer');
const bart1 = new TreeNode1('Bart');
const lisa1 = new TreeNode1('Lisa');
const maggie1 = new TreeNode1('Maggie');
// associate root with is descendents
abe1.descendents.push(homer1);
homer1.descendents.push(bart1, lisa1, maggie1);

function contains(node, target) {
    /* base case -- if children is null or empty */
    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        } else {
            return false;
        }
    } else { //reductive recursion step
        let childResult = false;
        if (node.value === target){
            return true;
        } 
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false; //did not find the target 
    }
}

console.log(contains(abe1, "Homer"));
console.log(contains(abe1, "Crusty"));


}

////////////////////////////////////////////////////////Part 3  Q 3



function findListNode(node, target) {
    /* base case -- if children is null or empty */
    if (node.children === null) {
        if (node.name === target) {
            return node;
        } else {
            return null;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (node.name === target) {
            return node;
        }
        for (let child of node.children) {
            childResult = findListNode(child, target);
            if (childResult !== null) {
                return childResult;
            }
        }
        return null; //did not find the target 
    }
}

console.log(findListNode(node1, "div"));


//////////////////////////////////////////////Part 3 Q 4

"use strict";

let list = { name: "Abe" };
list.next = { name: "Homer" };
list.next.next = { name: "Bart" };
list.next.next.next = { name: "Lisa" };
list.next.next.next.next = { name: "Maggie" };

console.log(list);

function generateList(root){
  // if(root.descendents==null || root.descendents.length==0){
  //   return new findListNode(root.value)
  // }
  let linkedList = new listNode(root.value)
  let list = linkedList
  for(let eachChild of root.descendents){
    list.next = generateList(eachChild)
    list = list.next
  }
  return linkedList
}
console.log(generateList("abe"))
/* Output
{
  name: "Abe",
    next: {
    name: "Homer",
      next: {
      name: "Bart",
        next: {
        name: "Lisa",
          next: {
          name: "Maggie"
        }
      }
    }
  }
}
*/

//////////////////////////////////////////////////////Part 3 Q 5

"use strict";

class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}
// create nodes with values
const abe1 = new TreeNode1('Abe');
const homer1 = new TreeNode1('Homer');
const bart1 = new TreeNode1('Bart');
const lisa1 = new TreeNode1('Lisa');
const maggie1 = new TreeNode1('Maggie');
// associate root with is descendents
abe1.descendents.push(homer1);
homer1.descendents.push(bart1, lisa1, maggie1);

function targetValue(tree, name) {
    if (tree.value === name) {
        console.log(tree);
    }
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => targetValue(child, name));
}

let nameValue = "Homer";
targetValue(homer1, nameValue);

//////////////////////////////////////////////////////Part 3 Q 6

function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
          treeModifier(node, modFunc);
      }
    }
}

////////////////////////////////////////Part 3 Q 7



abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function treeCollector(tree){
let names = [tree.value];
for(let child of tree.descendents){
    names = names.concat(treeCollector(child))
}
return names
}
console.log(treeCollector(abe))






