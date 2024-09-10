$(function() {
    $("#birthdate").datepicker({ dateFormat: 'yy-mm-dd' });

    var userId = new URLSearchParams(window.location.search).get('id');
    if (userId) {
        $.ajax({
            url: `/api/users/${userId}`,
            method: 'GET',
            success: function(data) {
                $("#name").val(data.name);
                $("#surname").val(data.surname);
                $("#gender").val(data.gender);
                $("#birthdate").val(data.birthdate);
                if (data.address) {
                    $("#workAddress").val(data.address.workAddress);
                    $("#homeAddress").val(data.address.homeAddress);
                }
            },
            error: function(xhr, status, error) {
                toastr.error("Failed to load user details. Please try again.");
            }
        });
    }

    $("#editUserForm").submit(function(event) {
        event.preventDefault();

        var formData = {
            name: $("#name").val(),
            surname: $("#surname").val(),
            gender: $("#gender").val(),
            birthdate: $("#birthdate").val(),
            address: {
                workAddress: $("#workAddress").val(),
                homeAddress: $("#homeAddress").val()
            }
        };

        $.ajax({
            url: `/api/users/${userId}`,
            method: 'PUT',
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function(response) {
                toastr.success("User edited successfully!");
            },
            error: function(xhr, status, error) {
                toastr.error("An error occurred while editing the user.");
            }
        });
    });

    $(".cancelbtn").click(function() {
        window.close(); 
    });
});
