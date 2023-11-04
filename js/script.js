function popup(i) {
  overlay.className = "show";
  pop.className = "show";
  big_img.src = "img/" + i + ".jpg";
}

function closepop() {
  overlay.className = "hide";
  pop.className = "hide";
}

function create_gallery(image, title, des, price) {
  it = document.createElement("div");
  it.className = "items hide";

  im = document.createElement("img");
  im.src = "img/" + image;

  mas = document.createElement("div");
  mas.className = "mask";

  h = document.createElement("h2");
  h.innerHTML = title;

  par = document.createElement("p");
  par.innerHTML = des;

  sp = document.createElement("span");
  sp.innerHTML = price;

  anc = document.createElement("a");
  anc.innerHTML = "ادامه";
  anc.href = "#";

  mas.appendChild(h);
  mas.appendChild(par);
  mas.appendChild(sp);
  mas.appendChild(anc);

  it.appendChild(im);
  it.appendChild(mas);

  return it;
}

cols = document.querySelectorAll("#all > .sut");

function demas(i) {
  p1 = (i % 16) + 1 + ".jpg";
  p2 = "آیتم " + (i + 1);
  p3 = "توضیحات " + (i + 1);
  p4 = Math.round(Math.random() * 10000) + "ریال";

  el = create_gallery(p1, p2, p3, p4);

  el.className = "items show";

  el.onclick = function () {
    popup((i % 16) + 1);
  };

  cols[i % 4].appendChild(el);
}

for (i = 0; i < 30; i++) {
  setTimeout("demas(" + i + ")", 300 * i);
}
