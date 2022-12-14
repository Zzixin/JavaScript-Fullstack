/*

Question 1

Given the following array and implement the table dynamically

*/
createDiv = () => {
  const div = document.createElement("div");
  div.className = "container";
  return div;
};

createTitle = (contentText) => {
  const h1 = document.createElement("h1");
  h1.className = "Title";
  h1.appendChild(document.createTextNode(contentText));
  return h1;
};

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
// create the element div, table
const div1 = createDiv();
div1.appendChild(createTitle("Table")); // create title
const tableContainer = document.createElement("table"); // create table
tableContainer.id = "MyTable";

const createTableElement = (type, textContent) => {
  const newElement = document.createElement(type);
  newElement.textContent = textContent;
  return newElement;
};

const createTableHeader = (header) => {
  const newElement = document.createElement("tr");
  header.forEach((ele) => {
    newElement.appendChild(createTableElement("th", ele));
  });
  return newElement;
};

const createTableContent = (content) => {
  const newElement = document.createElement("tr");
  newElement.appendChild(createTableElement("td", content["Student Name"]));
  newElement.appendChild(createTableElement("td", content.Age));
  newElement.appendChild(createTableElement("td", content.Phone));
  newElement.appendChild(createTableElement("td", content.Address));
  return newElement;
};

// table append tr, tr append th, td
tableContainer.appendChild(createTableHeader(tableInfo.tableHeader));
tableInfo.tableContent.forEach((ele) => {
  tableContainer.appendChild(createTableContent(ele));
});

div1.appendChild(tableContainer);
document.body.appendChild(div1);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const div2 = createDiv();
div2.appendChild(createTitle("List"));

createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
};

createList = (type, list) => {
  const newElement = document.createElement(type);
  list.forEach((ele) => {
    newElement.appendChild(createListItem(ele));
  });
  return newElement;
};

div2.appendChild(createList("ol", list));
div2.appendChild(createList("ul", list));
document.body.appendChild(div2);

/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const div3 = createDiv();
div3.appendChild(createTitle("Dropdown"));
createOption = (ele) => {
  const option = document.createElement("option");
  option.value = ele.value;
  option.textContent = ele.content;
  return option;
};

createDropDownList = (dropDownList) => {
  const newElement = document.createElement("select");
  //newElement.name = "Cities";
  newElement.id = "cities";
  dropDownList.forEach((ele) => {
    newElement.appendChild(createOption(ele));
  });
  return newElement;
};

div3.appendChild(createDropDownList(dropDownList));
document.body.appendChild(div3);
