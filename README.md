<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background-color: white;
        }

        .movieContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
        }

        .MovieCard {
            margin: 10px;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid grey;
            width: 180px;
            height: 250px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
        }

        .MovieCard:hover {
            transform: scale(1.05);
        }

        .MovieImage {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .Menu {
            background-color: grey;
            display: flex;
            justify-content: center;
            padding: 10px;
            margin-top: 20px;
        }

        .Menu a {
            color: white;
            padding: 10px;
            margin: 0px 10px;
            text-decoration: none;
            font-size: 18px;
        }

        .Menu a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="Menu">
        <a href="#">Home</a>
        <a href="TV-Shows.html">TV Shows</a>
        <a href="https://discord.gg/JMfgMwgBxe">Discord sever</a>

    </div>
    <div class="MovieContainer">
        <div class="MovieCard" style="background-image: url('movie1.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie2.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie3.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie4.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie5.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie6.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie7.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie8.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie9.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie10.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie11.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie12.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie13.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie14.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie15.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie16.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie17.jpg');"></div>
        <div class="MovieCard" style="background-image: url('Movie18.jpg');"></div>
    </div>
</body>
</html>
