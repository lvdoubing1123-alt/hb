const params = new URLSearchParams(location.search);
const amountParam = params.get("amount");
const amount = amountParam && /^\d+(\.\d{1,2})?$/.test(amountParam) ? Number(amountParam).toFixed(2) : "34.20";
document.getElementById("amount").textContent = amount;

let selected = "Alipay";
document.querySelectorAll(".method").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".method").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
    selected = btn.dataset.method;
  });
});

const modal = document.getElementById("modal");
document.getElementById("payBtn").addEventListener("click", () => {
  document.getElementById("resultText").textContent =
    `这是一个前端演示：已模拟选择 ${selected}，订单金额为 $${amount}。未连接任何真实支付渠道。`;
  modal.classList.remove("hidden");
});

document.getElementById("closeBtn").addEventListener("click", () => {
  modal.classList.add("hidden");
});
