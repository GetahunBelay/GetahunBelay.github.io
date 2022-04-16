
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

    

////////////////////////////////////////////////////////////////////////////////////

    // function showValueNameLooping(node){
    //     console.log(`${node.name} : ${node.value} `);
    //         if(node.children!==null){
    //             for(const kid of node.children){
    //                console.log(`${kid.name} : ${kid.value} `);
    //                if(kid.children!==null){
    //                    for(const baby of kid.children){
    //                      console.log(`${baby.name} : ${baby.value} `);  
    //                    }
    //                }
    //             }
    //         }
          
        
    // }
    // showValueNameLooping(node1);