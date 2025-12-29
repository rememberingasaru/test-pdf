const totalPages = 33; // CHANGE THIS

const pages = [];
for (let i = 1; i <= totalPages; i++) {
  pages.push(`pages/${String(i).padStart(3, "0")}.jpg`);
}

const bookEl = document.getElementById("book");
const pageInfo = document.getElementById("pageInfo");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800,
  size: "stretch",
  showCover: true,
  mobileScrollSupport: true
});

pageFlip.loadFromImages(pages);

function updateInfo() {
  pageInfo.textContent =
    `Page ${pageFlip.getCurrentPageIndex() + 1} / ${pages.length}`;
}

pageFlip.on("flip", updateInfo);
updateInfo();

document.getElementById("prev").onclick = () => pageFlip.flipPrev();
document.getElementById("next").onclick = () => pageFlip.flipNext();
