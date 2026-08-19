// Find the calculator form
const form = document.querySelector("form");

// Run this code when the user presses Calculate
form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the numbers entered by the user
    const startingAmount = Number(
        document.querySelector("#startingAmount").value
    );

    const contribution = Number(
        document.querySelector("#contribution").value
    );

    const frequency = Number(
        document.querySelector("#frequency").value
    );

    const annualReturn = Number(
        document.querySelector("#returnRate").value
    );

    const yearsInput = document.querySelector("#years").value;

if (yearsInput === "") {
    alert("Please enter the number of years.");
    return;
}

const years = Number(yearsInput);

if (years <= 0) {
    alert("Please enter a number of years greater than 0.");
    return;
}
if (years <= 0) {
    alert("Please enter a number of years greater than 0.");
    return;
}
    // Convert the annual return into a periodic return
    const periodicReturn = (annualReturn / 100) / frequency;

    // Calculate the total number of periods
    const numberOfPeriods = years * frequency;

    // Calculate the future value of the starting amount
    const startingAmountGrowth =
        startingAmount *
        Math.pow(1 + periodicReturn, numberOfPeriods);

    // Calculate the future value of the recurring contributions
    let contributionGrowth;

if (periodicReturn === 0) {
    contributionGrowth = contribution * numberOfPeriods;
} else {
    contributionGrowth =
        contribution *
        (
            (Math.pow(1 + periodicReturn, numberOfPeriods) - 1)
            / periodicReturn
        );
}

    // Add the two sources of money together
    const futureValue =
        startingAmountGrowth + contributionGrowth;

    // Calculate how much money was contributed
    const totalContributions =
        startingAmount + (contribution * numberOfPeriods);

    // Calculate the estimated investment growth
    const investmentGrowth =
        futureValue - totalContributions;

    // Display the results
    document.querySelector("#futureValue").textContent =
        formatMoney(futureValue);

    document.querySelector("#totalContributions").textContent =
        formatMoney(totalContributions);

    document.querySelector("#investmentGrowth").textContent =
        formatMoney(investmentGrowth);
});


// Format a number as US dollars
function formatMoney(amount) {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}
