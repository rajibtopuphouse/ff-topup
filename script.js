function placeOrder() {

  const uid = document.getElementById("uid").value;
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const pack = document.getElementById("package").value;

  if (!uid || !name || !mobile || !pack) {
    alert("সব তথ্য পূরণ করুন।");
    return;
  }

  // Firestore-এ অর্ডার সেভ
  db.collection("orders").add({
    uid: uid,
    name: name,
    mobile: mobile,
    package: pack,
    status: "Pending",
    time: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function () {

    const message =
`🎮 Rajib Top-Up House

👤 Name: ${name}
🆔 UID: ${uid}
📱 Mobile: ${mobile}
💎 Package: ${pack}`;

    const whatsapp =
      "https://wa.me/8801788655205?text=" +
      encodeURIComponent(message);

    window.open(whatsapp, "_blank");

    alert("Order Submitted Successfully");

  })
  .catch(function (error) {
    alert(error.message);
  });

}

// Slider
const images = [
  "1783852642908.jpg",
  "1783852699516.jpg",
  "1783852714212.jpg"
];

let current = 0;

setInterval(function () {
  current = (current + 1) % images.length;
  document.getElementById("slider").src = images[current];
}, 3000);
