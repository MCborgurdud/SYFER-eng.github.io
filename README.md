<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
    background-color: lightsteelblue;
    font-family: Arial, sans-serif;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}
.movie {
    margin: 10px;
    width: 200px;
    height: 300px;
    border: 2px solid black;
    box-shadow: 0 8px 8px 0 black;
    transition: transform 0.3s ease;
}
.Movie:hover {
    transform: scale(1.1);
}
.Movie img {
    width: 182px;
    height: 250px;
    margin: 10px;
}
.Movie h3 {
    font-size: 20px;
    margin: 0px;
    padding: 0px;
    text-align: center;
}
.footer {
    background-color: gray;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0px;
    width: 99vw;
}
.footer a {
    padding: 5px;
    margin: 5px;
    color: white;
    text-decoration: none;
}
.footer a:hover {
    background-color: white;
    color: gray;
}
</style>
<title>Movie Selection</title>
</head>
<body>
<div class="container">
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbSoV8I3Z6AyKtTuvbm3rHKCQs-NwmUTquZxzmfXHzGjOfKkz3ET2nQARBYNpK1Aq01SOhw" alt="https://mega.nz/embed/Mqty0ZwA#FYUNdaURlz2GGweqmXKzj4Pi1q6nkks3VUVQ7lq_KjI">
        <h3>A Silent Voice</h3>
    </div>
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="Movie2.png" alt="Movie 2">
        <h3>Movie 2</h3>
    </div>
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="Movie3.png" alt="Movie 3">
        <h3>Movie 3</h3>
    </div>
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="Movie4.png" alt="Movie 4">
        <h3>Movie 4</h3>
    </div>
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="Movie5.png" alt="Movie 5">
        <h3>Movie 5</h3>
    </div>
    <div class="Movie" style="background-color: white; padding: 10px; margin-right: 10px; margin-top: 10px; margin-left: 10px;">
        <img src="Movie6.png" alt="Movie 6">
        <h3>Movie 6</h3>
    </div>
</div>
<div class="footer">
    <a href="#">Home</a>
    <a href="#">Contact</a>
    <a href="#">About</a>
    <a href="#">Login</a>
</div>
</body>
</html>
