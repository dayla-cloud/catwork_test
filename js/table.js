const tableData = document.getElementsByTagName("td");
const dayOff = "";
const dayOffColor = "#f39800";
for (let i = 0; i < tableData.length; i++) {
  if (tableData[i].innerText === dayOff) {
    tableData[i].innerText = "●";
    tableData[i].style.color = dayOffColor;
  }
}
