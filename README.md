# Test Task for Evernetica

## Demo

[DEMO LINK](https://yanaevagonchar.github.io/test_task_evernetica/)

## Description

A simple React application for getting and displaying a list of countries.

At the beginning of the page there is a search field and a search reset button. Below is a list of country cards, which is formed when the you start entering text in the search field (the list is updated after changing the search field). Card order can be changed by dragging.

On the card, when hovered over, two active elements appear: a checkbox and a delete button. If you click on the checkbox, then this card will become linked and will not be deleted when the search criteria (reset) is changed. After changing the search criteria, the linked countries remain at the top of the list and are not deleted. When you click on the delete button, the card is removed from the list.

Clicking on the card will take you to the country details page.

## Technology Used:

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used to build the frontend logic.
- **HTML**: The standard markup language for creating Web pages.
- **Redux**: An open source JavaScript library for managing application state.
- **Material UI**: An open-source React component library that implements Google's Material Design. 
- **Styled Components**: A React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components
- **React Drag and Drop** & **React Beautiful DnD**: Sets of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled.

## Project Setup
To run this project on your local machine, you need:

1. Use 14 version of node.js:
```
$ nvm use 14
```
2. Clone the repository to your local machine, open terminal (GitBash for Windows users) and clone repo with command bellow:
```
$ git clone https://github.com/YanaEvaGonchar/test_task_evernetica.git
```
4. Set up project and install necessary packages in the code-editor you use:
```
$ npm install
```
5. Open the project in browser:
```
$ npm start
```