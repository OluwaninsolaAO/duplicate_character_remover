# Duplicate Character Remover

This is a ReactJS application that allows the user to input a string and removes all the duplicate characters in it.

## Getting Started

To run the project locally, please follow these steps:

- Clone the repository to your local machine.
  Open the terminal and navigate to the project's root directory.
- Run the command `npm install` to install all the dependencies.
- Run the command `npm start` to start the application.
- The application will open in your browser at `http://localhost:3000`.

## Screens

The application has two screens:

### Screen 1

This is the first screen that the user will see. It has an input field where the user can enter a string and a submit button.

If the input field is empty or has only space characters, the user will be shown an alert asking them to provide a non-empty value. In this scenario, the user will not be redirected to screen 2.

### Screen 2

This is the second screen that the user will see provided that all conditions from screen 1 are met. It displays the original string and each character of the string as a card on the UI.

Each card has the character and a delete icon. Clicking on the delete icon deletes all duplicate instances of the chosen character in the string. Only the clicked instance of the character remains on the screen.

Cards for the same characters have the same background color.

If there are no more characters with greater than 1 appearance in the string, a success header is displayed with the original string and the new resultant string.

A back button is provided to go back to screen 1. If the user goes back to screen 1, the input field is cleared/empty.
