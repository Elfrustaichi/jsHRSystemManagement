import { tableShow } from "./tableShowFunction.js";
import { filteredWorkers } from "./workersDataAdd.js";

const sortSelect=document.querySelector("#sortField");
sortSelect.addEventListener("change",()=>{
  sortingWorker();
})

function sortingWorker() {
    const sortField = document.getElementById("sortField").value;
  
    filteredWorkers.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];
  
      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
  
    tableShow();
  }
  