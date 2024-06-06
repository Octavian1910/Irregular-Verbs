// script.js


var verbs=[]; //I use it to stock all the objects with verbs

var navbar_blur;
var table_blur ;

var streak;
var score=0;

// Function to add rows to the table
function addVerbRow(present, pastSimple, pastParticiple , translate) {
    var table = document.getElementById("verbTable");
    var row = table.insertRow(-1); // Insert row at the end of the table
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.classList.add("border");
    cell2.classList.add("border");
    cell3.classList.add("border");
    cell4.classList.add("border");
    cell1.innerHTML = present;
    cell2.innerHTML = pastSimple;
    cell3.innerHTML = pastParticiple;
    cell4.innerHTML = translate;

    //now lets make them objects for the guessing part
    var verbObject = {
        present: present,
        pastSimple: pastSimple,
        pastParticiple: pastParticiple,
        translate: translate
    };

    verbs.push(verbObject);
}



// Add verbs to the table

window.onload = function() {

    const verbsList = [
            ["Arise", "Arose", "Arisen", "a ridica"],
            ["Awake", "Awoke", "Awoken", "a trezi"],
            ["Be", "Was/Were", "Been", "a fi"],
            ["Bear", "Bore", "Born", "a suporta"],
            ["Beat", "Beat", "Beaten", "a bate"],
            ["Become", "Became", "Become", "a deveni"],
            ["Begin", "Began", "Begun", "a începe"],
            ["Bend", "Bent", "Bent", "a îndoi"],
            ["Bet", "Bet", "Bet", "a paria"],
            ["Bind", "Bound", "Bound", "a lega"],
            ["Bite", "Bit", "Bitten", "a mușca"],
            ["Bleed", "Bled", "Bled", "a sângera"],
            ["Blow", "Blew", "Blown", "a sufla"],
            ["Break", "Broke", "Broken", "a sparge"],
            ["Breed", "Bred", "Bred", "a crește"],
            ["Bring", "Brought", "Brought", "a aduce"],
            ["Broadcast", "Broadcast", "Broadcast", "a transmite"],
            ["Build", "Built", "Built", "a construi"],
            ["Burn", "Burnt/Burned", "Burnt/Burned", "a arde"],
            ["Burst", "Burst", "Burst", "a exploda"],
            ["Buy", "Bought", "Bought", "a cumpăra"],
            ["Cast", "Cast", "Cast", "a arunca"],
            ["Catch", "Caught", "Caught", "a prinde"],
            ["Choose", "Chose", "Chosen", "a alege"],
            ["Cling", "Clung", "Clung", "a se agăța"],
            ["Come", "Came", "Come", "a veni"],
            ["Cost", "Cost", "Cost", "a costa"],
            ["Creep", "Crept", "Crept", "a se târî"],
            ["Cut", "Cut", "Cut", "a tăia"],
            ["Deal", "Dealt", "Dealt", "a negocia"],
            ["Dig", "Dug", "Dug", "a săpa"],
            ["Do", "Did", "Done", "a face"],
            ["Draw", "Drew", "Drawn", "a desena"],
            ["Dream", "Dreamt/Dreamed", "Dreamt/Dreamed", "a visa"],
            ["Drink", "Drank", "Drunk", "a bea"],
            ["Drive", "Drove", "Driven", "a conduce"],
            ["Eat", "Ate", "Eaten", "a mânca"],
            ["Fall", "Fell", "Fallen", "a cădea"],
            ["Feed", "Fed", "Fed", "a hrăni"],
            ["Feel", "Felt", "Felt", "a simți"],
            ["Fight", "Fought", "Fought", "a lupta"],
            ["Find", "Found", "Found", "a găsi"],
            ["Flee", "Fled", "Fled", "a fugi"],
            ["Fly", "Flew", "Flown", "a zbura"],
            ["Forbid", "Forbade", "Forbidden", "a interzice"],
            ["Forget", "Forgot", "Forgotten", "a uita"],
            ["Forgive", "Forgave", "Forgiven", "a ierta"],
            ["Freeze", "Froze", "Frozen", "a îngheța"],
            ["Get", "Got", "Got/Gotten", "a obține"],
            ["Give", "Gave", "Given", "a da"],
            ["Go", "Went", "Gone", "a merge"],
            ["Grind", "Ground", "Ground", "a măcina"],
            ["Grow", "Grew", "Grown", "a crește"],
            ["Hang", "Hung", "Hung", "a atârna"],
            ["Have", "Had", "Had", "a avea"],
            ["Hear", "Heard", "Heard", "a auzi"],
            ["Hide", "Hid", "Hidden", "a ascunde"],
            ["Hit", "Hit", "Hit", "a lovi"],
            ["Hold", "Held", "Held", "a ține"],
            ["Hurt", "Hurt", "Hurt", "a răni"],
            ["Keep", "Kept", "Kept", "a păstra"],
            ["Kneel", "Knelt", "Knelt", "a îngenunchia"],
            ["Knit", "Knit/Knitted", "Knit/Knitted", "a tricota"],
            ["Know", "Knew", "Known", "a ști"],
            ["Lay", "Laid", "Laid", "a așeza"],
            ["Lead", "Led", "Led", "a conduce"],
            ["Leap", "Leapt", "Leapt", "a sări"],
            ["Learn", "Learnt/Learned", "Learnt/Learned", "a învăța"],
            ["Leave", "Left", "Left", "a părăsi"],
            ["Lend", "Lent", "Lent", "a împrumuta"],
            ["Let", "Let", "Let", "a permite"],
            ["Lie", "Lay", "Lain", "a sta întins"],
            ["Light", "Lit/Lighted", "Lit/Lighted", "a aprinde"],
            ["Lose", "Lost", "Lost", "a pierde"],
            ["Make", "Made", "Made", "a face"],
            ["Mean", "Meant", "Meant", "a însemna"],
            ["Meet", "Met", "Met", "a întâlni"],
            ["Mistake", "Mistook", "Mistaken", "a greși"],
            ["Mow", "Mowed", "Mown/Mowed", "a tunde"],
            ["Overcome", "Overcame", "Overcome", "a depăși"],
            ["Pay", "Paid", "Paid", "a plăti"],
            ["Put", "Put", "Put", "a pune"],
            ["Quit", "Quit", "Quit", "a renunța"],
            ["Read", "Read", "Read", "a citi"],
            ["Ride", "Rode", "Ridden", "a călări"],
            ["Ring", "Rang", "Rung", "a suna"],
            ["Rise", "Rose", "Risen", "a se ridica"],
            ["Run", "Ran", "Run", "a alerga"],
            ["Saw", "Sawed", "Sawn/Sawed", "a ferestra"],
            ["Say", "Said", "Said", "a spune"],
            ["See", "Saw", "Seen", "a vedea"],
            ["Seek", "Sought", "Sought", "a căuta"],
            ["Sell", "Sold", "Sold", "a vinde"],
            ["Send", "Sent", "Sent", "a trimite"],
            ["Set", "Set", "Set", "a stabili"],
            ["Sew", "Sewed", "Sewn/Sewed", "a coase"],
            ["Shake", "Shook", "Shaken", "a scutura"],
            ["Shed", "Shed", "Shed", "a scăpa"],
            ["Shine", "Shone", "Shone", "a străluci"],
            ["Shoot", "Shot", "Shot", "a împușca"],
            ["Show", "Showed", "Shown", "a arăta"],
            ["Shrink", "Shrank", "Shrunk", "a se micșora"],
            ["Shut", "Shut", "Shut", "a închide"],
            ["Sing", "Sang", "Sung", "a cânta"],
            ["Sink", "Sank", "Sunk", "a scufunda"],
            ["Sit", "Sat", "Sat", "a sta așezat"],
            ["Sleep", "Slept", "Slept", "a dormi"],
            ["Slide", "Slid", "Slid", "a aluneca"],
            ["Sling", "Slung", "Slung", "a arunca"],
            ["Slink", "Slunk", "Slunk", "a se furișa"],
            ["Slit", "Slit", "Slit", "a tăia"],
            ["Smell", "Smelt", "Smelt", "a mirosi"],
            ["Sow", "Sowed", "Sown/Sowed", "a semăna"],
            ["Speak", "Spoke", "Spoken", "a vorbi"],
            ["Speed", "Sped/Speeded", "Sped/Speeded", "a accelera"],
            ["Spell", "Spelt/Spelled", "Spelt/Spelled", "a ortografia"],
            ["Spend", "Spent", "Spent", "a cheltui"],
            ["Spill", "Spilt/Spilled", "Spilt/Spilled", "a vărsa"],
            ["Spin", "Spun", "Spun", "a învârti"],
            ["Spit", "Spat", "Spat", "a scuipa"],
            ["Split", "Split", "Split", "a despărți"],
            ["Spoil", "Spoilt/Spoiled", "Spoilt/Spoiled", "a strica"],
            ["Spread", "Spread", "Spread", "a răspândi"],
            ["Spring", "Sprang", "Sprung", "a sări"],
            ["Stand", "Stood", "Stood", "a sta în picioare"],
            ["Steal", "Stole", "Stolen", "a fura"],
            ["Stick", "Stuck", "Stuck", "a lipi"],
            ["Sting", "Stung", "Stung", "a înțepa"],
            ["Stink", "Stank", "Stunk", "a putea"],
            ["Stride", "Strode", "Stridden", "a păși"],
            ["Strike", "Struck", "Struck/Stricken", "a lovi"],
            ["String", "Strung", "Strung", "a însira"],
            ["Strive", "Strove", "Striven", "a aspira"],
            ["Swear", "Swore", "Sworn", "a jura"],
            ["Sweep", "Swept", "Swept", "a mătura"],
            ["Swell", "Swelled", "Swollen/Swelled", "a se umfla"],
            ["Swim", "Swam", "Swum", "a înota"],
            ["Swing", "Swung", "Swung", "a se legăna"],
            ["Take", "Took", "Taken", "a lua"],
            ["Teach", "Taught", "Taught", "a învăța"],
            ["Tear", "Tore", "Torn", "a rupe"],
            ["Tell", "Told", "Told", "a spune"],
            ["Think", "Thought", "Thought", "a gândi"],
            ["Throw", "Threw", "Thrown", "a arunca"],
            ["Thrust", "Thrust", "Thrust", "a împinge"],
            ["Tread", "Trod", "Trod/Trodden", "a călca"],
            ["Understand", "Understood", "Understood", "a înțelege"],
            ["Wake", "Woke", "Woken", "a trezi"],
            ["Wear", "Wore", "Worn", "a purta"],
            ["Weave", "Wove", "Woven", "a țese"],
            ["Weep", "Wept", "Wept", "a plânge"],
            ["Win", "Won", "Won", "a câștiga"],
            ["Wind", "Wound", "Wound", "a înfășura"],
            ["Withdraw", "Withdrew", "Withdrawn", "a retrage"],
            ["Withhold", "Withheld", "Withheld", "a reține"],
            ["Withstand", "Withstood", "Withstood", "a rezista"],
            ["Wring", "Wrung", "Wrung", "a stoarce"],
            ["Write", "Wrote", "Written", "a scrie"]
        ];
        
    verbsList.forEach(function(verb) {
        addVerbRow(verb[0], verb[1], verb[2], verb[3]);
    });
    
    navbar_blur = document.querySelector('.navbar');
    table_blur = document.querySelector('.table');

    const Dice = document.getElementById("dicer");

    Dice.addEventListener('click', function() {
    Dice.style.visibility = "hidden";
    navbar_blur.style.filter = "blur(8px)";
    table_blur.style.filter = "blur(8px)";
    console.log("Button clicked!");
    showPopup() 
    });

    streak = document.getElementById("streak");
    console.log(streak.value);
     
};




function showPopup() {
    // Crează div-ul principal pentru pop-up și aplică clasa "popup"

    var popup = document.createElement("div"); //main
    popup.classList.add("popup");


    var popup1 = document.createElement("div");
    popup1.classList.add("popup1");

    var popup2 = document.createElement("div");
    popup2.classList.add("popup2");


    var popup3 = document.createElement("div");
    popup3.classList.add("popup3");

    var popup4 = document.createElement("div");
    popup4.classList.add("popup4");

    var text1 = document.createElement("span");
    text1.textContent = "";
    text1.classList.add("text1_size");

    var random_button = document.createElement("button");
    random_button.innerHTML = "Click here for a random verb &#9858;";
    random_button.classList.add("random_button");

    var answer=document.createElement("span");
    answer.textContent = "";

    var randomNumber
    var randomVerb 

    random_button.addEventListener("click", function() {
        randomNumber = Math.floor(Math.random() * verbs.length);
        randomVerb = verbs[randomNumber];

        text1.textContent = "Scrieti cele 3 forme ale verbului "+randomVerb.translate;
        //reset buttons
        reset(input1,input2,input3);
        input1.value="";
        input2.value="";
        input3.value="";
        answer.textContent = "";
      
    });

    var verify = document.createElement("button"); //verify button
    verify.innerHTML = "Check";
    verify.classList.add("verify");





    verify.addEventListener("click", function() {
    
        reset(input1,input2,input3);

        var correct=0;

        if(input1.value.toLowerCase()==randomVerb.present.toLowerCase() )
        {
            input1.classList.add("correct");
            input1.classList.remove("incorrect");
            correct=correct+1;
        }
        else 
        {

            input1.classList.add("incorrect");
            input1.classList.remove("correct");
        } 

        if(input2.value.toLowerCase()==randomVerb.pastSimple.toLowerCase() )
        {
            input2.classList.add("correct");
            input2.classList.remove("incorrect");
            correct=correct+1;
        }
        else
        {
            input2.classList.add("incorrect");
            input2.classList.remove("correct");
        }  

        if(input3.value.toLowerCase()==randomVerb.pastParticiple.toLowerCase() )
        {
            input3.classList.add("correct");
            input3.classList.remove("incorrect");
            correct=correct+1;
        }
        else
        {
            input3.classList.add("incorrect");
            input3.classList.remove("correct");
        }
       
        answer.textContent = "The correct answer is : "+randomVerb.present+" "+randomVerb.pastSimple+" "+randomVerb.pastParticiple+".";

        if(correct===3)
        {
            score=score+1;
        }
        else
        {
            score=0;
        }
       
        streak.innerHTML=score+" &#128293;";
    });

  
    
    // Crează inputurile și butonul și aplică clasele corespunzătoare
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Present");
    input1.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
             input2.focus();
        }
    });

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "PastSimple");
    input2.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
             input3.focus();
        }
    });

    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("placeholder", "PastParticiple");
    input3.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            verify.click();
        }
    });

    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";

    closeButton.classList.add("close")
    closeButton.addEventListener("click", function() {
        const Dice = document.getElementById("dicer");
        Dice.style.visibility = "visible";
        navbar_blur.style.filter = "blur(0px)";
        table_blur.style.filter = "blur(0px)";
        document.body.removeChild(popup);
    });


    // Adaugă toate elementele în interiorul pop-up-ului
    popup1.appendChild(text1);
    popup1.appendChild(random_button);
    popup2.appendChild(input1);
    popup2.appendChild(input2);
    popup2.appendChild(input3);
    popup3.appendChild(answer);
    popup4.appendChild(closeButton);
    popup4.appendChild(verify);

    popup.appendChild(popup1);
    popup.appendChild(popup2);
    popup.appendChild(popup3);
    popup.appendChild(popup4);
    // Adaugă pop-up-ul la body
    document.body.appendChild(popup);
};


function reset(input1, input2, input3) {
    input1.classList.remove("correct");
    input1.classList.remove("incorrect");
    input2.classList.remove("correct");
    input2.classList.remove("incorrect");
    input3.classList.remove("correct");
    input3.classList.remove("incorrect");
}