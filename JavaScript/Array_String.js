/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// doubles the quantity and price in each object.
/*
const itemsObjectDouble = (itemsObject) => {
  return itemsObject.map((ele) => {
    return {
      quantity: ele.quantity * 2,
      price: ele.price * 2,
    };
  });
};
*/
const itemsObjectDouble = (itemsObject) => {
  return itemsObject.map(({ quantity, price }) => {
    return {
      quantity: quantity * 2,
      price: price * 2,
    };
  });
};

console.log(itemsObjectDouble(itemsObject));

// contains item quantity > 2 and price > 300 only
const itemsObjectFilter = (itemsObject) => {
  return itemsObject.filter((ele) => {
    return ele.quantity > 2 && ele.price > 300;
  });
};
console.log(itemsObjectFilter(itemsObject));

//  calculate the total value of the items
const itemsObjectSum = (itemsObject) => {
  return itemsObject.reduce((acc, { quantity, price }) => {
    return acc + quantity * price;
  }, 0);
};
console.log(itemsObjectSum(itemsObject));

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// +: match item one or more times; []: groups
const stringModify = (str) => {
  return str.split(/[- ]+/).join(" ").trim().toLowerCase();
};
console.log(stringModify(string) == expectedReturnString);

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

// merge two arrays
const mergeArray = (arr1, arr2) => {
  const merged = []; // construct an object
  //[...arr1, ...arr2] spread operator
  arr1.concat(arr2).forEach(({ uuid, name, role }) => {
    if (merged[uuid - 1]) {
      if (role) merged[uuid - 1].role = role;
      if (name) merged[uuid - 1].name = name;
    } else {
      merged[uuid - 1] = {
        uuid: uuid,
        role: role ? role : null,
        name: name ? name : null,
      };
    }
  });
  return merged.sort((ele1, ele2) => ele1.uuid - ele2.uuid);
  // return merged;
};
console.log(mergeArray(first, second));
