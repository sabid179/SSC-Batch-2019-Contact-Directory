const cardData = [
  {
    name: "Md. Rakibul Islam Sabid",
    roll: "07",
    blood: "B+(ve)",
    image: "images/sparse_brainer.jpg",
    contact: "01867428503",
    emergency_contact: "01724452874",
    email_address: "msabid2310179@bscse.uiu.ac.bd",
    facebook_profile: "http://www.facebook.com/sparse_brainer",
  },
  {
    name: "Md Sahed Songram",
    roll: "32",
    blood: "A+(ve)",
    image: "images/sahed.jpg",
    contact: "01835658576",
    emergency_contact: "01718796010",
    email_address: "",
    facebook_profile: "https://www.facebook.com/pronoy.shikdar.9",
  },
  {
    name: "Labib sikder",
    roll: "10",
    blood: "A+(ve)",
    image: "images/labib.jpg",
    contact: "+3584578753822",
    emergency_contact: "",
    email_address: "labibsikder121292fi1@gmail.com",
    facebook_profile: "https://www.facebook.com/share/1L9WgDbtyA/",
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
                    <img src="${student.image}" alt="" class="dp" />
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
                        <button class="btn" style="background-color: rgb(4, 123, 0)" onclick="window.location.href='tel:${student.contact}'">Call Now</button>
                        <button class="btn" style="background-color: rgb(123, 4, 0)" onclick="window.location.href='tel:${student.emergency_contact}'">Emergency Contact</button>
                    </div>
                    <div class="btn-container-inside">
                        <button class="btn" style="background-color: rgb(0, 102, 123)" onclick="window.location.href='mailto:${student.email_address}'">Send Email</button>
                        <button class="btn" style="background-color: rgb(0, 110, 236)" onclick="window.location.href='${student.facebook_profile}'">Facebook Profile</button>
                    </div>
                </div>
            `;
    cardContainer.appendChild(card);
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
