fetch('feed.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    const newsList = document.getElementById("news-list");
    items.forEach(el => {
      const title = el.querySelector("title").textContent;
      const link = el.querySelector("link").textContent;
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
      newsList.appendChild(li);
    });
  });
