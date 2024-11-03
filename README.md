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
            width: 150pxpx;
            height: 300px;
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
        <a href="Episodes.html">Episodes</a>
        <a href="TV-Shows.html.html">TV Shows</a>
        <a href="https://discord.gg/JMfgMwgBxe">Discord Sever</a>
        <a href="Test.html">Test</a>


    </div>
    <div class="container">
        <div class="MovieCard">
            <a href="A-Silent-Voice.html" target="_blank">
                <img src="https://i.redd.it/4qvzjk0la1p91.jpg" alt="Movie 1">
                <div class="MovieInfo">
                    <h2>A Silent Voice</h2>
                </div>
            </a>
        </div>
        <div class="MovieCard">
            <a href="A-X-L.html" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/AXL_Official_Poster_2018.png" alt="A-X-L.html">
                <div class="MovieInfo">
                    <h2>A-X-L</h2>
                </div>
            </a>
        </div>
        <!-- Add more MovieCard div elements for each movie -->
    </div>
</body>
</html>
