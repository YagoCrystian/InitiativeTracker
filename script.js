let combatants = [];

let currentTurn = 0;

let round = 1;

/* =========================
   SALVAR COMBATE
========================= */

function saveCombat(){

localStorage.setItem("combatants", JSON.stringify(combatants));
localStorage.setItem("currentTurn", currentTurn);
localStorage.setItem("round", round);

}

/* =========================
   CARREGAR COMBATE
========================= */

function loadCombat(){

let savedCombatants = localStorage.getItem("combatants");

if(savedCombatants){

combatants = JSON.parse(savedCombatants);

currentTurn = parseInt(localStorage.getItem("currentTurn")) || 0;

round = parseInt(localStorage.getItem("round")) || 1;

updateRound();
render();

}

}

/* =========================
   ADICIONAR PERSONAGEM
========================= */

function addCombatant(){

let name = document.getElementById("name").value;

let initiative = parseInt(document.getElementById("initiative").value);

let hp = parseInt(document.getElementById("hp").value);

let maxHp = parseInt(document.getElementById("maxHp").value);

let type = document.getElementById("type").value;

combatants.push({
name,
initiative,
hp,
maxHp,
type
});

render();
saveCombat();

}

/* =========================
   RENDER LISTA
========================= */

function render(){

combatants.sort((a,b)=>b.initiative-a.initiative);

let list = document.getElementById("combatList");

list.innerHTML="";

combatants.forEach((c,index)=>{

let percent = (c.hp/c.maxHp)*100;

percent = Math.max(0, percent);
percent = Math.min(100, percent);

let color="green";

if(percent<50) color="orange";

if(percent<25) color="red";

list.innerHTML+=`

<div class="combatant ${c.type.toLowerCase()}">

<strong>${c.name}</strong>

<div>Iniciativa: ${c.initiative}</div>

<div>HP: ${c.hp} / ${c.maxHp}</div>

<div class="hp-bar-container">

<div class="hp-bar" style="width:${percent}%; background:${color};">

${Math.floor(percent)}%

</div>

</div>

<br>

<button onclick="changeHP(${index},-1)">-</button>
<button onclick="changeHP(${index},1)">+</button>
<button onclick="removeCombatant(${index})">Remover</button>

</div>

`;

});

highlightTurn();

}

/* =========================
   ALTERAR HP
========================= */

function changeHP(index,mode){

let value = parseInt(prompt("Valor"));

if(!value) return;

if(mode===1){

combatants[index].hp+=value;

if(combatants[index].hp>combatants[index].maxHp)
combatants[index].hp=combatants[index].maxHp;

}
else{

combatants[index].hp-=value;

if(combatants[index].hp<0)
combatants[index].hp=0;

}

render();
saveCombat();

}

/* =========================
   REMOVER PERSONAGEM
========================= */

function removeCombatant(index){

combatants.splice(index,1);

if(currentTurn >= combatants.length){
currentTurn = combatants.length - 1;
}

if(currentTurn < 0){
currentTurn = 0;
}

render();
saveCombat();

}

/* =========================
   CONTROLE DE TURNOS
========================= */

function startCombat(){

currentTurn=0;
round=1;

updateRound();
highlightTurn();

saveCombat();

}

function nextTurn(){

currentTurn++;

if(currentTurn>=combatants.length){

currentTurn=0;
round++;

}

updateRound();
highlightTurn();

saveCombat();

}

function previousTurn(){

currentTurn--;

if(currentTurn<0){

currentTurn=combatants.length-1;
round--;

}

updateRound();
highlightTurn();

saveCombat();

}

/* =========================
   ROUND DISPLAY
========================= */

function updateRound(){

document.getElementById("round").textContent="Round: "+round;

}

/* =========================
   HIGHLIGHT TURNO
========================= */

function highlightTurn(){

let elements=document.querySelectorAll(".combatant");

elements.forEach(e=>e.classList.remove("active"));

if(elements[currentTurn])
elements[currentTurn].classList.add("active");

}

/* =========================
   RESETAR INICIATIVA
========================= */

function resetInitiative(){

currentTurn = 0;
round = 1;

updateRound();
highlightTurn();

saveCombat();

}

/* =========================
   LIMPAR COMBATE
========================= */

function clearInitiative(){

if(!confirm("Limpar toda iniciativa?")) return;

combatants = [];

currentTurn = 0;
round = 1;

updateRound();
render();

saveCombat();

}

/* =========================
   LOAD AUTOMÁTICO
========================= */

window.onload = loadCombat;