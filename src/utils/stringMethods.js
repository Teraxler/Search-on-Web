function pad(num, length = 2) {
  return String(num).padStart(length, 0);
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerHTML;
}

function parseXml(xml) {
  const parser = new DOMParser();
  return parser.parseFromString(xml, "application/xml");
}

function parseHtml(html) {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

function xml2json(xml) {
  const xmlParsed = parseXml(xml)
  
  const xml2jsonMap = {
    "<title>": `title`,
    "</title>": `,`,
    "<item>": `item`,
    "</item>": `,`,
    // "<title>": `title`,
    // "<title>": `title`,
    // "<title>": `title`,
  }

  // const json = xml.replaceAll(/[<>/]/, xml2jsonMap)
  // console.log("🚀 ~ xml2json ~ json:", json)
console.log(xmlParsed);

  console.log(xmlParsed);
}

export { pad, stripHtml, xml2json ,parseXml, parseHtml};
