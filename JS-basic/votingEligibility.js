

let age = 20;
let isCitizen = true;
let isRegistered = true;

// Check voting eligibility
if (age >= 18 && isCitizen && isRegistered) {
    console.log("You are eligible to vote.");
}
else if (age >= 18 && !isCitizen) {
    console.log("You are not eligible due to citizenship status.");
}
else if (age >= 18 && isCitizen && !isRegistered) {
    console.log("You are not eligible due to registration status.");
}
else {
    console.log("You are not eligible to vote.");
}