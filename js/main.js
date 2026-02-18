const admin = {
  name: "Genrev",
  tagline: "From Genesis to Revelation · Genrev",
  role: "Musician / Technician / Developer",
  location: "PHILIPPINES | VALENZUELA",
  phone: "+639923965626",
  image: "img/admin.png",
  verified: true,
  contacts: [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg",
      link: "https://m.me/gentechserver",
      label: "Messenger"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      link: "https://facebook.com/gentechserver",
      label: "Facebook"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      link: "https://wa.me/639923965626",
      label: "+639923965626"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
      link: "https://t.me/gentechserver",
      label: "@gentechserver"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      link: "mailto:admin@gentechserver.com",
      label: "admin@gentechserver.com"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
      link: "https://www.tiktok.com/@gentechserver",
      label: "TikTok"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      link: "#",
      label: "Shop Location",
      popup: true
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
      link: "https://www.gentechserver.com",
      label: "www.gentechserver.com"
    }
  ]
};

const card = document.getElementById("card");
const popup = document.getElementById("popup");

window.closePopup = () => popup.classList.remove("active");
window.openPopup = () => popup.classList.add("active");

card.innerHTML = `
  <div class="avatar-wrap">
    <img src="${admin.image}">
  </div>
  <div class="name">
    ${admin.name}
    ${admin.verified ? `<img class="verified" src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png">` : ""}
  </div>
  <div class="subtitle">${admin.tagline}</div>
  <div class="role">${admin.role}<br>${admin.location}</div>
  <a class="call-btn" href="tel:${admin.phone}">Call</a>
    <div class="list">
    ${admin.contacts.map(c => c.popup ? `
      <div class="item" onclick="openPopup()">
        <img src="${c.icon}">
        ${c.label}
      </div>
    ` : `
      <a class="item" href="${c.link}" target="_blank">
        <img src="${c.icon}">
        ${c.label}
      </a>
    `).join("")}
  </div>
`;
