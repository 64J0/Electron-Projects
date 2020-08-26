# Lo-Fi Radios

This project has been made with:

* Electron JS;
* React JS (create-react-app);
* Styled-components;

It intends to create a window/program to play some lo-fi radios in youtube by default with one click of the mouse. 

The architecture I've chosen to use in this project has a front-end part that is a React page hosted in Netlify and the desktop application part that is a program that calls this front-end and renders it to the user.

To execute this project just execute those commands in the prompt:

```bash
  # Move yourself to a folder to place this repository files
  cd githubFiles/

  # Clone the code into your computer
  git init
  git clone ... # without a repository

  # Go to the lofi-project folder downloaded
  cd lofi-project
  cd react-app

  # Execute the React server
  npm start

  # ...
  # Open another prompt window
  # Move to the folder with the files
  cd lofi-project
  cd electron-app

  # Execute the Electron project
  npm start
```

---
2020, Vinícius Gajo Marques Oliveira