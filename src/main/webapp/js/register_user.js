$(function() {
    $("#birthdate").datepicker({ dateFormat: 'yy-mm-dd' });

    $("#registerUserForm").submit(function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var surname = $("#surname").val();
        var termsAccepted = $("#termsCheckbox").is(":checked");

        var nameRegex = /^[A-Za-zΑ-Ωα-ω]+$/;

        if (!nameRegex.test(name)) {
            alert("Name can only contain letters A-Z, a-z, Α-Ω, or α-ω.");
            return;
        }

        if (!nameRegex.test(surname)) {
            alert("Surname can only contain letters A-Z, a-z, Α-Ω, or α-ω.");
            return;
        }

        if (!termsAccepted) {
            alert("You must agree to the terms of service to register.");
            return;
        }

        // Get selected gender value
        var gender = $("input[name='gender']:checked").val();

        var formData = {
            name: name,
            surname: surname,
            gender: gender, // Now captures the selected gender value
            birthdate: $("#birthdate").val(),
            address: {
                workAddress: $("#workAddress").val(),
                homeAddress: $("#homeAddress").val()
            }
        };

        $.ajax({
            type: "POST",
            url: "/api/users",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function(response) {
                alert("User registered successfully!");
                window.location.href = "display_users.html";
            },
            error: function(error) {
                alert("Error registering user.");
            }
        });
    });
});
