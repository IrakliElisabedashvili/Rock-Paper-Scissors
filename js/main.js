let [computerScore, userScore]=[0,0];
let resultGame = document.getElementById("result");
let choicesObj = {
    'ქვა' : {
        'ქვა' : 'ფრე',
        'მაკრატელი' : 'მოგება',
        'ქაღალდი' : 'წაგება'
    },

    'ქაღალდი' : {
        'ქვა' : 'მოგება',
        'მაკრატელი' : 'წაგება',
        'ქაღალდი' : 'ფრე'
    },

    'მაკრატელი' : {
        'ქვა' : 'წაგება',
        'მაკრატელი' : 'ფრე',
        'ქაღალდი' : 'მოგება'
    }
}


// Functions Start
function checker(input){
    let choices = ["ქვა", "ქაღალდი", "მაკრატელი"];
    let num = Math.floor(Math.random()*3);
    let cChoice =  choices[num].toUpperCase();
    let uChoice = input.toUpperCase();

    // კომპიუტერის არჩევანი
    comp_choice.innerHTML = 'კომპიუტერმა აირჩია ' + cChoice;

    // მოთამაშის არჩევანი
    user_choice.innerHTML = 'თქვენ აირჩიეთ ' + uChoice;


    // მოთამაშე vs კომპიუტერი - შემთხვევები

    let computer_choice = choices[num];

    switch(choicesObj[input][computer_choice]){
        case 'მოგება':
            resultGame.style.cssText = "background-color: #cefdce; color: #689f38; width: 50%";
            resultGame.innerHTML = 'გილოცავთ, თქვენ გაიმარჯვეთ!';
            userScore++;
            break;
        case 'წაგება':
            resultGame.style.cssText = "background-color: #ffdde0; color: #d32f2f; width: 50%";
            resultGame.innerHTML = 'სამწუხაროდ, თქვენ დამარცხდით, კიდევ სცადეთ!';
            computerScore++;
            break;
        default:
            resultGame.style.cssText = "background-color: #e5e5e5; color: #808080; width: 50%";
            resultGame.innerHTML = 'ფრეა';
            break;
    }

    // ანგარიში
    computer_score.innerHTML = computerScore;
    user_score.innerHTML = userScore;

// თავიდან დაწყება
    if(userScore > 0 || computerScore > 0){
        document.getElementById("restart").style.display = 'block';
    
    }else{
        document.getElementById("restart").style.display = 'none';
    }

}

// თავიდან დაწყება - ფუნქცია
function resetStats(){
    return location.reload();
}

// Functions End