function start(){
    navigator.mediaDevices.getUserMedia({audio : true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qQSpFn4Wu/model.json",model_ready);
}

function model_ready(){
 classifier.classify(gotresults);
}

function gotresults(error,results) {
    if (error) {
        console.error(error);
     }
      else {
          console.log(results);
          random_r = Math.floor(Math.random() * 255) + 1;
          random_g = Math.floor(Math.random() * 255) + 1;
          random_b = Math.floor(Math.random() * 255) + 1;

          document.getElementById("result_name").innerHTML = 'I can hear - ' +
          results[0].label;
          document.getElementById("accuracy").innerHTML = 'Accuracy - ' +
          (results[0].confidence*100).toFixed(2)+"%";
          document.getElementById("result_name").style.color = "rgb("
          +random_r+","+random_g+","+random_b+")";
          document.getElementById("accuracy").style.color = "rgb("
          +random_r+","+random_g+","+random_b+")";

          img = document.getElementById('alien1');
          img1 = document.getElementById('alien2');
          img2 = document.getElementById('alien3');
          img3= document.getElementById('alien4');

          if(results[0].label == "Clap") {
              img.src = "aliens-01.gif";
              img1.src = "aliens-02.png";
              img2.src = "aliens-03.png";
              img3.src = "aliens-04.png";
          }
          else if(results[0].label == "Bell") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }
        else if(results[0].label == "Snap") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        }
        else if(results[0].label == "Background Noise") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }
      }
} 