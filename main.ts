// Entry for make.fun's "Notes From a Passive-Aggressive Fridge" bounty:
// one note, left on the door by the appliance that sees everything and
// judges quietly. It has watched the whole diet era, including the
// parts that happened at 2 a.m. Running this prints the note only.

/** The fridge's note: the era, the evidence, the questions. */
function fridgeNote(): string {
  const era = "Day 4 of your 'healthy eating' era:";
  const evidence = "the cake is gone, the salad is wilting untouched,";
  const sting = "and I have questions about the 2 a.m. cheese.";
  return `${era} ${evidence} ${sting}`;
}

console.log(fridgeNote());
