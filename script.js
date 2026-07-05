function orderNow() {

let uid = document.getElementById("uid").value;
let player = document.getElementById("player").value;
let mobile = document.getElementById("mobile").value;
let pack = document.getElementById("package").value;

if(uid=="" || player=="" || mobile=="" || pack=="Select Package"){
    alert("সব তথ্য পূরণ করুন");
    return;
}

let message =
"✅ Order Received!\n\n" +
"UID: " + uid +
"\nPlayer: " + player +
"\nPackage: " + pack +
"\nMobile: " + mobile +
"\n\nbKash/Nagad: 01788655205\nWhatsApp: 01788655205";

alert(message);

window.open(
"https://wa.me/8801788655205?text=" +
encodeURIComponent(
"New Free Fire Order\n\nUID: "+uid+
"\nPlayer: "+player+
"\nPackage: "+pack+
"\nMobile: "+mobile
),
"_blank"
);

}
