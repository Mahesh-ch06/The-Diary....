/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
    event.preventDefault();
    const heading = document.createElement(`h2`);
    heading.className = `heading-results`;
    heading.textContent = `Journal Entries`;
    entryResultRow.insertAdjacentElement(`beforebegin`, heading)

    const entryDiv = document.createElement(`div`);
    entryDiv.className = `single-entry-div`;
    entryResultRow.appendChild(entryDiv);

    const entryHeading = document.createElement(`h3`);
    entryHeading.className = `single-entry-heading`;
    entryHeading.textContent = getEntryTitle[0].value;
    entryDiv.appendChild(entryHeading);

    const entryDate = document.createElement(`p`);
    entryDate.className = `single-entry-date`;
    entryDiv.appendChild(entryDate);

    const entryParagraph = document.createElement(`p`);
    entryParagraph.className = `single-entry-text`;
    entryParagraph.textContent = getEntryText[0].value;
    entryDiv.appendChild(entryParagraph);
    getEntryText[0].value = ``;

    // Function to update date and time when the entry was submitted
    function updateDateTime() {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.toLocaleString('default', { month: 'long' });
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        entryDate.textContent = `Submitted: ${month} ${year}, ${hours}:${minutes}:${seconds}`;
    }

    // Call the updateDateTime function
    updateDateTime();
}

entryForm.addEventListener(`submit`, addEntryToDom);
