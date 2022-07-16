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



// getting the values for the data attribute set in the html
const dataEntries = document.querySelectorAll('[data-id]'); // returns a nodeList of the label elements which tha data attribute was applied to

// looping through each nodeList and using dataNumber to represent each label element
dataEntries.forEach(dataNumber=> {

    // getting the values for the data-id attribute and storing them in a variable
    let selectedIndex = dataNumber.dataset.id;

    // using the values of selectedIndex to search the lookup function based on a condition
    dataNumber.addEventListener('click', function(event) {
        // closing the dropdown whenever a quantity (dataNumber) is clicked
        quantityArrowIcon.classList.remove('active');
        quantityDropdownContainer.classList.remove('active');

        // setting the quantity-select text to any quantity selected from the dropdown
        let quantitySelectText = document.querySelector('.select-quantity span');
        quantitySelectText.textContent = event.target.textContent;

    });
});
