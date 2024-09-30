let data = JSON.parse(localStorage.getItem("userData")) || [];

function addData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    if (name && age && address && email) {
        data.push({ name, age, address, email });
        localStorage.setItem("userData", JSON.stringify(data));
        renderTable();
        clearForm();
    } else {
        alert("Please fill all fields.");
    }
}

function renderTable() {
    const tableData = document.getElementById("tableData");
    tableData.innerHTML = "";
    data.forEach((item, index) => {
        tableData.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.address}</td>
                <td>${item.email}</td>
                <td>
                    <button class="delete" onclick="deleteData(${index})">Delete</button>
                    <button class="edit" onclick="editData(${index})">Edit</button>
                </td>
            </tr>
        `;
    });
}

function deleteData(index) {
    data.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(data));
    renderTable();
}

function editData(index) {
    const item = data[index];
    document.getElementById("name").value = item.name;
    document.getElementById("age").value = item.age;
    document.getElementById("address").value = item.address;
    document.getElementById("email").value = item.email;

    deleteData(index);
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
}

window.onload = renderTable;
