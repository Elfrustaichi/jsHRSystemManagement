import { tableShow } from "./tableShowFunction.js";
import { workers,filteredWorkers } from "./workersDataAdd.js";
const searchByNameSurname=document.querySelector("#searchNameSurname");
searchByNameSurname.addEventListener("keyup",()=>{
  searchingWorkers();
})

function searchingWorkers() {
    const searchNameSurname = document.getElementById("searchNameSurname").value.toLowerCase();
  
    filteredWorkers = workers.filter((worker) => {
      const fullName = `${worker.name} ${worker.surname}`.toLowerCase();
  
      return fullName.includes(searchNameSurname);
    });
  
    tableShow();
  }