//Wrapper
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};
//Wrapper

//RECHARGE functions
function toggleCardFields() {
    const cardOption = document.getElementById('cardOption').value;
    const cardField = document.getElementById('cardField');

    // Show relevant fields based on the selected option
    if (cardOption === 'card') {
        cardField.style.display = 'block'; // Show the card fields
    } else {
        cardField.style.display = 'none'; // Hide the card fields
    }
}
//RECHARGE

//BANK
function toggleBankFields() {
    const bankSelect = document.getElementById("bankOption");
    const bankField = document.getElementById("bankField");
    // Check if a bank is selected
    if (bankSelect.value) {
        bankField.style.display = "block"; // Show bank fields
    } else {
        bankField.style.display = "none"; // Hide bank fields
    }
}
//BANK

//Load Script
// Select all telecom provider images
const telecoms = document.querySelectorAll('.telecom');

// Add click event listener to each telecom logo
telecoms.forEach(telecom => {
    telecom.addEventListener('click', () => {
        // Remove 'selected' class from all telecom logos
        telecoms.forEach(t => t.classList.remove('selected'));
        
        // Add 'selected' class to the clicked logo
        telecom.classList.add('selected');
        
        // Optionally, you can handle other logic here (e.g., store the selected provider)
        console.log(`Selected provider: ${telecom.dataset.provider}`);
    });
});

//notif
document.getElementById('flexSwitchCheckDefault').addEventListener('click', () => {
    document.querySelector('.toggle-badge').classList.toggle('d-none');
});

document.getElementById('notification-icon').addEventListener('click', () => {
    const dropdown = document.getElementById('notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('notification-dropdown');
    if (!event.target.matches('#notification-icon') && !event.target.closest('#notification-container')) {
        dropdown.style.display = 'none';
    }
});
