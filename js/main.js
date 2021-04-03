function reset(e) {
    e.preventDefault();
    document["myform"]["name"].value = "";
    document["myform"]["email"].value = "";
    document["myform"]["mobile"].value = "";
    document["myform"]["password"].value = "";
    return false;
}

$(document).ready(function () {
    $("#firstTip").tooltip({
        placement: "top",
    });

    $("#secondTip").tooltip({
        placement: "bottom",
    });

    $("#thirdTip").tooltip({
        placement: "left",
    });
});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

function onFollowClick(id) {
    var btn = document.getElementById(id);
    var idStr = "#" + id;

    if (btn.innerHTML == 'Unfollow <i class="fa fa-plus"></i>') {
        btn.innerHTML = 'Follow <i class="fa fa-plus"></i>';
        btn.className = "btn btn-primary";
        $(idStr).popover("enable");
    } else {
        btn.innerHTML = 'Unfollow <i class="fa fa-plus"></i>';
        btn.className = "btn btn-secondary";
        $(idStr).popover("disable");
    }
}

function clearData(e) {
    e.preventDefault();
    document.forms["myForm"]["name"].value = "";
    document.forms["myForm"]["email"].value = "";
    document.forms["myForm"]["message"].value = "";
}
