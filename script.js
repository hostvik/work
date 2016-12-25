setTimeout(function(){
 var h2tag = document.createElement("h2");
 h2tag.innerHTML = "Владимир Дарий";
 document.getElementsByTagName("h1")[0].appendChild(h2tag);
}, 2000);