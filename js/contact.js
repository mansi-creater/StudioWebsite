
function validation() {
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('lblError3')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    $("#lblError3").html("");

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')       
        $("#lblError3").html("");
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')      
        $("#lblError3").html("Please Enter Valid Email Address.");
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')       
    }
}

function savedetails() {
    debugger
    try {
        var Name = $('#name').val();
        var Email = $('#email').val();
        var PhoneNo = $('#phoneno').val();
        var city = $('#city').val();
        var State = $('#state').val();
        var Event = $('#event').val();
        var message = $('#message').val();
        var active_flg = 1;

        if (Name == "" || Name == null || Name == undefined) {
            $("#m1").html("* Please Enter Name");
            $("#name").focus();
            return;
        }
        if (PhoneNo == "" || PhoneNo == null || PhoneNo == undefined) {
            $("#m2").html("* Please Enter Phone No.");
            $("#phoneno").focus();
            return;
        }
        if (Event == "" || Event == null || Event == undefined) {
            $("#m3").html("* Please Enter Event Name");
            $("#event").focus();
            return;
        }


        var urlgetcode = '../Studio/SaveEnquiryRegistration';
        $.ajax({
            type: "POST",
            url: urlgetcode,
            data: '{Name:"' + Name + '",Email:"' + Email + '",PhoneNo:"' + PhoneNo + '",city:"' + city + '",State:"' + State + '",Event:"' + Event + '",message:"' + message + '",active_flg:"' + active_flg + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            traditional: true,
            success: function (msg) {              
                var obj = JSON.stringify(msg);
                var str = $.parseJSON(obj);
                if (str.length = 0) {
                    alert(str);
                }
                else {
                    $("#success").show();
                    $("#m1").html("");
                    $("#m2").html("");
                    $("#m3").html("");                    
                    $('#name').val("");
                    $('#email').val("");
                    $('#phoneno').val("");
                    $('#city').val("");
                    $('#state').val("");
                    $('#event').val("");
                    $('#message').val("");

                }
            },
            error: function (request) {
                alert(request.responsetext);
            }
        });

    }
    catch (error) {
        alert(error);
    }
}