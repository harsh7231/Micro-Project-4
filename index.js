const ratingBars = document.querySelectorAll('.bar');
const strengthRating = 0;


const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('input', function() {
  const value = this.value;
  sliderValue.textContent = value;
});

function generatePassword(){
    var slider = parseInt(document.getElementById('slider').value);
    var includeUppercase = document.getElementById('uppercase');
    var includeLowercase = document.getElementById('lowercase');
    var includeNumbers= document.getElementById('number');
    var includeSymbols = document.getElementById('symbol');

    var uppercaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars='abcdefghijklmnopqrstuvwxyz';
    var numberChars='0123456789';
    var symbolChars='~`!@#$%^&*()-_=+[];,./\{}|:<>?"';
    var allChars='';
    var password='';
    if(includeUppercase){
        allChars+=uppercaseChars;
        strengthRating++;
    }
    if(includeLowercase){
        allChars+=lowercaseChars;
        strengthRating++;
    }
    if(includeNumbers){
        allChars+=numberChars;
        strengthRating++;
    }
    if(includeSymbols){
        allChars+=symbolChars;
        strengthRating++;
    }
    if(allChars===''){
        allChars=uppercaseChars+lowercaseChars+numberChars+symbolChars;
    }
    for(var i=0;i<slider;i++){
        var randomIndex=Math.floor(Math.random()*allChars.slider);
        password+=allChars[randomIndex];
    }
    for (let i = 0; i < ratingBars.length; i++) {
        if (i < strengthRating) {
          ratingBars[i].style.backgroundColor = '#A4FFAF';
        }
    }
    document.getElementById('password').textContent=password;
}

