import { tableShow } from "./tableShowFunction.js";


let workers = [];
let filteredWorkers = workers;


function filterWorkers() {
    const salaryFilter = Number(document.getElementById("salaryFilter").value);
    const positionFilter = document.getElementById("positionFilter").value;
  
    filteredWorkers = workers.filter((worker) => {
      if (salaryFilter && worker.salary < salaryFilter) {
        return false;
      }
  
      if (positionFilter && worker.position !== positionFilter) {
        return false;
      }
  
      return true;
    });
  
    tableShow();
  }
  const addWorkerBtn=document.querySelector("#add-worker");
addWorkerBtn.addEventListener("click",()=>{
  addWorkers();
})

function addWorkers() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const salary = Number(document.getElementById("salary").value);
    const position = document.getElementById("position").value;
    let id=1;
  
    const newWorker = { id,name, surname, salary, position };
    workers.push(newWorker);
    id++;
  
    filterWorkers();
  }


export{workers,filteredWorkers};
export{filterWorkers,addWorkers};

