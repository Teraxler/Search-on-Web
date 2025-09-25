function shuffleArray(arr, limit = null) {
  let randomIndex = null,
    array = [...arr];

  for (let i = array.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  if (limit) return array.slice(0, limit);

  return array;
}

function paginateItems(list, currentPage, limit) {
  const end = currentPage * limit;
  const start = end - limit;

  return list.slice(start, end);
}

export { shuffleArray, paginateItems };
