const items = [];
const itemsList = document.querySelector(".items");

document.querySelector("form#addItem").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = new FormData(e.target);
  if (!input.get("item")) return;
  const item = input.get("item").trim();
  if (items.includes(item)) {
    alert("duplicate item");
    return;
  }
  items.push(item);
  itemsList.append(
    Object.assign(document.createElement("li"), {
      textContent: item
    })
  );
});
