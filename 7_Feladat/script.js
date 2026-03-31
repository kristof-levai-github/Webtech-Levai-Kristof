// DOM elemek, amikkel a felhasználó interakcióba lép.
const inputEl = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const resultsEl = document.getElementById("results");

// EKitörli a korábbi tartalmat, és kiírja a hibaüzenetet.
function renderError(message) {
  resultsEl.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  resultsEl.appendChild(p);
}

// A GitHub API válaszából kapott felhasználókat megjeleníti kártyákban.
function renderUsers(users) {
  // Új keresésnél minden előző találat törlődjön.
  resultsEl.innerHTML = "";

  if (!users || users.length === 0) {
    renderError("Nincs találat a megadott felhasználónévre.");
    return;
  }

  users.forEach((u) => {
    // Egy felhasználó egy külön “kártyán” jelenik meg.
    const card = document.createElement("div");
    card.className = "card user-card";

    // Profilkép megjelenítése (avatar_url).
    const img = document.createElement("img");
    img.src = u.avatar_url;
    img.alt = u.login ? u.login + " profilképe" : "Profilkép";
    img.loading = "lazy";

    // Jobb oldali “meta” blokk (név + típus).
    const right = document.createElement("div");

    // Bejelentkezési név.
    const login = document.createElement("div");
    login.className = "user-login";
    login.textContent = u.login ?? "Ismeretlen felhasználó";

    // GitHub “user type” (pl. User/Organization) - ha van.
    const meta = document.createElement("div");
    meta.className = "user-meta";
    meta.textContent = u.type ? "Típus: " + u.type : "";

    right.appendChild(login);
    right.appendChild(meta);

    // Link az adott felhasználó részletes adatlapjára.
    const profileLink = document.createElement("a");
    profileLink.className = "btn btn-primary";
    profileLink.textContent = "Adatlap megnyitása";
    profileLink.href = "user.html?id=" + encodeURIComponent(u.login ?? "");
    right.appendChild(profileLink);

    card.appendChild(img);
    card.appendChild(right);

    resultsEl.appendChild(card);
  });
}

// A beírt felhasználónév alapján keres a GitHubon, majd kirajzolja az eredményeket.
async function searchUsers() {
  // A keresőkifejezés trim-elése, hogy a whitespace ne számítson.
  const query = inputEl.value.trim();

  // Requirement: empty search must show alert().
  if (query === "") {
    // Üres keresés esetén ne maradjon régi találat a képernyőn.
    resultsEl.innerHTML = "";
    alert("A keresett felhasználónév nem lehet üres!");
    inputEl.focus();
    return;
  }

  // Ha nem üres a keresés, akkor megjelenítjük, hogy folyamatban van.
  resultsEl.innerHTML = "";
  const loading = document.createElement("p");
  loading.textContent = "Keresés a GitHubon...";
  resultsEl.appendChild(loading);

  try {
    // GitHub Search Users endpoint.
    const url =
      "https://api.github.com/search/users?q=" +
      encodeURIComponent(query) +
      "&per_page=10";

    // Fetch az API felé.
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    // Ha nem 2xx az eredmény, akkor hibát dobunk.
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    // Válasz JSON formában, innen jönnek a találatok (data.items).
    const data = await res.json();
    renderUsers(data.items);
  } catch (e) {
    // Bármilyen hálózati/parse/HTTP hiba esetén itt kezeljük.
    console.error(e);
    renderError("Hiba történt a keresés során. Próbáld újra később.");
  }
}

// Keresés gombbal.
searchBtn.addEventListener("click", searchUsers);

// Keresés Enter-rel (billentyű lenyomásra).
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchUsers();
  }
});

