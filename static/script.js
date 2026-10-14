/* ===================================
   Index Page: Emotion Detection
=================================== */
if (document.body.classList.contains("index-page")) {
  const analyzeBtn = document.getElementById('analyze-btn');
  const output = document.getElementById('emotion-output');
  const tipBox = document.getElementById('emotion-tip');
  const history = document.getElementById('history');

  // 🔹 Extended Emotions with more keywords
  const emotions = [
    { keywords: ['happy', 'good', 'joy', 'excited', 'great', 'awesome', 'fantastic', 'love', 'glad'], label: '😊 Happy', class: 'happy' },
    { keywords: ['sad', 'down', 'unhappy', 'depressed', 'lonely', 'cry', 'bad', 'upset'], label: '😢 Sad', class: 'sad' },
    { keywords: ['angry', 'mad', 'frustrated', 'annoyed', 'hate', 'furious', 'irritated', 'rage'], label: '😡 Angry', class: 'angry' },
    { keywords: ['anxious', 'nervous', 'worried', 'scared', 'afraid', 'shy', 'insecure', 'panic'], label: '😟 Anxious', class: 'anxious' },
    { keywords: ['bored', 'tired', 'lazy', 'sleepy', 'dull', 'exhausted'], label: '🥱 Bored', class: 'bored' },
    { keywords: ['surprised', 'shocked', 'amazed', 'wow', 'unexpected', 'unbelievable'], label: '😲 Surprised', class: 'surprised' }
  ];

  const tips = {
    'Happy': 'Keep up the positive vibes! 😊',
    'Sad': 'Try listening to music or talking to a friend.',
    'Angry': 'Take deep breaths and relax for a while.',
    'Anxious': 'Try meditation or write down your worries.',
    'Bored': 'Maybe try a hobby or watch something fun.',
    'Surprised': 'Enjoy the unexpected moments!',
    'Neutral': 'Stay mindful and take care of yourself.'
  };

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', function () {
      const text = document.getElementById('user_text').value.toLowerCase();
      let detected = '😐 Neutral';
      let detectedClass = 'neutral';

      for (let emo of emotions) {
        for (let word of emo.keywords) {
          if (text.includes(word)) {
            detected = emo.label;
            detectedClass = emo.class;
            break;
          }
        }
      }

      // 🔹 Random realistic messages
      const messages = [
        `I think you're feeling ${detected}`,
        `Your emotion seems to be ${detected}`,
        `Looks like you are ${detected}`,
        `Hmm... I detect ${detected}`,
        `From your text, it feels like ${detected}`,
        `I can sense you're ${detected}`,
        `Detected mood: ${detected}`,
        `It seems like you're experiencing ${detected}`,
        `Your current vibe → ${detected}`,
        `Reading your words, I’d say ${detected}`,
        `You might be feeling ${detected}`,
        `Based on what you typed, it looks like ${detected}`,
        `I get the impression that you are ${detected}`,
        `Sounds like you’re ${detected}`,
        `Emotion check → ${detected}`,
        `If I’m not wrong, you are ${detected}`,
        `My guess is that you’re ${detected}`,
        `Analyzing your text… result → ${detected}`,
        `Feels like your heart says ${detected}`,
        `Detected with high confidence: ${detected}`
      ];

      output.textContent = messages[Math.floor(Math.random() * messages.length)];
      output.className = detectedClass;

      // tips dictionary
      const emotionKey = detected.split(" ")[1] || "Neutral";
      tipBox.textContent = tips[emotionKey] || '';

      if (text.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = text + " → " + detected;
        history.appendChild(li);
      }
    });
  }
}

/* ===================================
   Dashboard Page: Charts
=================================== */
if (document.body.classList.contains("dashboard-page")) {
  // ===== Bar Chart =====
  const barCtx = document.getElementById('barChart')?.getContext('2d');
  if (barCtx) {
    const barChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
          label: 'Students Count',
          data: [10, 5, 7],
          backgroundColor: ['#28a745', '#6c757d', '#dc3545'],
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true, position: 'top' } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
      }
    });

    window.updateBarChart = function () {
      barChart.data.datasets[0].data = [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      ];
      barChart.update();
    };
  }

  // ===== Pie Chart =====
  const pieCtx = document.getElementById('pieChart')?.getContext('2d');
  if (pieCtx) {
    const pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Happy', 'Neutral', 'Stressed'],
        datasets: [{
          label: 'Mood Distribution',
          data: [12, 6, 4],
          backgroundColor: ['#28a745', '#6c757d', '#dc3545']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    window.updatePieChart = function () {
      pieChart.data.datasets[0].data = [
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      ];
      pieChart.update();
    };
  }

  // ===== Line Chart =====
  const lineCtx = document.getElementById('lineChart')?.getContext('2d');
  if (lineCtx) {
    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Average Mood Score',
          data: [3, 4, 2, 5, 3, 4, 3],
          borderColor: '#4b6cb7',
          backgroundColor: 'rgba(75,108,183,0.2)',
          tension: 0.4,
          fill: true
        }]
      },
      options: { responsive: true, plugins: { legend: { display: true, position: 'top' } } }
    });

    window.updateLineChart = function () {
      lineChart.data.datasets[0].data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 6) + 1);
      lineChart.update();
    };
  }
}

/* ===================================
   Webcam Page: Camera Demo
=================================== */
if (document.body.classList.contains("webcam-page")) {
  const video = document.getElementById('video');
  const snap = document.getElementById('snap');
  const status = document.getElementById('status');
  const canvas = document.getElementById('canvas');

  if (video && snap && status && canvas) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => { video.srcObject = stream; })
      .catch(err => { status.innerText = '❌ Webcam not working: ' + err; });

    snap.addEventListener('click', () => {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      // Demo: Random emotion
   const emotions = ['Happy', 'Sad', 'Angry', 'Anxious', 'Neutral','Bored'];
      const random = emotions[Math.floor(Math.random() * emotions.length)];
      status.innerText = `Detected Emotion: ${random}`;
      status.className = random;
    });
  }
}

const random = emotions[Math.floor(Math.random() * emotions.length)];
status.innerText = `Detected Emotion: ${random}`;
status.className = random;


/* ===================================
   Small Page Animations
=================================== */
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".container");
  containers.forEach(container => {
    container.style.opacity = "0";
    setTimeout(() => {
      container.style.transition = "opacity 1s";
      container.style.opacity = "1";
    }, 100);
  });
});
