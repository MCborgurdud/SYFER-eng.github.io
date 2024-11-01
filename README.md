<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Selection</title>
    <style>
        body {
            background-color: #f1f1f1;
            font-family: 'Roboto', sans-serif;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
        }
        
        .column {
            width: 250px;
            padding: 10px;
            text-align: center;
        }
        
        .movieCard {
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }
        
        .MovieCard:hover {
            transform: scale(1.1);
            box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
        }
        
        .image-container {
            overflow: hidden;
            border-radius: 5px;
        }
        
        img {
            width: 100px;
            height: auto;
            margin: 0 auto;
            transition: transform 0.3s ease;
        }
        
        .MovieCard:hover img {
            transform: scale(1.05);
        }
        
        .menu {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            font-size: 20px;
            position: fixed;
            width: 100px;
            top: 0;
            left: 0;
            z-index: 999;
        }
        
        .menu a {
            color: #fff;
            text-decoration: none;
            margin: 0 5px;
        }
        
        .menu a:hover {
            color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>
    
    <div class="container">
        <div class="column">
            <div class="MovieCard" style="background-image: url('movie1.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie3.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie4.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <!-- Add up to 40 more MovieCard elements for all the options -->
        </div>
        
        <div class="column">
            <div class="MovieCard" style="background-image: url('Movie5.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie6.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie7.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <div class="MovieCard" style="background-image: url('Movie8.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
            <!-- Add up to 40 more MovieCard elements for all the options -->
        </div>
        
        <!-- Repeat the above column structure for up to 10 columns -->
    </div>
</body>
</html>
