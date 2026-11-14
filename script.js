let leads = [];

document.getElementById("leadForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let company = document.getElementById("company").value;

    let lead = {
        name: name,
        email: email,
        phone: phone,
        company: company
    };

    leads.push(lead);

    displayLeads();

    document.getElementById("leadForm").reset();

});

function displayLeads() {

    let list = document.getElementById("leadList");

    list.innerHTML = "";

    for (let i = 0; i < leads.length; i++) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${leads[i].name}</td>
            <td>${leads[i].email}</td>
            <td>${leads[i].phone}</td>
            <td>${leads[i].company}</td>
            <td>
                <button onclick="deleteLead(${i})">Delete</button>
            </td>
        `;

        list.appendChild(row);
    }
}

function deleteLead(index) {

    leads.splice(index, 1);

    displayLeads();

}
