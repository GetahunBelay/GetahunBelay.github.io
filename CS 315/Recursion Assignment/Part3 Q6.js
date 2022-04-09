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

function caps(node){
    node.value = node.value.toUpperCase();
}

function starFunction(node){
    node.value = "***" + node.value + "***";
    return undefined;
}

