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

}