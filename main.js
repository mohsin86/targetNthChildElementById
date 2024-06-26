// suppoese headline_option1 is an parent and there is multiple em child Element inside of that ids
  // @param Id, Element, position
 var emElmntsOpt1 =  getNthElementByIdIfExists('headline','em',2);
    if(emElmntsOpt1!=null){
        emElmntsOpt1.classList.add('secendElm');
    }

// Return Targeted Elements or null
function getNthElementByIdIfExists(parentId,childElm,nThPosition) {
    // Select the parent element by its ID
    var parentElement = document.getElementById(parentId);
    // Check if the parent element exists
    if (parentElement) {
        // Get all <em> elements inside the parent element
        var emElements = parentElement.getElementsByTagName(childElm);
        // Check if there are at least two <em> elements
        if (emElements.length >= nThPosition+1) {
            // Access the second <nTh> element (index 1)
            var nthElement = emElements[nThPosition];

            // Return the second <em> element
            return nthElement;
        } else {
            // If there are not enough <em> elements, return null
            return null;
        }
    }
}
