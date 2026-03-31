const userProfileEl = document.getElementById("user-profile");

function hasValue(value) {
  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value === "string" && value.trim() === "") {
    return false;
  }
  return true;
}

function renderMessage(message) {
  userProfileEl.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  userProfileEl.appendChild(p);
}

function createField(label, value, isLink = false) {
  const row = document.createElement("div");
  row.className = "profile-row";

  const labelEl = document.createElement("span");
  labelEl.className = "profile-label";
  labelEl.textContent = label + ":";

  const valueEl = document.createElement("span");
  valueEl.className = "profile-value";

  if (isLink) {
    const link = document.createElement("a");
    link.href = value;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = value;
    valueEl.appendChild(link);
  } else {
    valueEl.textContent = String(value);
  }

  row.appendChild(labelEl);
  row.appendChild(valueEl);
  return row;
}

function renderProfile(user) {
  userProfileEl.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "profile-layout";

  if (hasValue(user.avatar_url)) {
    const avatar = document.createElement("img");
    avatar.className = "profile-avatar";
    avatar.src = user.avatar_url;
    avatar.alt = (user.login || "Felhasználó") + " profilképe";
    wrapper.appendChild(avatar);
  }

  const details = document.createElement("div");
  details.className = "profile-details";

  if (hasValue(user.name)) {
    details.appendChild(createField("Név", user.name));
  }
  if (hasValue(user.blog)) {
    details.appendChild(createField("Blog", user.blog, true));
  }
  if (hasValue(user.location)) {
    details.appendChild(createField("Hely", user.location));
  }
  if (hasValue(user.bio)) {
    details.appendChild(createField("Bio", user.bio));
  }
  if (hasValue(user.public_repos)) {
    details.appendChild(createField("Publikus repositoryk", user.public_repos));
  }
  if (hasValue(user.followers)) {
    details.appendChild(createField("Követők", user.followers));
  }

  if (details.children.length === 0) {
    renderMessage("A felhasználóhoz nem érhető el megjeleníthető adat.");
    return;
  }

  wrapper.appendChild(details);
  userProfileEl.appendChild(wrapper);
}

async function loadUserProfile() {
  const params = new URLSearchParams(window.location.search);
  const userId = (params.get("id") || "").trim();

  if (!userId) {
    renderMessage("Hiányzó id query paraméter. Példa: user.html?id=microsoft");
    return;
  }

  renderMessage("Felhasználói adatok betöltése...");

  try {
    const url = "https://api.github.com/users/" + encodeURIComponent(userId);
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const user = await res.json();
    renderProfile(user);
  } catch (error) {
    console.error(error);
    renderMessage("Nem sikerült betölteni a felhasználói adatlapot.");
  }
}

loadUserProfile();
