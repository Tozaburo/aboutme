h1 {
  text-align: center !important;
  font-size: 10vmin;
  font-weight: 700;
  font-family: "Noto Sans JP";
  color: #fff;
}

body {
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  height: 100vmin;
  min-height: 100vh;
  background-color: #e45a22;
  display: flex;
  align-items: center;
}

.text {
  margin: auto;
}

.button{
  cursor: pointer;
}

.comingsoon{
  cursor: default;
}

.button, .comingsoon {
  font-family: "Noto Sans JP";
  font-size: 2vmin;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  width: 60vmin;
  padding: 1vmin;
  margin:2vmin auto;
  border: 0.75vmin solid;
  border-radius: 1000px;
  display: block;
  transition: color, background-color 0.5s;
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button:hover {
  background-color: #fff;
  border-color: #fff;
  color: #e45a22;
}

.title {
  margin: auto;
}

.button-list {
  margin: auto;
}

.icon a {
  transform: 0 0;
  position: fixed;
  top: 5vmin;
  left: 5vmin;
  font-family: "Noto Sans JP";
  font-size: 10vmin;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
}
