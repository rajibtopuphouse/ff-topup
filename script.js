// ===========================
// Rajib Top-Up House v2
// script.js
// ===========================

// Place Order
function placeOrder() {

  const uid = document.getElementById("uid").value.trim();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const pack = document.getElementById("package").value;

  if (uid === "" || name === "" || mobile === "" || pack === "") {
    alert("সব তথ্য পূরণ করুন।");
    return;
  }

  db.collection("orders").add({

    uid: uid,
    name: name,
    mobile: mobile,
    package: pack,
    status: "Pending",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()

  })

  .then(function () {

    const message =
`🎮 Rajib Top-Up House

👤 Name: ${name}
🆔 UID: ${uid}
📱 Mobile: ${mobile}
💎 Package: ${pack}

✅ Status: Pending`;

    window.open(
      "https://wa.me/8801788655205?text=" +
      encodeURIComponent(message),
      "_blank"
    );

    alert("✅ Order Submitted Successfully!");

    document.getElementById("uid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("package").selectedIndex = 0;

  })

  .catch(function(error){

    alert("Error : " + error.message);

  });

}

// ===========================
// Banner Slider
// ===========================

const images = [

"1783852642908.jpg",

"1783852699516.jpg",

"1783852714212.jpg"

];

let current = 0;

setInterval(function(){

const slider = document.getElementById("slider");

if(slider){

current++;

if(current >= images.length){

current = 0;

}

slider.src = images[current];

}

},3000);
