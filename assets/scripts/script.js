function readCSVFile() {
    var files = document.querySelector('#file').files;
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csvdata = event.target.result;
        var rowData = csvdata.split('\n');
        for (var row = 1; row < rowData.length; row++) {
            console.log(row);
        }
    }
}
function scaleup(a){
    const ele = a.getElementsByClassName("thumbnail-image")[0];
    a.style.transform = "scale(1.05)";
    a.style.zIndex = "10";
    a.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    a.style.borderRadius = "1rem";
    const attr1 = document.createAttribute("autoplay","true");
    const attr2 = document.createAttribute("muted","true");
    const attr3 = document.createAttribute("controls","true");
    const attr4 = document.createAttribute("loop","true");
    ele.setAttributeNode(attr1);
    ele.setAttributeNode(attr2);
    ele.setAttributeNode(attr3);
    ele.setAttributeNode(attr4);
    console.log(ele);
}
function scaledown(a){
    const ele = a.getElementsByClassName("thumbnail-image")[0];
    a.style.transform = "scale(1.0)";
    a.style.zIndex = "1";
    a.style.boxShadow = "none";
    a.style.borderRadius = "none";
    if(ele.hasAttribute("controls")){
        ele.removeAttribute("autoplay");
        ele.removeAttribute("muted");
        ele.removeAttribute("controls");
        ele.removeAttribute("loop");
    }
}

