"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _showReviewTotal = showReviewTotal;
export { _showReviewTotal as showReviewTotal };
const _populateUser = populateUser;
export { _populateUser as populateUser };
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
function showReviewTotal(value, reviewer, isLoyalty) {
	var iconDisplay = isLoyalty ? "⭐" : "";
	reviewTotalDisplay.innerHTML =
		"review total " +
		value.toString() +
		"| last reviewed by " +
		reviewer +
		" " +
		iconDisplay;
}
function populateUser(isReturning, userName) {
	if (isReturning == true) {
		returningUserDisplay.innerHTML = "back";
	}
	userNameDisplay.innerHTML = userName;
}
