
$(document).ready(function () {
    $("form").submit(function (event) {
        
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            superheroAlias: $("#superheroAlias").val(),
            
        };
        console.log("success");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/",
            data: formData,

       //    dataType: "text",
       //     encode: true,
            success: function () {
              //  alert(data);
                console.log("success dumm");
                alert("Hello! I am an alert box!!");
            },
            error: function () {
               // alert(data);
                console.log("success dumm2");
                alert("Hello! I am an alert box error!!");
            }
        })//.done(function (data) {
       //     console.log(data);
      //  });

   //     event.preventDefault();
    });
});