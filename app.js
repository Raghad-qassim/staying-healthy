console.log('welcome to our website ');
 var message = '';
 //declartion function
 function BMI() {
     // input
     var BMI = prompt('what is your BMI** to calculate BMI use formula is BMI = kg/m2 where kg is your weight in kilograms and m2 is your height in metres squared?');
    console.log(BMI);
    //code
    if (BMI < 18.5) {
       message = 'Thin';

     } else if (BMI < 24.9) {
        message = 'Healty';
    } else if (BMI < 29.9) {
         message = 'overweight';
     } else if (BMI > 30) {
         message = 'Obese';

   } else {
         message = 'calculate your BMI again'
     }
    
     //output
   document.write('<h3>' + message + '</h3>');
 }
BMI ();
// expression function
 var displayimage = function () {
     //input
    var exe = prompt('what type of exercise image you want to view push-up or sit-up?');

   // code
    while (exe !== 'push-up' && exe !== 'sit-up') {
         exe = prompt('please select the type of exercise push-up or sit-up')
    }
   var img = '';
    if (exe === 'push-up') {

         document.write(img = '<img src="push-up.jpg" />');

    }
    else if (exe === 'sit-up') {
         document.write(img = '<img src="sit-up.jpg"/>');
     }
     var result = " ";
     result = img;
     var exenum = prompt('how many time do you want to repeate the exercise?');
     for (var i = 0; i < exenum; i++) {
         //output
       document.write(img);

     }

 }

  displayimage ();


