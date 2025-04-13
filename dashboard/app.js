const ais = ["Axon", "Nexus", "NovaAI", "SeedbedAI", "CortexAI", "ScoutAI", "EchoAI", "EduAI", "EthosAI", "PrijoritàAI", "ScriptorAI", "CodexMD", "RxAI", "LexAI", "PopulusAI"];
const grid = document.getElementById("ai-grid");

ais.forEach(ai => {
  const btn = document.createElement("button");
  btn.textContent = ai;
  btn.onclick = () => alert(ai + " interface coming soon!");
  grid.appendChild(btn);
});