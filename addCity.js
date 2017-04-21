function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function add_provinces() {  //添加省份
    var se_province = document.getElementById("select_province");
    for (var i = 0; i < All_City.length; i++) {
        var option = document.createElement("option");
        se_province.appendChild(option);
        var province = All_City[i].name;
        var txt = document.createTextNode(province);
        option.appendChild(txt);
    }
}

function add_cities() {  //根据省份添加市
    var se_city = document.getElementById("select_city");
    var sed_province = document.getElementById("select_province").value;
    for (var i = 0; i < All_City.length; i++) {
        if (sed_province == All_City[i].name) {
            var province = All_City[i].name;
            var num = i;
        }
    }
    for (var i = 0; i < All_City[num].cityList.length; i++) {
        var option = document.createElement("option");
        se_city.appendChild(option);
        var city = All_City[num].cityList[i].name;
        var txt = document.createTextNode(city);
        option.appendChild(txt);
    }
}
function on_click() {  //往省上绑定事件，点击省的时候开始相应查找市
    var se_city = document.getElementById("select_city");
    var option = document.createElement("option");
    se_city.appendChild(option);
    var txt = document.createTextNode(All_City[0].cityList[0].name);
    option.appendChild(txt);
    var sed_province_now = document.getElementById("select_province");
    sed_province_now.onclick = function() {
        var city = document.getElementById("select_city");
        if (city) {
            var option = city.getElementsByTagName("option");
        }
        if (option) {
            var number = option.length;
            for (var i = 0; i < number; i++){
               city.removeChild(option[0]);
            }
        }
        add_cities();
    }
}
addLoadEvent(add_provinces);
addLoadEvent(on_click);