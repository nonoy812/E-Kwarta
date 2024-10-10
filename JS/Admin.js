$(document).ready(function () {
    // Toggle checkboxes
    $('#selectAll').click(function () {
        $('table tbody input[type="checkbox"]').prop('checked', this.checked);
    });

    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip();



    // Add employee submission
    $('#addEmployeeModal form').on('submit', function (e) {
        e.preventDefault();
        // Add your employee addition logic here
        $('#addEmployeeModal').modal('hide');
    });

    // Edit employee submission
    $('#editEmployeeModal form').on('submit', function (e) {
        e.preventDefault();
        // Add your employee editing logic here
        $('#editEmployeeModal').modal('hide');
    });

    // Delete employee submission
    $('#deleteEmployeeModal form').on('submit', function (e) {
        e.preventDefault();
        // Add your employee deletion logic here
        $('#deleteEmployeeModal').modal('hide');
    });
});
