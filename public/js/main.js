"use strict";

const ctx = document.getElementById("myChart");
const val_1_N = document.querySelector(".val_1N").value;
const val_1_NM = document.querySelector(".val_1NM").value;
const val_2_N = document.querySelector(".val_2N").value;
const val_2_NM = document.querySelector(".val_2NM").value;

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [val_1_N, val_2_N],
    datasets: [
      {
        label: "該当駅から半径500m以内の事業所数",
        data: [val_1_NM, val_2_NM],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
