var data = {
  name: "richer",
  message: "Hello",
  last: "SuperSexy",
  titleTxt: "article1" || "picture",
  imgSrc: "https://i.picsum.photos/id/692/300/300.jpg?hmac=6rdQaEVHQGtQhQGUOuFsbuRzPTfsFJXD1kRMF2r2YQo"

}




var app = new Vue({
  //el物件屬性(element)
  el: "#app",

  //屬性APP物件跟那些資料綁定
  data: {
    name: data.name,
    message: data.message,
    last: data.last,
    titleTxt: data.titleTxt,
    imgSrc: data.imgSrc,
  }

})
//以上就做完最基礎的VUE.JS

//改變名字
//$("#app").text = kitty ;

app.name = "honey"

