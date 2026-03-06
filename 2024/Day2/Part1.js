const { input } = require("./input");

function reactorSafe(input) {
  let saveCount = 0;

  input.forEach((line) => {
    const lineArray = line.split(" ").map(Number);
    let differ = null;

    for (let i = 0; i < lineArray.length - 1; i++) {
      const diff = lineArray[i] - lineArray[i + 1];
      const sign = Math.sign(diff);

      if (!differ) differ = sign;
      else if (!sign) return;
      else if (differ !== sign) return;

      if ((diff > 3) | (diff === 0) | (diff < -3)) return;
    }

    saveCount++;
  });

  return saveCount;
}

console.log(reactorSafe(input));
