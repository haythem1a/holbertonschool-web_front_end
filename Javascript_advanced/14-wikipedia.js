// Function to create a paragraph element and append it to the document body
function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

// Function to query Wikipedia and call a callback function with the extract
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();

    // URL for Stack Overflow article on Wikipedia
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);

            // Get the extract from the response
            const extract = Object.values(response.query.pages)[0].extract;

            // Call the callback function with the extract
            callback(extract);
        }
    };

    // Send the request
    xhr.send();
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
