var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    });
}

console.log('ml5 version : ' , ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NrUwFzNzg/model.json',modelLoaded);

function modelLoaded(){
    console.log(" Model Loaded");
}

function check(){
    img = document.getElementById('captured_img');
    console.log("i am working");
    classifier.classify(img, gotResult);
    console.log("i am still working");
}

function gotResult(error, result){
    if (error){
       console.log(error);
    }
    else{
        console.log("Should I still Work");
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        console.log("  test  ");


        if(result[0].label == "VICTORY"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }

        if(result[0].label == "THUMBS UP"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }

        if(result[0].label == "THUMBS DOWN"){
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }




        if(result[1].label == "VICTORY"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }

        if(result[1].label == "THUMBS UP"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }

        if(result[1].label == "THUMBS DOWN"){
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }

    }
}