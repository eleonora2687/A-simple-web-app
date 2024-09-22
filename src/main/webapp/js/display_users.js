$(document).ready(function() {
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

            $(".view-button").click(function() {
                var userId = $(this).data('id');
                window.open(`user_details.html?id=${userId}`, '_blank');
            });

            $(".edit-button").click(function() {
                var userId = $(this).data('id');
                window.open(`edit_user.html?id=${userId}`, '_blank');
            });

            // Handle delete button click
            $(".delete-button").click(function() {
                var userId = $(this).data('id');
                if (confirm("Are you sure you want to delete this user?")) {
                    $.ajax({
                        url: `/api/users/${userId}`,
                        method: 'DELETE',
                        success: function() {
                            alert("User and associated address deleted successfully!");
                            location.reload(); // Reload the page after deletion
                        },
                        error: function(xhr, status, error) {
                            alert("Error occurred while deleting the user.");
                        }
                    });
                }
            });
        },
        error: function() {
            alert("Failed to fetch users.");
        }
    });
});
