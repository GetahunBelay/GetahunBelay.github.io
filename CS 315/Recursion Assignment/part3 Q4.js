"use strict";

let list = { name: "Abe" };
list.next = { name: "Homer" };
list.next.next = { name: "Bart" };
list.next.next.next = { name: "Lisa" };
list.next.next.next.next = { name: "Maggie" };

console.log(list);

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