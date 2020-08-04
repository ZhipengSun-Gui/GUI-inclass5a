// ADD NEW ITEM TO END OF LIST
var ulList = document.getElementsByTagName("ul");
if (ulList.length > 0) {
    var ul = ulList[0];
    ul.innerHTML += "<li>cream</li>";
}

// ADD NEW ITEM START OF LIST
var ulList = document.getElementsByTagName("ul");
if (ulList.length > 0) {
    var ul = ulList[0];
    var inner = ul.innerHTML;
    ul.innerHTML = "<li>kale</li>"+inner;
}

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var liList = document.getElementsByTagName("li");
for (var i=0; i<liList.length; i++) {
    var li = liList[i];
    li.className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2List = document.getElementsByTagName("h2");
var liList = document.getElementsByClassName("cool");
if (h2List.length>0) {
    var h2 = h2List[0];
    h2.innerHTML += "<span>" + liList.length + "</span>";
}