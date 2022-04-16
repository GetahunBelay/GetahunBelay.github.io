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