$(document).ready(function() {
    // Test toastr on page load
    toastr.info("Toastr is working!");

    // Fetch users and populate table
    $.ajax({
        url: '/api/users',
        method: 'GET',
        success: function(users) {
            users.forEach(function(user) {
                $("#usersTableBody").append(`
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.surname}</td>
                        <td>
                            <button class="button view-button" data-id="${user.id}">View</button>
                            <button class="button edit-button" data-id="${user.id}">Edit</button>
                            <button class="button delete-button" data-id="${user.id}">Delete</button>
                        </td>
                    </tr>
                `);
            });

            // Delete user handling
            $(".delete-button").click(function() {
                var userId = $(this).data('id');
                if (confirm("Are you sure you want to delete this user?")) {
                    $.ajax({
                        url: `/api/users/${userId}`,
                        method: 'DELETE',
                        success: function() {
                            toastr.success("User and associated address deleted successfully!");
                            setTimeout(function() {
                                location.reload(); // Reload after toastr notification
                            }, 1000);
                        },
                        error: function(xhr, status, error) {
                            toastr.error("Error occurred while deleting the user.");
                        }
                    });
                }
            });
        },
        error: function() {
            toastr.error("Failed to fetch users.");
        }
    });
});
