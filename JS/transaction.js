// JavaScript for filtering transactions //TRANSACTION SCRIPT
document.getElementById('all-transactions').addEventListener('click', function() {
    filterTransactions('all');
});

document.getElementById('sent-transactions').addEventListener('click', function() {
    filterTransactions('sent');
});

document.getElementById('received-transactions').addEventListener('click', function() {
    filterTransactions('received');
});

function filterTransactions(type) {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (type === 'all') {
            row.style.display = ''; // Show all
        } else if (type === 'sent') {
            row.style.display = row.classList.contains('sent') ? '' : 'none'; // Show only sent
        } else if (type === 'received') {
            row.style.display = row.classList.contains('received') ? '' : 'none'; // Show only received
        }
    });
}