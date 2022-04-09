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
