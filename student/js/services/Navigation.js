$(document).ready(function()  {
    $("#main-content").load("../html/homepage.html");
    document.getElementById("list2").style.display = "none";
});

function loadPage(route){
    $("#main-content").load(route);
};

$(document).ready(function(){
    $.ajax ({
        type: "get",
        success: function (result) {
            $(".list-element-styleV2").click(function (e) {
                var name = $(this).html();
                $("#pageName").html(name);
                var parameter = new Object();
                parameter.reciver = $("#pageName").text();
                switch (parameter.reciver) {
                    default:
                        break;
                    case "Webtech-Cars":
                        $("#main-content").load("../html/homepage.html");
                        break;
                    case "Cookie":
                        loadPage("../html/CookiePage.html");
                        cookie("name");
                        break;
                    case "AddManufacturers":
                        loadPage("../html/ManufacturersAddManufacturers.html");
                        createManufacturerTable();
                        break;
                    case "AddCars":
                        loadPage("../html/CarsAddCars.html");
                        createCarsTable();
                        cookie("manufacturer");
                        break;
                };
            });
        }
    });
});