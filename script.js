function placeOrder() {

const uid = document.getElementById("uid").value;
const name = document.getElementById("name").value;
const mobile = document.getElementById("mobile").value;
const pack = document.getElementById("package").value;

if(uid=="" || name=="" || mobile=="" || pack==""){
alert("সব তথ্য পূরণ করুন");
return;
}

const whatsapp =
"https://wa.me/8801788655205?text=" +

encodeURIComponent(
"🎮 Rajib Top-Up House\n\n" +
"UID: " + uid + "\n" +
"Player: " + name + "\n" +
"Mobile: " + mobile + "\n" +
"Package: " + pack
);

window.open(whatsapp,"_blank");

}
