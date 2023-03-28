import { filterWorkers } from "./workersDataAdd.js";
const filterPositionSelect=document.querySelector("#positionFilter");
filterPositionSelect.addEventListener("change",()=>{
  filterWorkers();
})

