const cardData = [
  {
    name: "Md Morsalin",
    roll: "02",
    blood: "B+",
    image: "images/morsalin.webp",
    contact: "01997588068",
    emergency_contact: "01997588068",
    email_address: "ahmedmorsalin068@gmail.com",
    facebook_profile: "https://www.facebook.com/share/1DxF5KRpbT/",
  },
  {
    name: "Mahbullah Sikder Dhip",
    roll: "04",
    blood: "O+",
    image: "images/dhip.webp",
    contact: "01581862526",
    emergency_contact: "",
    email_address: "mahbullahsikder@gmail.com",
    facebook_profile: "https://www.facebook.com/share/1dxLEK69wK/",
  },
  {
    name: "Md. Rakibul Islam Sabid",
    roll: "07",
    blood: "B+",
    image: "images/sparse_brainer.webp",
    contact: "01867428503",
    emergency_contact: "01724452874",
    email_address: "msabid2310179@bscse.uiu.ac.bd",
    facebook_profile: "http://www.facebook.com/sparsebrainer",
  },
  {
    name: "Labib Sikder",
    roll: "10",
    blood: "A+",
    image: "images/labib.webp",
    contact: "+3584578753822",
    emergency_contact: "",
    email_address: "labibsikder121292fi1@gmail.com",
    facebook_profile: "https://www.facebook.com/share/1L9WgDbtyA/",
  },
  {
    name: "Mahidur Rahman",
    roll: "17",
    blood: "A+",
    image: "images/mahid.webp",
    contact: "01904827895",
    emergency_contact: "01511563696",
    email_address: "mahidurrahman066@gmail.com",
    facebook_profile: "https://www.facebook.com/mahidur.rahaman.3762",
  },
  {
    name: "Md Sahed Songram",
    roll: "32",
    blood: "A+",
    image: "images/sahed.webp",
    contact: "01835658576",
    emergency_contact: "01718796010",
    email_address: "sahedbhaiya76@gmail.com",
    facebook_profile: "https://www.facebook.com/pronoy.shikdar.9",
  },
  {
    name: "Tanvir Ahmad",
    roll: "33",
    blood: "O+",
    image: "images/tanvir33.webp",
    contact: "01828729961",
    emergency_contact: "01519601489",
    email_address: "tanvirnurse@gmail.com",
    facebook_profile: "https://www.facebook.com/TANVIR.TNT",
  },
  {
    name: "Morad Sikder",
    roll: "45",
    blood: "B+",
    image: "images/morad.webp",
    contact: "01621160481",
    emergency_contact: "01633118657",
    email_address: "moradsikder097@gmail.com",
    facebook_profile: "https://www.facebook.com/shikder.morad",
  },
  {
    name: "Majedul Shihab",
    roll: "47",
    blood: "O+",
    image: "images/majedulshihab.webp",
    contact: "01703026595",
    emergency_contact: "01910566201",
    email_address: "mishihab6595@gmail.com",
    facebook_profile:
      "https://www.facebook.com/share/1ATtQqzg7U/?mibextid=wwXIfr",
  },
  {
    name: "Biplob Al Muhin",
    roll: "103",
    blood: "B+",
    image: "images/biplob.webp",
    contact: "01872313208",
    emergency_contact: "01752313208",
    email_address: "biplobahmed146@gmail.com",
    facebook_profile: "https://www.facebook.com/share/1bdzXR3CJ5/",
  },
];

const cardContainer = document.querySelector(".card-container");
const searchSelect = document.querySelector("select.search");
const searchInput = document.querySelector("input.search");
const searchBtn = document.querySelector(".search-btn");

function renderCards(data) {
  cardContainer.innerHTML = "";

  data.forEach((student) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                <div class="intro">
                    <img src="${student.image}" loading="lazy" alt="" class="dp" />
                    <div class="intro-right">
                        <div class="name">${student.name}</div>
                        <div class="roll">Roll No. ${student.roll}</div>
                        <div class="blood">
                            <div class="bgroup-text">Blood Group:</div>
                            <div class="bgroup-box">${student.blood}</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="btn-container">
                    <div class="btn-container-inside">
                        <button class="btn call-btn" style="background-color: rgb(4, 123, 0);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
                        <button class="btn emergency-btn" style="background-color: rgb(123, 4, 0);
                        font-size: 13px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Emergency Contact</button>
                        <button class="btn email-btn" style="background-color: rgb(0, 102, 123)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></button>
                        <button class="btn facebook-btn" style="background-color: rgb(0, 110, 236)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0"><path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z"></path></svg></button>
                    </div>
                </div>
            `;
    cardContainer.appendChild(card);

    const callBtn = card.querySelector(".call-btn");
    callBtn.addEventListener("click", () => {
      if (!student.contact) {
        alert("Phone number not available");
        return;
      }
      window.location.href = `tel:${student.contact}`;
    });

    const emergencyBtn = card.querySelector(".emergency-btn");
    emergencyBtn.addEventListener("click", () => {
      if (!student.emergency_contact) {
        alert("Emergency contact not available");
        return;
      }
      window.location.href = `tel:${student.emergency_contact}`;
    });

    const emailBtn = card.querySelector(".email-btn");
    emailBtn.addEventListener("click", () => {
      if (!student.email_address) {
        alert("Email address not available");
        return;
      }
      window.location.href = `mailto:${student.email_address}`;
    });

    const facebookBtn = card.querySelector(".facebook-btn");
    facebookBtn.addEventListener("click", () => {
      if (!student.facebook_profile) {
        alert("Facebook profile not available");
        return;
      }
      window.location.href = student.facebook_profile;
    });
  });
}

renderCards(cardData);

searchBtn.addEventListener("click", () => {
  const searchType = searchSelect.value;
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchType || searchType === "") {
    alert("Please select a search option");
    return;
  }

  if (!searchTerm) {
    renderCards(cardData);
    return;
  }

  let filteredData = [];

  if (searchType === "option1") {
    filteredData = cardData.filter((student) =>
      student.name.toLowerCase().includes(searchTerm),
    );
  } else if (searchType === "option2") {
    filteredData = cardData.filter((student) =>
      student.blood.toLowerCase().includes(searchTerm),
    );
  }

  renderCards(filteredData);
});
