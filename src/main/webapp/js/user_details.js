$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    function loadUserDetails() {
        $.ajax({
            url: `/api/users/${userId}`,
            type: "GET",
            success: function(user) {
                const userDetails = $("#userDetails");
                userDetails.empty();
                userDetails.append(`
                    <p>Name: ${user.name}</p>
                    <p>Surname: ${user.surname}</p>
                    <p>Gender: ${user.gender}</p>
                    <p>Birthdate: ${user.birthdate}</p>
                    <p>Work Address: ${user.address.workAddress}</p>
                    <p>Home Address: ${user.address.homeAddress}</p>
                `);
            },
            error: function(error) {
                alert("Error loading user details");
            }
        });
    }

    loadUserDetails();
});
