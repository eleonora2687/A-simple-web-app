$(document).ready(function() {
    $.getJSON("/api/users", function(users) {
        var rows = '';
        $.each(users, function(index, user) {
            rows += '<tr>';
            rows += '<td>' + user.name + '</td>';
            rows += '<td>' + user.surname + '</td>';
            rows += '<td><button onclick="viewUser(' + user.id + ')">View</button>';
            rows += '<button onclick="deleteUser(' + user.id + ')">Delete</button></td>';
            rows += '</tr>';
        });
        $('#usersTableBody').html(rows);
    });
});

function viewUser(id) {
    window.open('/user_details.html?id=' + id, '_blank');
}

function deleteUser(id) {
    $.ajax({
        type: "DELETE",
        url: "/api/users/" + id,
        success: function() {
            alert("User deleted successfully!");
            location.reload();
        }
    });
}
