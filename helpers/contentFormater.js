let formatParts = (input) => {
  const parts = input.split("\n");

  const formatted = parts.map((part) => {
    const [key, ...values] = part.split(":");
    const trimmedKey = key.trim();
    const trimmedValue = values.join(":").trim();
    const spaceNum = 30 - trimmedKey.length;

    let spaceCharacter = "";
    for (let i = 0; i < spaceNum; i++) {
      spaceCharacter += " ";
    }

    return `${trimmedKey}${spaceCharacter}: ${trimmedValue}`;
  });

  return formatted;
};

module.exports = formatParts;
