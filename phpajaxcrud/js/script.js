
function addRecord() {

    var first_name = $("#first_name").val();
    var first_name = first_name.trim();

    var last_name = $("#last_name").val();
    var last_name = last_name.trim();

    var email = $("#email").val();
    var email = email.trim();

    if ( first_name == "" ) {
        alert("First name field is required!");
    } else if ( last_name == "" ) {
        alert("Last name field is required!");
    } else if ( email == "" ) {
        alert("Email field is required!");
    } else {
        //add record
        $.post("ajax/create.php",
            {
                first_name : first_name,
                last_name  : last_name,
                email      : email
            },
            function (data, status) {
            //close the popup
            $("#add_new_record_modal").modal("hide");

            //read records again
            readRecords();

            //clear field from popup
            $("#first_name").val("");
            $("#last_name").val("");
            $("#email").val("");
        });
    }
}

function readRecords() {
    $.get("ajax/read.php",
        {},
        function (data, status) {
        $(".records_content").html(data);
    });
}

function GetUserDetails(id) {
    //add user id to the hidden field
    $("#hidden_user_id").val(id);
    $.post("ajax/details.php",
        {
            id : id
        },
        function (data, status) {
        //parse json data
        var user = JSON.parse(data);
        //assign existing values to the model popup fields
        $("#update_first_name").val(user.first_name);
        $("#update_last_name").val(user.last_name);
        $("#update_email").val(user.email);
    });
    //open modal popup
    $("#update_user_modal").modal("show");
}


function UpdateUserDetails() {
    var first_name = $("#update_first_name").val();
    first_name = first_name.trim();
    var last_name = $("#update_last_name").val();
    last_name = last_name.trim();
    var email = $("#update_email").val();
    email = email.trim();

    if (first_name == "") {
        alert("First name field is required!");
    } else if (last_name == "") {
        alert("Last name field is required!");
    } else if (email == "") {
        alert("Email field is required!");
    } else {
        //get hidden field value
        var id = $("#hidden_user_id").val();

        //update the details by requesting to the server using ajax
        $.post("ajax/update.php",
            {
                id : id,
                first_name : first_name,
                last_name : last_name,
                email : email
            },
            function (data, status) {
                //hide the modal
                $("#update_user_modal").modal("hide");

                //reload users by using readRecords()
                readRecords();
        });
    }
}

function DeleteUser(id) {
    var conf = confirm("Are you sure, do you really want to delete User?");
    if (conf == true) {
        $.post("ajax/delete.php",
            {
                id : id
            },
            function (data, status) {
                //reload users by using readRecords
                readRecords();
        });
    }
}


$(document).ready(function () {
    //read records on page load
    readRecords();
});




















