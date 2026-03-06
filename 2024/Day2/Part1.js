const { input } = require("./input");

function reactorSafe(input) {
  let saveCount = 0;

  input.forEach((line) => {
    const levels = line.split(" ").map(Number);
    let differ = null;

    for (let i = 0; i < levels.length - 1; i++) {
      const diff = levels[i] - levels[i + 1];
      const sign = Math.sign(diff);

      if (!differ) differ = sign;
      else if (differ !== sign) return;

      const absDiff = Math.abs(diff);
      if (absDiff > 3 || absDiff < 1) return;
    }

    saveCount++;
  });

  return saveCount;
}

console.log(reactorSafe(input));
