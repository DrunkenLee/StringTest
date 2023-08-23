let formatParts = (input, spaceNum) => {
  const parts = input.split("\n");

  const formatted = parts.map((part) => {
    if (!part.includes(":")) {
      return part;
    }

    const [key, ...values] = part.split(":");
    const trimmedKey = key.trim();
    const trimmedValue = values.join(":").trim();
    spaceNum -= trimmedKey.length;

    let spaceCharacter = "";
    for (let i = 0; i < spaceNum; i++) {
      spaceCharacter += " ";
    }

    return `${trimmedKey}${spaceCharacter}: ${trimmedValue}`;
  });

  return formatted.join("\n\n");
};

module.exports = formatParts;
