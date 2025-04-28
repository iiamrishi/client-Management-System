// Dummy client data
const clients = [
  {
    name: "John Doe",
    email: "john@example.com",
    company: "Example Inc.",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    company: "Test Corp",
    status: "Pending",
  },
  {
    name: "Alice Brown",
    email: "alice@example.com",
    company: "Tech Solutions",
    status: "Active",
  },
];

let editingIndex = null; // Track whether we're editing or adding

// Function to populate table with either all clients or filtered clients
function loadClients(clientList) {
  const tableBody = document.getElementById("client-table-body");
  tableBody.innerHTML = ""; // Clear before loading

  clientList.forEach((client, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.company}</td>
      <td>${client.status}</td>
      <td>
        <button onclick="viewClient(${index})">View</button>
        <button onclick="editClient(${index})">Edit</button>
        <button onclick="deleteClient(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// View client (show details in a modal)
function viewClient(index) {
  const client = clients[index];
  // Populate the view modal with client details
  document.getElementById("viewClientName").textContent = client.name;
  document.getElementById("viewClientEmail").textContent = client.email;
  document.getElementById("viewClientCompany").textContent = client.company;
  document.getElementById("viewClientStatus").textContent = client.status;

  // Show the view modal
  document.getElementById("viewClientModal").style.display = "block";
}

// Close the view client modal
document.getElementById("closeViewModalBtn").addEventListener("click", () => {
  document.getElementById("viewClientModal").style.display = "none";
});

// Edit client
function editClient(index) {
  clientModal.style.display = "block";

  document.getElementById("clientName").value = clients[index].name;
  document.getElementById("clientEmail").value = clients[index].email;
  document.getElementById("clientCompany").value = clients[index].company;
  document.getElementById("clientStatus").value = clients[index].status;

  editingIndex = index;
}

// Delete client
function deleteClient(index) {
  if (confirm(`Are you sure you want to delete ${clients[index].name}?`)) {
    clients.splice(index, 1);
    loadClients(clients); // Reload the clients list after deletion
  }
}

// Open/close modal handlers
const addClientBtn = document.getElementById("addClientBtn");
const clientModal = document.getElementById("clientModal");
const closeModalBtn = document.getElementById("closeModalBtn");

addClientBtn.addEventListener("click", () => {
  clientModal.style.display = "block";
  editingIndex = null; // If clicked "Add New", make sure it's fresh
  clientForm.reset();
});

closeModalBtn.addEventListener("click", () => {
  clientModal.style.display = "none";
  editingIndex = null;
  clientForm.reset();
});

// Form submit handler
const clientForm = document.getElementById("clientForm");
clientForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const company = document.getElementById("clientCompany").value;
  const status = document.getElementById("clientStatus").value;

  if (editingIndex === null) {
    clients.push({ name, email, company, status });
  } else {
    clients[editingIndex] = { name, email, company, status };
    editingIndex = null;
  }

  loadClients(clients); // Reload clients after add/edit
  clientModal.style.display = "none";
  clientForm.reset();
});

// Search Client functionality
function searchClient() {
  const searchTerm = document
    .getElementById("searchClient")
    .value.toLowerCase();
  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm) ||
      client.company.toLowerCase().includes(searchTerm)
    );
  });

  loadClients(filteredClients); // Load the filtered list
}

// Add event listener to search input
document.getElementById("searchClient").addEventListener("keyup", searchClient);

// Function to handle sorting based on dropdown selection
document.getElementById("sortClients").addEventListener("change", (e) => {
  const column = e.target.value;
  sortTable(column); // Call sortTable with the selected column
});

// Function to sort the table based on selected column
function sortTable(column) {
  const sortedClients = [...clients];

  // Sort clients based on the selected column
  if (column === "name") {
    sortedClients.sort((a, b) => a.name.localeCompare(b.name));
  } else if (column === "email") {
    sortedClients.sort((a, b) => a.email.localeCompare(b.email));
  } else if (column === "company") {
    sortedClients.sort((a, b) => a.company.localeCompare(b.company));
  } else if (column === "status") {
    sortedClients.sort((a, b) => a.status.localeCompare(b.status));
  }

  loadClients(sortedClients); // Reload the clients list with sorted data
}

// Load initial clients
document.addEventListener("DOMContentLoaded", () => {
  loadClients(clients);
});
