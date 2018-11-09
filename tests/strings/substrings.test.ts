import "../../src/strings/substrings";
test("Simple strings", () => {
  let str1: String = "giveName";
  let str2 = "superNameNam";
  expect(str1.substringsIn(str2)).toEqual([
    "e",
    "eN",
    "eNa",
    "eNam",
    "N",
    "Na",
    "Nam",
    "Name",
    "a",
    "am",
    "ame",
    "m",
    "me"
  ]);
});
