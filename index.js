function competitiveFundMessage(response) {
  if ((response = "Yes")) {
    let competitionChoiceConfirmation = document.querySelector(
      "#competitive-fund-confirmation"
    );
    competitionChoiceConfirmation.innerHTML = "competitive fund.";
  } else {
    alert(
      "Please do not go any further. This page is for setting up competitive funds only at the moment..."
    );
  }
}

function handleFundTypeSubmit(event) {
  event.preventDefault();
  competitiveFundMessage();
}

let competitiveFundButton = document.querySelector("#competitive-fund-button");

competitiveFundButton.addEventListener("click", handleFundTypeSubmit);

let fundDeliveryOption = document.querySelector("#delivery-method");

function displayDeliveryMethodChoice(response) {
  let deliveryMethod = document.querySelector("#delivery-method");
  let deliveryMethodChoice = document.querySelector(
    "#delivery-method-confirmation"
  );
  let eligibleApplicants = document.querySelector(
    "#eligible-applicants-confirmation"
  );
  let applicationAboutYou = document.querySelector("#about-you");
  let applicationAboutProject = document.querySelector("#about-project");

  if ((response = "direct award")) {
    deliveryMethodChoice.innerHTML = "direct award.";
    eligibleApplicants.innerHTML =
      "Applicants can include: Local authorities, charities and businesses";
    applicationAboutYou.innerHTML = "About you and your organisation";
    applicationAboutProject.innerHTML = "About your project";
  }
}

function handleDeliveryMethodSubmit(event) {
  event.preventDefault();
  displayDeliveryMethodChoice();
}

let fundDeliveryMethodButton = document.querySelector(
  "#delivery-method-button"
);
fundDeliveryMethodButton.addEventListener("click", handleDeliveryMethodSubmit);
