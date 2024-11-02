<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Selection</title>
    <style>
        body {
            background-color: lightTeal;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 20px;
        }
        .movieCard {
            width: 200px;
            height: 300px;
            margin: 10px;
            background-color: white;
            border: 1px solid black;
            box-shadow: 5px 5px 5px grey;
            transition: transform 0.3s ease;
        }
        .MovieCard:hover {
            transform: scale(1.1);
        }
        .MovieCard a {
            text-decoration: none;
        }
        .MovieCard img {
            width: 100px;
            height: 150px;
            margin: 0 auto;
            display: block;
        }
        .MovieInfo {
            padding: 10px;
            text-align: center;
        }
        .Menu {
            background-color: grey;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            margin-top: 20px;
        }
        .Menu a {
            color: white;
            text-decoration: none;
            padding: 10px;
            margin: 0 10px;
        }
    </style>
</head>
<body>
    <div class="Menu">
        <a href="https://syfer-eng.github.io/">Movies</a>
        <a href="TV-Shows.html">TV Shows</a>
        <a href="https://discord.gg/JMfgMwgBxe">Discord Sever</a>


    </div>
    <div class="container">
        <div class="MovieCard">
            <a href="URL_to_movie_1" target="_blank">
                <img src="movie_1_image.png" alt="Movie 1">
                <div class="MovieInfo">
                    <h2>Movie 1</h2>
                    <p>Description of Movie 1</p>
                </div>
            </a>
        </div>
        <div class="MovieCard">
            <a href="URL_to_Movie_2" target="_blank">
                <img src="Movie_2_image.png" alt="Movie 2">
                <div class="MovieInfo">
                    <h2>Movie 2</h2>
                    <p>Description of Movie 2</p>
                </div>
            </a>
        </div>
        <!-- Add more MovieCard div elements for each movie -->
    </div>
</body>
</html>
