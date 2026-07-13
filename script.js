// SEARCH PAGE FUNCTION
function normalizeStoreNumber(value) {
  return value.toString().trim().replace(/^0+/, "");
}

function handleStoreInput(value) {
  const input = document.getElementById("storeInput");
  const numericValue = value.replace(/\D/g, "");
  input.value = numericValue;
}

function goToStore() {
  const input = document.getElementById("storeInput");
  const storeNumber = normalizeStoreNumber(input.value);
  input.value = storeNumber;
  window.location.href = `store.html?store=${storeNumber}`;
}

// STORE PAGE LOGIC
const params = new URLSearchParams(window.location.search);
const store = params.get("store");
const title = document.getElementById("storeTitle");
const image = document.getElementById("storeImage");
const message = document.getElementById("storeMessage");

if (store) {
  const imageCode = storeMap[store];

  if (imageCode) {
    title.textContent = `Store ${store}`;
    image.src = `images/${imageCode}.png`;
    image.style.display = "block";
    message.style.display = "none";
  } else {
    title.textContent = "Store Not Found";
    image.style.display = "none";
    message.textContent = `We couldn't find store ${store}. Please try another store number.`;
    message.style.display = "block";
  }
} else {
  title.textContent = "Store Finder";
  image.style.display = "none";
  message.textContent = "Please enter a store number to view details.";
  message.style.display = "block";
}

function goBack() {
 window.location.href = "index.html";
}
