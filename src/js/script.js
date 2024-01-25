"use strict";

// ELEMENT/S
const pricesEL = document.querySelectorAll("[data-price]");
const toggleBtnEl = document.querySelector(".header__toggle-container");

// PRICES
const annualPrices = ["99.99", "249.99", "399.99"];
const montlyPrices = ["19.99", "24.99", "39.99"];

// FUCNTION/S
function toggleBtn() {
	// -- Add "toggled" class to toggle button
	toggleBtnEl.classList.toggle("toggled");

	// -- Invoke getPrices function
	getPrices();
}

function displayPrices(prices) {
	// -- Loop through each price element and update the price
	pricesEL.forEach((price, i) => {
		price.textContent = prices[i];
	});
}

function getPrices() {
	// -- Get prices based on whether the toggle button is being toggled or not
	const prices = toggleBtnEl.classList.contains("toggled")
		? annualPrices
		: montlyPrices;

	// -- Invoke displayPrices function
	displayPrices(prices);
}

// EVENT-LISTENER/S
// -- If user clicks to toggle button, invoke toggleBtn function
toggleBtnEl.addEventListener("click", toggleBtn);
