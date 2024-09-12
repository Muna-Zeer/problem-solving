// Strand1 = ["A", "G", "T", "C"];
// Strand2 = ["T", "C", "A", "G"][
//   (["A", "T"], ["G", "C"], ["T", "A"], ["C", "G"])
// ];

const mergedDNAHelices = (strand1, strand2) => {

    //Check of both DNA strands the same length
  if (strand1.length !== strand2.length) {
    console.log("Both DNA strands must be the same length");
  }

  const mergedStrand = [];
  const validPairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  for (let i = 0; i < strand1.length; i++) {
    const base1 = strand1[i];
    console.log("base1",base1);

    const base2 = strand2[i];
    console.log("base2",base2);

    //Validate if the pair is correct
    if (validPairs[base1] !== base2) {
      console.log(`Invalid DNA base pair at position ${i}: ${base1}-${base2} `);
    }

    //Merge the base pair
    mergedStrand.push([base1, base2]);
  }
  return mergedStrand;
};
const strand1 = ['A', 'G', 'T', 'C'];
const strand2 = ['T', 'C', 'A', 'G'];
console.log("DNS Strand pairs",mergedDNAHelices(strand1,strand2));