$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    function loadUserDetails() {
        $.ajax({
            url: `/api/users/${userId}`,
            type: "GET",
            success: function(user) {
                $("#userName").text(user.name);
                $("#userSurname").text(user.surname);
                $("#userGender").text(user.gender);
                $("#userBirthdate").text(user.birthdate);
                $("#userWorkAddress").text(user.address.workAddress);
                $("#userHomeAddress").text(user.address.homeAddress);
            },
            error: function(error) {
                alert("Error loading user details");
            }
        });
    }

    loadUserDetails();
});
