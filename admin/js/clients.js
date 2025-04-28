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

// Function to populate table
function loadClients() {
  const tableBody = document.getElementById("client-table-body");
  tableBody.innerHTML = ""; // Clear before loading

  clients.forEach((client, index) => {
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

function viewClient(index) {
  alert(`Viewing client: ${clients[index].name}`);
}

function editClient(index) {
  alert(`Editing client: ${clients[index].name}`);
}

function deleteClient(index) {
  if (confirm(`Are you sure you want to delete ${clients[index].name}?`)) {
    clients.splice(index, 1); // Remove from array
    loadClients(); // Reload table
  }
}

// Load clients when page loads
document.addEventListener("DOMContentLoaded", loadClients);
// Handle opening and closing the modal
const addClientBtn = document.getElementById("addClientBtn");
const clientModal = document.getElementById("clientModal");
const closeModalBtn = document.getElementById("closeModalBtn");

addClientBtn.addEventListener("click", () => {
  clientModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  clientModal.style.display = "none";
});

// Handle adding a new client
const clientForm = document.getElementById("clientForm");
clientForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading page

  // Get form values
  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const company = document.getElementById("clientCompany").value;
  const status = document.getElementById("clientStatus").value;

  // Add to clients array
  clients.push({ name, email, company, status });

  // Refresh table
  loadClients();

  // Close modal
  clientModal.style.display = "none";

  // Clear form
  clientForm.reset();
});
