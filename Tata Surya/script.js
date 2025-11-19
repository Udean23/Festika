const params = new URLSearchParams(window.location.search);
const planetKey = params.keys().next().value || 'jupiter';

const data = planetData[planetKey];

document.getElementById("planet-name").textContent = data.name;
document.getElementById("planet-type").textContent = data.type;
document.getElementById("planet-desc").textContent = data.description;
document.getElementById("planet-url").href = data.url;

const planetElement = document.querySelector(".planet");
planetElement.style.setProperty("--planet-bg", `url(${data.image})`);

const infoList = [
    {
        title: "ROTASI & ORBIT",
        value: `${data.rotation}<br>${data.orbital}`
    },
    {
        title: "UKURAN & BERAT",
        value: `${data.size}<br>${data.mass}`
    },
    {
        title: "JARAK",
        value: data.distance
    },
    {
        title: "SUHU",
        value: data.temp
    },
    {
        title: "BULAN",
        value: data.moons
    },
    {
        title: "FAKTA PLANET",
        value: `
            <ul style="margin-top:8px;list-style:disc;padding-left:20px;">
              ${data.facts.map(f => `<li>${f}</li>`).join("")}
            </ul>
          `
    }
];

let page = 0;
const pageSize = 4;

function renderInfo(direction = 0) {
    const container = document.getElementById("info-container");
    container.style.opacity = "0";
    container.style.transform = `translateX(${direction === 1 ? "-40px" : direction === -1 ? "40px" : "0"})`;

    setTimeout(() => {
        container.innerHTML = "";
        const start = page * pageSize;
        const end = start + pageSize;
        const sliced = infoList.slice(start, end);

        sliced.forEach(item => {
            const block = document.createElement("div");
            block.className = "mt-2.5";
            block.innerHTML = `
              <div class="text-[20px]" style="font-family:'Irish Grover',cursive;">
                ${item.title}
              </div>
              <div class="text-[15px]">${item.value}</div>
            `;
            container.appendChild(block);
        });

        container.style.transition = "0.4s";
        container.style.opacity = "1";
        container.style.transform = "translateX(0)";
    }, 200);
}

document.getElementById("prev-btn").onclick = () => {
    if (page > 0) {
        page--;
        renderInfo(-1);
    }
};

document.getElementById("next-btn").onclick = () => {
    if ((page + 1) * pageSize < infoList.length) {
        page++;
        renderInfo(1);
    }
};

document.getElementById("back-btn").onclick = () => {
    window.history.back();
};

renderInfo();