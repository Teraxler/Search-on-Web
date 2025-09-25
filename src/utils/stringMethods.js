function pad(num, length = 2) {
  return String(num).padStart(length, 0);
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent;
}

function parseXml(xml) {
  const parser = new DOMParser();
  return parser.parseFromString(xml, "application/xml");
}

function parseHtml(html) {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

function linkFinder(text) {
  return String(text).match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
}

export { pad, stripHtml, parseXml, parseHtml, linkFinder };
