function numberGenerator(start, end) {
  let list = [];

  for (let i = start; i < end; i++) {
    list.push(i);
  }

  return list;
}

export { numberGenerator };
