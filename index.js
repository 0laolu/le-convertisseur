// creating a functionality for the quantity dropdown
const selectQuantity = document.querySelector('.select-quantity');
const quantityArrowIcon = document.querySelector('.select-quantity .arrow-icon');
const quantityDropdownContainer = document.querySelector('.quantity-dropdown-container');

selectQuantity.onclick = displayQuantity;

function displayQuantity() {
    quantityArrowIcon.classList.toggle('active');
    quantityDropdownContainer.classList.toggle('active');
};

// creating a functionality for the unit dropdown
const selectUnit = document.querySelector('.select-unit');
const unitArrowIcon = document.querySelector('.select-unit .arrow-icon');
const unitDropdownContainer = document.querySelector('.unit-dropdown-container');

selectUnit.onclick = displayUnit;

function displayUnit() {
    unitArrowIcon.classList.toggle('active');
    unitDropdownContainer.classList.toggle('active');
};