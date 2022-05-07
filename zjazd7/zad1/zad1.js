const sample =
  "this is sample text with  number inside, some postcode 12-123 and phone  number 501-502-503";

const postCode = new RegExp("\\d\\d-\\d\\d\\d");
let postCodeTestResult = postCode.test(sample);
console.log("Czy w stringu jest kod pocztowy? ", postCodeTestResult);

const phoneNumber = new RegExp("\\d{3}[\\s-]?\\d{3}[\\s-]?\\d{3}");
let phoneNumberTestResult = postCode.test(sample);
console.log("Czy w stringu jest numer w telefonu? ", phoneNumberTestResult);

const threeDigitsRegex = new RegExp(`\\d{3}`, "g");
let matches = sample.matchAll(threeDigitsRegex);
for (const match of matches) {
  console.log(
    `Found match: ${match[0]} start at ${match.index} end at ${
      match.index + match[0].length
    }`
  );
}

const twoWhitespacesRegex = new RegExp(`\\s{2}`, "g");
let newString = sample.replaceAll(twoWhitespacesRegex, " ");
console.log(newString);
