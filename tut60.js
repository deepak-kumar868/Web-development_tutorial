// console.log("Hello world");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  //   res.end('Hello World ,This is Deepak kumar');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            border: rgb(45, 6, 95) 3px solid;
            width: 130px;
            height:140px;
            margin: 4px;
            display: inline-block;
        }
        .container{
            border: solid green 3px;
            height: 1000px;
        }
        #box3{
            /* position: relative; */
            /* position: absolute; */
            /* position: fixed; */
            position:sticky;
            top: 34px;
            left: 120px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box" id="box1">1</div>
        <div class="box" id="box2">2</div>
        <div class="box" id="box3">3</div>
        <div class="box" id="box4">4</div>
    </div>
    <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae repellat nobis molestiae enim nemo repellendus. Veritatis, magni! Nemo libero eius et aspernatur sunt sint ea recusandae, architecto quaerat, officiis aperiam sit similique impedit quas vel commodi aliquid voluptatum ad. Deserunt, consequuntur aut. Non eos quo tempore, veritatis ullam inventore necessitatibus neque? Mollitia repellat magni temporibus reprehenderit exercitationem dolorum maiores laborum laudantium consequatur ipsa, illum esse sit assumenda iste quos praesentium ratione accusamus cum quasi modi sequi iusto iure! Suscipit, rem ex possicilis alias eligendi placeat perferendis dolorem commodi tenetur repudiandae reprehenderit. Vitae ipsam dolor iure possimus tempora accusantium vel accusamus odio quia aut fuga, voluptate doloremque animi fugiat? Aspernatur, perspiciatis maxime quasi qui corporis magnam sequi esse recusandae nulla? Officia voluptatibus iure at optio alias cum, sapiente vitae odit distinctio quam. Iste, veritatis vitae dolor quas velit, ea unde quo, est debitis provident non et! Ab consequatur earum placeat eum recusandae corrupti architecto. Sequi obcaecati, sed, qui voluptates sunt placeat velit hic blanditiis accusamus eos laudantium temporibus eius minima aspernatur quam facilis soluta molestiae unde? Eum quod, qui explicabo ducimus tempora ipsum sed odio commodi reprehenderit. Ut maiores suscipit, nisi mollitia eos velit nulla. Odio repellat, excepturi dolorem sed velit illo quo inventore eveniet! Voluptas perspiciatis ipsam voluptatum ad. Hic fugiat ipsam aliquid tenetur odit neque assumenda recusandae aperiam delectus dolorum libero, voluptates dolore placeat praesentium quod fugit? Recusandae eius odit eaque possimus dolor pariatur vitae autem mollitia in consequuntur. Expedita incidunt fugiat quae provident, possimus vitae modi architecto hic enim accusamus non, error deleniti eveniet deserunt dicta aspernatur eligendi, iusto officiis voluptates nulla. Ipsa vitae odit ab aspernatur, inventore error repellendus culpa velit earum sint, porro dolores, officiis rerum a maxime? Sapiente perspiciatis veniam fugit minima, totam nisi eius veritatis sed illum aut mollitia dolorem eveniet, quae voluptatibus sit omnis laboriosam vero possimus quidem. Obcaecati, tempora! Velit perferendis insam aspernatur omnis! Est illo iure laboriosam illum, provident non ducimus eum laudantium, aliquam assumenda accusantium dicta quasi voluptatum soluta mollitia doloremque architecto harum quod deserunt! Rem, magni sint quas tenetur consequuntur nulla officiis, odio itaque minus beatae tempora? Dolor quia suscipit numquam aliquam aliquid aut veritatis placeat quasi distinctio debitissit temporibus id magni repellat, nam alias sequi?
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
