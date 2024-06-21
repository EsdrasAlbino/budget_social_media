function calculateBudget() {
  const postsPerDay = document.getElementById("postsPerDay").value;
  const duration = document.getElementById("duration").value;

  if (postsPerDay > 0 && duration > 0) {
    const onlyManagementCost = 150; // R$150 por perfil, 1 perfil
    const numberOfProfiles = 3;
    const managementCost = onlyManagementCost * numberOfProfiles; // R$150 por perfil, 3 perfis
    const trafficCostPerPostPerDay = 13;
    const totalTrafficCost = postsPerDay * trafficCostPerPostPerDay * duration;

    const totalBudget = managementCost + totalTrafficCost;

    document.getElementById(
      "totalBudget"
    ).textContent = `R$${managementCost.toFixed(
      2
    )} de custo de gestão e R$${totalTrafficCost.toFixed(
      2
    )} de custo de tráfego. | TOTAL R$${totalBudget.toFixed(2)} `;
  } else {
    document.getElementById("totalBudget").textContent =
      "Por favor, insira valores válidos.";
  }
}
