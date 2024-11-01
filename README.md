<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Movie Selection</title>
<style>
    body {
        background-color: red;
    }
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .movieCard {
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        box-shadow: 5px 5px 5px gray;
        width: 200px;
        height: 300px;
        text-align: center;
        transition: transform 0.3s ease-in-out;
    }
    
    .MovieCard:hover {
        transform: scale(1.1);
    }
    
    .MovieCard img {
        width: 100px;
        height: 150px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    .MovieInfo {
        font-size: 18px;
        text-align: center;
        margin: 0px auto;
        width: 100px;
        text-decoration: none;
        color: white;
        background-color: black;
        padding: 5px 10px;
        border-radius: 5px;
        display: block;
        margin-top: auto;
        margin-bottom: 10px;
        cursor: pointer;
    }
    
    .MovieInfo:hover {
        background-color: gray;
    }
    
    .menu {
        display: flex;
        justify-content: space-between;
        background-color: gray;
        padding: 10px;
        margin-bottom: 20px;
    }
    
    .menu a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding: 10px;
        margin: 0px 10px;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
    }
    
    .menu a:hover {
        background-color: black;
        color: gray;
    }
</style>
</head>
<body>
<div class="container">
    <div class="MovieCard">
        <img src="movie1.png" alt="Movie 1">
        <div class="MovieInfo">Movie 1</div>
    </div>
    <div class="MovieCard">
        <img src="Movie2.png" alt="Movie 2">
        <div class="MovieInfo">Movie 2</div>
    </div>
    <div class="MovieCard">
        <img src="Movie3.png" alt="Movie 3">
        <div class="MovieInfo">Movie 3</div>
    </div>
    <div class="MovieCard">
        <img src="Movie4.png" alt="Movie 4">
        <div class="MovieInfo">Movie 4</div>
    </div>
    <!-- Add more MovieCard elements as needed -->
</div>

<div class="menu" style="background-color: red; color: gray; text-align: center; padding: 10px 0px;">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">TV Shows</a>
    <a href="#">Favorites</a>
    <a href="#">Settings</a>
</div>
</body>
</html>
