import { workers,filteredWorkers } from "./workersDataAdd.js";
export {tableShow};

function tableShow() {
    const resultTableBody = document.getElementById("resultTableBody");
    resultTableBody.innerHTML = "";
  
    filteredWorkers.forEach((worker) => {
      const newRow = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(worker.name));
      newRow.appendChild(nameCell);
  
      const surnameCell = document.createElement("td");
      surnameCell.appendChild(document.createTextNode(worker.surname));
      newRow.appendChild(surnameCell);
  
      const salaryCell = document.createElement("td");
      salaryCell.appendChild(document.createTextNode(worker.salary));
      newRow.appendChild(salaryCell);
  
      const positionCell = document.createElement("td");
      positionCell.appendChild(document.createTextNode(worker.position));
      newRow.appendChild(positionCell);
  
      const editCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.innerText = "Delete";
      const editButton = document.createElement("button");
      editButton.className = "edit-btn";
      editButton.innerText = "Edit";
      editCell.appendChild(editButton);
      editCell.appendChild(deleteButton);
      newRow.appendChild(editCell);
  
      resultTableBody.appendChild(newRow);
      deleteButton.addEventListener("click", (e) => {
        newRow.remove();
        workers.shift();
      });
      editButton.addEventListener("click", () => {
        editButton.style.display = "none";
        deleteButton.style.display = "none";
        const editName = document.createElement("input");
        editName.className = "edit-input";
        editName.placeholder = "Name";
        const editSurname = document.createElement("input");
        editSurname.className = "edit-input";
        editSurname.placeholder = "Surname";
        const editSalary = document.createElement("input");
        editSalary.className = "edit-input";
        editSalary.type = "number";
        editSalary.placeholder = "Salary";
        const editSubmit = document.createElement("button");
        editSubmit.innerText = "submit";
        const editPosition = document.createElement("select");
        const devOption = document.createElement("option");
        devOption.innerText = "developer";
        devOption.value = "developer";
        const desingOption = document.createElement("option");
        desingOption.innerText = "designer";
        desingOption.value = "designer";
        const testerOption = document.createElement("option");
        testerOption.innerText = "tester";
        testerOption.value = "tester";
        editPosition.appendChild(devOption);
        editPosition.appendChild(desingOption);
        editPosition.appendChild(testerOption);
        editCell.appendChild(editName);
        editCell.appendChild(editSurname);
        editCell.appendChild(editSalary);
        editCell.appendChild(editPosition);
        editCell.appendChild(editSubmit);
        editSubmit.addEventListener("click", () => {
          editName.style.display = "none";
          editSurname.style.display = "none";
          editSalary.style.display = "none";
          editSubmit.style.display = "none";
          editPosition.style.display = "none";
          editButton.style.display = "";
          deleteButton.style.display = "";
          if (editName.value.trim() !== "") {
            nameCell.innerText = editName.value;
            worker.name = editName.value;
          }
          if (editSurname.value.trim() !== "") {
            surnameCell.innerText = editSurname.value;
            worker.surname = editSurname.value;
          }
          if (editSalary.value.trim() !== "") {
            salaryCell.innerText = editSalary.value;
            worker.salary = editSalary.value;
          }
          positionCell.innerText = editPosition.value;
          worker.position = editPosition.value;
        });
      });
    });
  }

 