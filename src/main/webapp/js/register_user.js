$(function() {
    $("#birthdate").datepicker({ dateFormat: 'yy-mm-dd' });

    // Handle form submission
    $("#registerUserForm").submit(function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var surname = $("#surname").val();
        var termsAccepted = $("#termsCheckbox").is(":checked");

        var nameRegex = /^[A-Za-zΑ-Ωα-ω]+$/;

        // Validation
        if (!nameRegex.test(name)) {
            toastr.error("Name can only contain letters A-Z, a-z, Α-Ω, or α-ω.");
            return;
        }

        if (!nameRegex.test(surname)) {
            toastr.error("Surname can only contain letters A-Z, a-z, Α-Ω, or α-ω.");
            return;
        }

        if (!termsAccepted) {
            toastr.error("You must agree to the terms of service to register.");
            return;
        }

        var formData = {
            name: name,
            surname: surname,
            gender: $("#gender").val(),
            birthdate: $("#birthdate").val(),
            address: {
                workAddress: $("#workAddress").val(),
                homeAddress: $("#homeAddress").val()
            }
        };

        // Make AJAX request to register user
        $.ajax({
            type: "POST",
            url: "/api/users",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function(response) {
                // Show toastr success message
                toastr.success("User registered successfully!");

                // Redirect after delay to show the message
                setTimeout(function() {
                    window.location.href = "display_users.html";
                }, 2000); // 2-second delay to allow toastr to show
            },
            error: function(xhr, status, error) {
                // Show toastr error message
                toastr.error("An error occurred during registration. Please try again.");
            }
        });
    });
});
