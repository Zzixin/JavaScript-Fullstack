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

// generate Table Header
const generateTableHeader = (tableHeader) => {
  const tableHeaderContainer = document.createElement("tr");
  const tableHeaderNode = tableHeader.map((headerContent) => {
    const headerElement = document.createElement("th");
    headerElement.textContent = headerContent;
    return headerElement;
  });
  tableHeaderContainer.append(...tableHeaderNode);
  return tableHeaderContainer;
};

// generate Table Content
const generateTableContent = (tableContent) => {
  const tableContentArray = tableContent.map((content) => {
    const tableContentContainer = document.createElement("tr");
    const tableContentNode = Object.values(content).map((tableData) => {
      const contentElement = document.createElement("td");
      contentElement.textContent = tableData;
      return contentElement;
    });
    tableContentContainer.append(...tableContentNode);
    return tableContentContainer;
  });
  return tableContentArray;
};

// generate table
const generateTable = ({ tableHeader, tableContent }) => {
  const table = document.createElement("table");
  table.append(generateTableHeader(tableHeader));
  table.append(...generateTableContent(tableContent));
  return table;
};

document.body.append(generateTable(tableInfo));

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const generateListByType = (type, list) => {
  const listContainer = document.createElement(type);
  const listDate = list.map((data) => {
    const listElement = document.createElement("li");
    listElement.textContent = data;
    return listElement;
  });
  listContainer.append(...listDate);
  return listContainer;
};
document.body.append(generateListByType("ol", list));
document.body.append(generateListByType("ul", list));

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const generateDropList = (list) => {
  const dropDownListContainer = document.createElement("select");
  dropDownListContainer.id = "cities";
  dropDownListContainer.name = "Cities";
  const listData = list.map(({ value, content }) => {
    const dataElement = document.createElement("option");
    dataElement.value = value;
    dataElement.textContent = content;
    return dataElement;
  });
  dropDownListContainer.append(...listData);
  return dropDownListContainer;
};
document.body.append(generateDropList(dropDownList));
