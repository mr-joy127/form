$("#sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    

    if(name == "") {
        $("#error").text("Введите имя")
        return false;
    }


    if(email == "") {
        $("#error").text("Введите почту")
        return false;
    }


    if(phone == "") {
        $("#error").text("Введите телефон")
        return false;
    }


    $("#error").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'phone': phone},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true); 
        },
        success: function(data) {
            if(!data)
                alert("Сообщение не отправлено");
            else
                $("#mailform").trigger("reset");

            $("#sendMail").prop("disabled", false);
        }
    })

});