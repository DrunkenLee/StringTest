const templateSpliter = (string, limitIndex, pageIndex) =>
  string
    .split("\n\n", limitIndex)
    .slice(pageIndex > 1 ? pageIndex - 1 : 0, pageIndex)
    .join("");

module.exports = templateSpliter;
