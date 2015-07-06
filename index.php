<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Markdown Builder</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
</head>
<body>

    <div class="container">
        <div class="text-center">
            <h2>Github Readme.md Builder/Guide</h2>
            <hr>
        </div>
            <div id="content">
                <textarea class="form-control" cols="30" rows="10" v-model="markdownInput" style="resize: none;"></textarea>
                <hr>
                <div v-html="markdownInput | marked"></div>
        </div>
    </div>
    
    <div class="container" style="margin-top: 50px;">
        <div class="text-center">
            <div class="well" style="border: none; box-shadow: none;">Built Using <a href="http://vuejs.org/">VueJs</a></div>
        </div>
    </div>

    <script src="http://code.jquery.com/jquery-2.1.4.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/0.12.6/vue.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
    <script src="app.js"></script>

</body>
</html>