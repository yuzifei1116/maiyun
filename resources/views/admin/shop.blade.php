<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模板商城</title>
    <style>
         #list .box {
            width: 350px;
            height: 200px;
            list-style-type: none;
            float: left;
            margin: 10px;
        }

        #list .box img {
            width: 350px;
            height: 400px;
        }

        .h_box {
            color: yellow;
            text-align: center;
            font-size: 30px;
            font-family: "宋体";

        }
    </style>
</head>

<body style="background-image:
    url(http://pic.netbian.com/uploads/allimg/200923/224422-160087226277ed.jpg) ;background-repeat:
    no-repeat;background-size:cover">

    <div>
        <h1 class="h_box">模板商城</h1>
        <ul id="list">
            @foreach($data as $k=>$v)
            <li class="box">
                <a href="{{$v->href}}">
                    <img src="{{$_ENV['APP_URL']}}/storage/{{$v->image}}" alt="">
                </a>
                <a href="">购买</a>
            </li>
            @endforeach
        </ul>

    </div>
    <script>
        //innerHTML 获取标签的内容
        //innerHTML 获取标签的内容
        // var lis = document.getElementById("list").getElementsByTagName("li"); //数组形式


        // //    var lis = [1,8,6];
        // for (var i = 0; i < 10; i++) {

        // }
    </script>
</body>

</html>