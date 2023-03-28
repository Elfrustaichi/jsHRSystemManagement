import { filterWorkers } from "./workersDataAdd.js";
const salaryFilterInput=document.querySelector("#salaryFilter");
salaryFilterInput.addEventListener("keyup",()=>{
  filterWorkers();
})
