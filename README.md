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
        
        <div class="MovieCard">
            <a href="Blue-Beetle.html" target="_blank">
                <img src="https://m.media-amazon.com/images/M/MV5BYzllNjdjODctNGMwMC00MWYzLTgwMDgtNmVkMDJiNGM2YjI3XkEyXkFqcGc@._V1_.jpg">
                <div class="MovieInfo">
                    <h2>Blue Beetle</h2>
                </div>
            </a>
        </div>

        <div class="MovieCard">
            <a href="AnimePahe-Hello-World.html" target="_blank">
                <img src="https://resizing.flixster.com/a0Gi3J8NO2rET6RuwlN8vrLTkWs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18010758_v_v8_aa.jpg">
                <div class="MovieInfo">
                    <h2>AnimePahe Hello World</h2>
                </div>
            </a>
        </div>

        <div class="MovieCard">
            <a href="Bad-Boys-Ride-or-Die.html" target="_blank">
                <img src="https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg">
                <div class="MovieInfo">
                    <h2>Bad Boys Ride or Die</h2>
                </div>
            </a>
        </div>
        <!-- Add more MovieCard div elements for each movie -->
    </div>
</body>
</html>
