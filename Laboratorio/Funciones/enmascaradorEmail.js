function maskEmail(email) {
  const index = email.indexOf("@");

  const name = email.slice(0, index);
  const domain = email.slice(index);

  const firstChar = name[0];
  const lastChar = name[name.length - 1];

  const asterisk = name.length - 2;
  const asterisk2 = "*".repeat(asterisk);

  return firstChar + asterisk2 + lastChar + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));




