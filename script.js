// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() 
{
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button'); // Get references to all the buttons on the page in an array format.

for (const button of buttons) //  Loop through all the buttons 
{
  button.addEventListener('click', createParagraph); // Add a click event listener to each one.
  //   When any button is pressed, the createParagraph() function will be run.
}