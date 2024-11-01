<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movie Player</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      overflow: hidden;
    }

    .player {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .controls {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 20px;
      font-size: 24px;
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;
    }

    .controls.show {
      display: block;
    }

    .control-btn {
      cursor: pointer;
      margin: 0 20px;
    }

    video {
      max-width: 100vw;
      max-height: 100vh;
    }

    .dropbtn {
      font-size: 24px;
      border: none;
      outline: none;
      background-color: transparent;
      color: white;
      padding: 14px 16px;
      border: none;
      cursor: pointer;
      opacity: 0.8;
    }

    .dropbtn:hover, .dropbtn:focus {
      opacity: 1;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    .show {
      display: block;
    }
  </style>

  <script>
    let player = document.getElementById("player");
    let controlButton = document.getElementById("controlButton");
    let menuButton = document.querySelector(".dropbtn");
    let menu = document.querySelector(".dropdown-content");

    // Function to toggle the controls
    function toggleControls() {
      player.classList.toggle("show");
      if (player.style.display === "none") {
        player.style.display = "block";
      } else {
        player.style.display = "none";
      }
    }

    // Function to toggle the menu
    function toggleMenu() {
      menu.classList.toggle("show");
    }

    // Event listener for control button
    controlButton.addEventListener("click", toggleControls);

    // Event listener for menu button
    menuButton.addEventListener("click", toggleMenu);

    // Add an event listener to the window to hide the menu when clicked outside
    window.addEventListener("click", (event) => {
      if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
        menu.classList.remove("show");
      }
   
