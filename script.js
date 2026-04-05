// DATA
const quizData = {
  math:{
    easy: [
      {q:"10+3?",a:["10","9","13","15"],c:2},
      {q:"10-4?",a:["6","7","8","9"],c:0},
      {q:"15×4?",a:["50","45","30","60"],c:3},
      {q:"125/5?",a:["30","25","47","35"],c:1},
      {q:"Which number is even?",a:["3","7","10","13"],c:2}
    ],
    medium: [
      {q:"What is 50 ÷ 5 + 6?",a:["10","16","15","18"],c:1},
      {q:"What is 24 ÷ 3 × 2?",a:["4","7","8","16"],c:3},
      {q:"72 candies packed into 8 boxes. Each box has?",a:["5","7","9","11"],c:2},
      {q:"A number divided by 2 gives 15. What is the number?",a:["35","30","15","20"],c:1},
      {q:"If 5 × ? = 40, then ? =",a:["8","5","12","10"],c:0},
      {q:"45 students divided into 9 groups. Students per group?",a:["9","3","5","4"],c:2},
      {q:"What is one-third of 60?",a:["10","5","15","20"],c:3}
    ],
    hard: [
      {q:"What is 144 ÷ 12 × 2 − 4?",a:["10","20","15","18"],c:1},
      {q:"What is (96 ÷ 8) × (5 − 2)?",a:["35","26","45","36"],c:3},
      {q:"Solve: 2x + 6 = 26",a:["10","25","11","28"],c:0},
      {q:"Solve: x² = 121",a:["14","11","15","38"],c:1},
      {q:"If x ÷ 3 = 15, then x =",a:["33","25","75","45"],c:3},
      {q:"How many degrees are in a triangle?",a:["360°","75°","180°","90°"],c:2},
      {q:"Perimeter of rectangle (l=8, b=4)?",a:["24","25","16","27"],c:0},
      {q:"Value of cos(0°)?",a:["1","5","7","6"],c:0},
      {q:"What is 81^(1/2)?",a:["23","9","7","10"],c:1},
      {q:"Solve: x² − 64 = 0",a:["±8","+8","6","-8"],c:0}
    ]
  },
  science:{
    easy: [
      {q:"What is the unit of force?",a:["Watt","Newton","Joule","Force"],c:1},
      {q:" What is the speed of light? ",a:["3 × 10⁶ m/s"," 3 × 10⁸ m/s"," 3 × 10² m/s","  3 × 10⁴ m/s"],c:1},
      {q:" What is the unit of electric current? ",a:["Volt","Ohm"," Ampere","Watt"],c:2},
      {q:" Which form of energy is stored in food?",a:["Mechanical","Light","Electrical","Chemical"],c:3},
      {q:" What is the force that pulls objects toward Earth?",a:["Magnetism","Pressure","Gravity","Friction"],c:2}
    ],
    medium: [
      {q:" What is the formula of speed?",a:["Distance × Time","Distance ÷ Time","Time  ÷ Distance","Speed × Time"],c:1},
      {q:" Which law states: “Every action has equal and opposite reaction”?",a:["1st","2nd","Law Of Gravitation","3rd"],c:3},
      {q:" What is the SI unit of pressure?",a:["Pascal","Newton","Joule","Watt"],c:0},
      {q:" What is acceleration?",a:["Changed in Speed","Covered Total Distance","Changed in Velocity","Appiled Force"],c:2},
      {q:" What is the unit of acceleration?",a:["m/s"," m²","m/s² ","m"],c:2},
      {q:" Which force opposes motion?",a:["Torque","Gravity","Tension","Friction"],c:3},
      {q:" Which mirror is used in rear-view mirrors?",a:["Plane","Convex","Concave","None"],c:1}
    ],
    hard: [
      {q:"Work done is zero when angle between force and displacement is:",a:["0°","45°","60°","90°"],c:3},
      {q:"What is the dimensional formula of force?",a:["ML/T","MLT⁻²","M/LT","ML²T⁻²"],c:1},
      {q:"According to Ohm’s Law, current is:",a:["Directly proportional to resistance","Inversely proportional to voltage","Directly proportional to voltage","Independent of both"],c:2},
      {q:"What is the equivalent resistance of two 4Ω resistors in series?",a:["2Ω","4Ω","6Ω","8Ω"],c:3},
      {q:"What is absolute zero temperature?",a:["0°C","-100°C","-273°C","100K"],c:2},
      {q:"Which lens is used to correct myopia?",a:["Convex","Concave","Plane","Cylindrical"],c:1},
      {q:"What is wavelength?",a:["Distance between two crests","Speed of wave","Frequency","Energy"],c:0},
      {q:"Which wave needs no medium?",a:["Sound","Water","Light","Mechanical"],c:2},
      {q:"Heat flows from:",a:["Cold to hot","Hot to cold","Equal temp","Random"],c:1},
      {q:"In which connection current is same?",a:["Parallel","Mixed","Series","None"],c:2}
    ]
  },
  cs:{
    easy: [
      {q:"What does CPU stand for?",a:["Central Process Unit","Central Processing Unit","Computer Personal Unit","Control Processing Unit"],c:1},
      {q:"Which device is used to input data?",a:["Monitor","Printer","Keyboard","Keyboard"],c:2},
      {q:"Which memory is temporary?",a:["ROM","RAM","Hard Disk","SSD"],c:1},
      {q:"Which device stores data permanently?",a:["RAM","CPU","Hard Disk","Cache"],c:2},
      {q:"Which is a web browser?",a:["Windows","Linux","CPU","Chrome"],c:3}
    ],
    medium: [
      {q:"What is the full form of ALU?",a:["Arithmetic Logic Unit","Automatic Logic Unit","Advanced Logic Unit","Applied Logic Unit"],c:0},
      {q:"Which part of CPU performs calculations?",a:["Control Unit", "ALU", "Memory Unit", "Register"],c:1},
      {q:"What does HTTP stand for?",a:["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Protocol", "HyperText Transmission Protocol"],c:0},
      {q:"Which is not an operating system?",a:["Windows", "Linux", "Oracle","MacOS"],c:2},
      {q:"Which language is used for styling web pages?",a:["HTML", "CSS","Java", "Python"],c:1},
      {q:"Which data structure uses FIFO?",a:["Stack", "Queue","Array", "Tree"],c:1},
      {q:"Which device converts digital signal to analog?",a:["Router", "Hub","Switch", "Modem"],c:3}
    ],
    hard: [
      {q:"What is the time complexity of binary search?",a:["O(n)", "O(log n)","O(n²)", "O(1)"],c:1},
      {q:"Which data structure is used in recursion?",a:["Queue", "Stack","Array", "Tree"],c:1},
      {q:"What is the output type of typeof null in JavaScript?",a:["null", "object","undefined", "number"],c:1},
      {q:"What does DNS stand for?",a:["Domain Name System", "Data Name System", "Digital Network Service", "Domain Network Server"],c:0},
      {q:"What is the default port of HTTP?",a:["21", "80", "443", "25"],c:1},
      {q:"Which data structure is best for implementing priority queue?",a:["Array", "Linked List", "Heap", "Stack"],c:2},
      {q:"What is the base of hexadecimal number system?",a:["2", "8", "10", "16"],c:3},
      {q:"What is the output of NaN === NaN in JavaScript?",a:["true", "false","undefined", "error"],c:1},
      {q:"Which SQL command is used to remove table?",a:["DELETE", "CLEAR","REMOVE", "DROP"],c:3},
      {q:"What is the binary of decimal 10?",a:["1010" ,"1001", "1100", "1110"],c:0}
    ]
  },
  gk:{
    easy: [
      {q:"What is the capital of India?",a:["Delhi", "Mumbai", "Kolkata", "Chennai"],c:0},
      {q:"Which planet is known as the Red Planet?",a:["Mars", "Earth", "Venus", "Jupiter"],c:0},
      {q:"What is the national animal of India?",a:["Lion", "Tiger", "Elephant", "Leopard"],c:1},
      {q:"Which gas do plants take in for photosynthesis?",a:["Oxygen", "Carbon Dioxide","Nitrogen", "Hydrogen"],c:1},
      {q:"What is the currency of India?",a:["Dollar", "Rupee","Euro", "Yen"],c:1}
    ],
    medium: [
      {q:"What is the capital of Australia?",a:["Sydney", "Melbourne", "Canberra", "Perth"],c:2},
      {q:"Which is the largest desert in the world?",a:["Sahara", "Gobi", "Antarctic Desert" , "Arabian"],c:2},
      {q:"What is the currency of Japan?",a:["Won", "Dollar", "Yen", "Euro"],c:2},
      {q:"Which planet has the most moons?",a:["Earth", "Mars", "Jupiter", "Saturn"],c:3},
      {q:"Which organ purifies blood in the human body?",a:["Heart", "Liver", "Kidney", "Lungs"],c:2},
      {q:"Which country is known as the Land of Rising Sun?",a:["China", "Korea", "Japan" , "Thailand"],c:2},
      {q:"Who wrote Ramayana?",a:["Valmiki", "Tulsidas", "Kalidasa", "Vedas"],c:0}
    ],
    hard: [
      {q:"Who was the first woman Prime Minister of India?",a:["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],c:0},
      {q:"Which planet rotates on its side?",a:["Uranus", "Neptune", "Saturn", "Jupiter"],c:0},
      {q:"What is the capital of Canada?",a:["Toronto", "Vancouver", "Ottawa", "Montreal"],c:2},
      {q:"What is the hardest natural substance?",a:["Gold", "Iron", "Diamond" , "Platinum"],c:2},
      {q:"Which continent has the most countries?",a:["Africa", "Asia", "Europe", "South America"],c:0},
      {q:"Which instrument measures atmospheric pressure?",a:["Thermometer", "Barometer", "Hygrometer", "Ammeter"],c:1},
      {q:"Which is the fastest land animal?",a:["Lion", "Tiger", "Cheetah", "Leopard"],c:2},
      {q:"Who invented the light bulb?",a:["Thomas Edison", "Nikola Tesla", "Alexander Bell", "Newton"],c:0},
      {q:"Who wrote the book Discovery of India?",a:["Jawaharlal Nehru", "Mahatma Gandhi", "Rabindranath Tagore", "Subhas Chandra Bose"],c:0},
      {q:"Which country has the largest population in the world (recent)?",a:["India", "China", "USA", "Indonesia"],c:0}
    ]
  },
  sports:{
    easy: [
      {q:"How many players are there in a cricket team?",a:["9", "10", "11", "12"],c:2},
      {q:"Which country won the ICC Cricket World Cup 2011?",a:["Australia", "India", "England", "Pakistan"],c:1},
      {q:"In which sport is the term “goal” used?",a:["Cricket", "Football", "Tennis", "Chess"],c:1},
      {q:"Who is known as the “God of Cricket”?",a:["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Ricky Ponting"],c:0},
      {q:"Which country is famous for football (soccer)?",a:["Brazil", "India", "China", "Japan"],c:0}
    ],
    medium: [
      {q:"How many overs are there in a T20 cricket match per side?",a:["10", "20", "25", "50"],c:1},
      {q:"Which country won the FIFA World Cup 2018?",a:["Germany", "Brazil", "France", "Argentina"],c:2},
      {q:"How many players are there in a basketball team (on court)?",a:["4", "5", "6", "7"],c:1},
      {q:"Which sport uses the term “checkmate”?",a:["Chess", "Badminton", "Cricket", "Boxing"],c:0},
      {q:"Who is known as the “Flying Sikh”?",a:["Milkha Singh", "PT Usha", "Neeraj Chopra", "Kapil Dev"],c:0},
      {q:"Which country won the first Cricket World Cup (1975)?",a:["India", "Australia", "West Indies", "England"],c:2},
      {q:"In tennis, how many points are needed to win a tie-break (minimum)?",a:["5", "6", "8", "7"],c:3}
    ],
    hard: [
      {q:"In which year were the first modern Olympics held?",a:["1892", "1894", "1896", "1900"],c:2},
      {q:"Who holds the record for most goals in a single FIFA World Cup?",a:["Lionel Messi", "Cristiano Ronaldo", "Just Fontaine", "Pele"],c:2},
      {q:"Which cricketer is known as “The Wall”?",a:["Sachin Tendulkar", "Rahul Dravid", "VVS Laxman", "Sunil Gavaskar"],c:1},
      {q:"Who is known as the fastest bowler in cricket history (highest recorded speed)?",a:["Brett Lee", "Dale Steyn", "Mitchell Starc", "Shoaib Akhtar"],c:3},
      {q:"Which country won the ICC Champions Trophy 2013?",a:["India", "England", "Australia", "Pakistan"],c:0},
      {q:"In cricket, what is the maximum number of fielders allowed outside the circle in ODI (after powerplay)?",a:["3", "4", "5", "6"],c:2},
      {q:"In badminton, who is a famous Indian Olympic medalist?",a:["PV Sindhu", "Sania Mirza", "Neeraj Chopra", "Kapil Dev"],c:0},
      {q:"In football, how many players are there in a team squad for FIFA World Cup (recent rule)?",a:["23", "24", "25", "26"],c:3},
      {q:"Who is the fastest man in the world (100m record holder)?",a:["Tyson Gay", "Yohan Blake", "Usain Bolt", "Justin Gatlin"],c:2},
      {q:"Which sport is associated with the term “Ashes”?",a:["Football", "Cricket", "Rugby", "Hockey"],c:1}
    ]
  }
};

// VARIABLES
let username="", age="", subject="", level="";
let questions=[], qIndex=0, score=0;
let timer, time=10;

// DOM
const screens=document.querySelectorAll(".screen");
const questionEl=document.getElementById("question");
const answersEl=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const timerEl=document.getElementById("timer");
const progressEl=document.getElementById("progress");
const levelTag=document.getElementById("levelTag"); 

// SCREEN SWITCH
function showScreen(id){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// START
function goToSubjects(){
  username=document.getElementById("username").value;
  age=document.getElementById("age").value;

  if(!username||!age){
    alert("Enter details");
    return;
  }
  showScreen("subjectScreen");
}

// SUBJECT
function selectSubject(sub){
  subject=sub;
  showScreen("levelScreen");
}

// LEVEL TAG UPDATE 
function updateLevelTag(){
  if(!levelTag) return;

  levelTag.className="level-tag";

  if(level==="easy"){
    levelTag.innerText="📘 EASY LEVEL";
    levelTag.classList.add("easy-tag");
  }
  else if(level==="medium"){
    levelTag.innerText="📙 MEDIUM LEVEL";
    levelTag.classList.add("medium-tag");
  }
  else{
    levelTag.innerText="📕 HARD LEVEL";
    levelTag.classList.add("hard-tag");
  }
}

// LEVEL
function startQuiz(lvl){
  level=lvl;
  questions=quizData[subject][level];

  document.body.className=level+"-theme";
  showScreen("quizScreen");

  updateLevelTag(); 

  qIndex=0; score=0;
  loadQuestion();
}

// LOAD
function loadQuestion(){
  if(!questions || !questions[qIndex]) return;

  clearInterval(timer);
  answersEl.innerHTML="";
  nextBtn.style.display="none";

  let q=questions[qIndex];
  questionEl.textContent=q.q;

  startTimer();          
  updateProgress();      

  q.a.forEach((text,i)=>{
    let btn=document.createElement("button");
    btn.textContent=text;
    btn.onclick=()=>select(btn,i);
    answersEl.appendChild(btn);
  });
}

// TIMER
function startTimer(){
  time=10;
  timerEl.innerText="⏱ "+time;

  timer=setInterval(()=>{
    time--;
    timerEl.innerText="⏱ "+time;

    if(time<=0){
      clearInterval(timer);
      disable();
    }
  },1000);
}

// PROGRESS
function updateProgress(){
  progressEl.style.width=((qIndex+1)/questions.length)*100+"%";
}

// SELECT
function select(btn,i){
  clearInterval(timer);

  let q=questions[qIndex];
  let correct=q.c;
  let buttons=document.querySelectorAll("#answers button");

  buttons.forEach(b=>b.disabled=true);

  if(i===correct){
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
  }

  nextBtn.style.display="block";
}

// DISABLE (TIME UP)
function disable(){
  let q=questions[qIndex];
  let buttons=document.querySelectorAll("#answers button");

  buttons.forEach(b=>b.disabled=true);
  buttons[q.c].classList.add("correct");

  nextBtn.style.display="block";
}

// NEXT
nextBtn.onclick=()=>{
  qIndex++;
  if(qIndex<questions.length){
    loadQuestion();
  } else {
    showResult();
  }
};

// RESULT
function showResult(){
  let levels=["easy","medium","hard"];
  let currentIndex=levels.indexOf(level);

  let key=subject+"-"+level;
  let data=JSON.parse(localStorage.getItem(key))||[];

  data.push({name:username,age:age,score:score});
  data.sort((a,b)=>b.score-a.score);
  data=data.slice(0,5);

  localStorage.setItem(key,JSON.stringify(data));

  if(currentIndex<levels.length-1){
    showScreen("resultScreen");

    document.getElementById("resultScreen").innerHTML=`
      <h2>✅ ${level.toUpperCase()} LEVEL COMPLETED</h2>
      <p>${username} (${age}) Score: ${score}</p>

      <h3>${subject.toUpperCase()} - ${level.toUpperCase()}</h3>

      ${data.map((p,i)=>`
        <p>#${i+1} ${p.name} (${p.age}) - ${p.score}</p>
      `).join("")}

      <button onclick="goNextLevel()">Next Level</button>
    `;
    return;
  }

  // FINAL
  showScreen("resultScreen");

  document.getElementById("resultScreen").innerHTML=`
    <h2>🏁 ALL LEVELS COMPLETED</h2>
    <p>${username} (${age}) Final Score: ${score}</p>
    <button onclick="location.reload()">Play Again</button>
  `;
}

// NEXT LEVEL
function goNextLevel(){
  let levels=["easy","medium","hard"];
  let currentIndex=levels.indexOf(level);

  level=levels[currentIndex+1];
  questions=quizData[subject][level];

  qIndex=0;
  score=0;

  document.body.className=level+"-theme";

  showScreen("quizScreen");
  updateLevelTag(); 
  loadQuestion();
}