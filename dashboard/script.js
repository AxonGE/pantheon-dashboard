
// Dummy placeholder values for bandwidth and storage
document.getElementById("bandwidth").innerText = "92.6 MB used today";
document.getElementById("storage").innerText = "2.3 GB of 10 GB used";
// Live CET timestamp
setInterval(() => {
  const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/Malta" });
  document.querySelector("footer").innerHTML = `🕒 Synced to CET: ${now} | Powered by Axon | Thoughtstream Enabled`;
}, 1000);
