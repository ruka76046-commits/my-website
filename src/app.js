import './style.css';

import Chart from 'chart.js/auto';

const labels = ['月', '火', '水', '木', '金', '土', '日'];
const studyData = [2, 3, 1.5, 4, 2.5, 5, 3];

const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
  type: 'bar', 
  data: {
    labels: labels,
    datasets: [{
      label: '学習時間 (時間)',
      data: studyData,
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '時間 (h)'
        }
      }
    }
  }
});

const daySelect = document.getElementById('day-select');
const hoursInput = document.getElementById('hours-input');
const updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', () => {
  const selectedIndex = parseInt(daySelect.value, 10);
  const newHours = parseFloat(hoursInput.value);

  if (isNaN(newHours) || newHours < 0) {
    alert('正しい時間を入力してください');
    return;
  }

 myChart.data.datasets[0].data[selectedIndex] = newHours;

  myChart.update();
});