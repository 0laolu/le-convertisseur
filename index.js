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

// creating a lookup which the value of the object will be accessed based on if the property is the same as the quantity clicked on
const quantityLookup = [
    {
        0: ['square-meter', 'square-kilometer', 'square-millimeter', 'square-feet']
    },
    {
        1: ['joule', 'kilojoule', 'watt-hour', 'kilowatt-hour']
    },
    {
        2: ['meter', 'centimeter', 'millimeter', 'feet']
    }
];

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

        // setting the select-unit text to any unit quantity from the dropdown
        let unitSelectText = document.querySelector('.select-unit span');
        unitSelectText.textContent = `Select a Unit for ${event.target.textContent}`;

        // creating a function that searches the quantityLookup array and performs an action based on a condition
        function lookupFunc() {
            let arrayFromLookup;
            for(let i = 0; i < quantityLookup.length; i++) {        // loops through the array of quantityLookup. Then loops through each object in the array
                for(let objectProp in quantityLookup[i]) {          // objectProp is 0, 1, 2... in the quantityLookup Array
                    if(selectedIndex == objectProp) {
                        arrayFromLookup = quantityLookup[i][objectProp];
                    };          // end of the if statement
                };           // end of the object loop
            };            // end of the array loop
            
    // returns an array of units object value based on any quantity clicked on, which matches the property in quantityLookup
            return arrayFromLookup;  
        };   // end of the lookupFunc
        lookupFunc();

        // storing the array of units object value in a variable, valuesInArray, and passed as an argument in dropdownSetup 
        let valuesInArray = lookupFunc();

    // creating a function that gets the values in the valuesInArray var and assigns them to a dropdown template
        function dropdownSetup(unitsInArray) {  // unitsInArray serves as a parameter to valuesInArray when called with the func as an argument
            let arrayOfDropdownList = [];
            let dropdownTemplate;

    // looping through the array of units object value stored in the lookup
            for(let j = 0; j < unitsInArray.length; j++) {
    // creating the dropdown list parent element and storing it in a variable, dropdownTemplate
                dropdownTemplate = `<div class="unit-dropdown-list">    
                                            <input type="radio" class="radio">
                                            <label data-id="6">${unitsInArray[j]}</label>
                                    </div>`;  

    // pushing each dropdown list parent element to an empty array of arrayOfDropdownList                                    
                arrayOfDropdownList.push(dropdownTemplate);
            };  // end of the for loop 
            
    // appending the array of dropdown list parent and children element to the unit dropdown container
            return unitDropdownContainer.innerHTML = arrayOfDropdownList.join('');
        };    // end of the dropdownSetup function
        dropdownSetup(valuesInArray);
    });
});
