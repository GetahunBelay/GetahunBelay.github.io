class TreeNode {
   
        constructor(value) {
        this.value = value;
        this.descendents = [];
        }
        }

const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer');
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
    // associate root with is descendents
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

