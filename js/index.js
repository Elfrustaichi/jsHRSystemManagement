let workers = [];
let filteredWorkers = workers;

//adding workers function start
function addWorkers() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const salary = Number(document.getElementById("salary").value);
  const position = document.getElementById("position").value;

  const newWorker = { name, surname, salary, position };
  workers.push(newWorker);

  filterWorkers();
}
//adding workers function end

//showing on table function start
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
    //select vasitesile edit elemek istedim alinmadi
    // const editCell=document.createElement("td");
    // const editCellSelect=document.createElement("select");
    // const selectOptionEdit=document.createElement("option");
    // const selectOptionDelete=document.createElement("option");
    // editCellSelect.appendChild(selectOptionEdit);
    // editCellSelect.appendChild(selectOptionDelete);
    // selectOptionEdit.innerHTML+="Edit";
    // selectOptionDelete.innerHTML+="Delete";
    // editCell.appendChild(editCellSelect);
    // newRow.appendChild(editCell);
  });
}
//showing on table function start

//sorting workers function start
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
//sorting workers function end

//filtering workers function start
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
//filtering workers function end

//searching workers function start

function searchingWorkers() {
  const searchTerm = document.getElementById("searchTerm").value.toLowerCase();

  filteredWorkers = workers.filter((worker) => {
    const fullName = `${worker.name} ${worker.surname}`.toLowerCase();

    return fullName.includes(searchTerm);
  });

  tableShow();
}
//searching workers function end

filterWorkers();
