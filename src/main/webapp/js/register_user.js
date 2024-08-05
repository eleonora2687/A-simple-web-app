$(function() {
            $("#birthdate").datepicker({ dateFormat: 'yy-mm-dd' });

            $("#registerUserForm").submit(function(event) {
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
                    type: "POST",
                    url: "/api/users",
                    contentType: "application/json",
                    data: JSON.stringify(formData),
                    success: function(response) {
                        alert("User registered successfully!");
                        window.location.href = "index.html";
                    }
                });
            });
        });