# React Tailwind Project Management App

## Project Description

This is a simple todo list application built using React and Tailwind CSS. The app allows users to add/delete Projects to a list and handles empty input fields by displaying a modal. Then you can access the projects one by one and add/delete tasks inside of them. It is styled with Tailwind CSS for responsiveness and includes an interactive UI for managing tasks.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<!-- PROJECT LOGO -->
<br />
<div align="center">
 <a href="https://projectmanagement-ester.netlify.app/">
    <img src="public\logo.png" alt="Logo" height="80">
  </a>
  <h1 align="center">Project Management App</h1>

  <p align="center">
    <a href="https://projectmanagement-ester.netlify.app/">View Demo</a>
  </p>
</div>

## Features

- Creating projects
- Accessing projects
- Add tasks to a specific project
- Modal pop-up when adding an empty project/task
- Responsive design using Tailwind CSS

## Folder Structure

```bash
01-starting-project/
├── dist/                     # Distribution folder for production build
├── node_modules/             # Project dependencies
├── public/                   # Public folder for static assets
├── src/                      # Main source code
│   ├── components/           # Reusable React components
│   ├── assets/               # Static assets (e.g., images, icons)
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global CSS file
│   ├── main.jsx              # Entry point for the application
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # Tailwind and PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration file
├── vite.config.js            # Vite configuration file for bundling
├── .gitignore                # Git ignore file

```

## Technologies Used

- React: A JavaScript library for building user interfaces
- Tailwind CSS: A utility-first CSS framework for styling the app
- Vite: A fast build tool for development and production
- HTML5
- CSS3
- JavaScript (ES6+)

## How to Use

Add a project by entering text into the input field and clicking "Add Project."
If any input field is empty, a modal will pop up asking you to enter a project.
The list of project will appear in the sidebar. Same thing with Tasks inside a project also.
