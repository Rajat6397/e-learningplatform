// Sign Up Form Handling
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    document.getElementById('signupMessage').textContent = `Welcome, ${username}! You have successfully signed up.`;
  });
  
  // File Upload
  document.getElementById('fileUpload').addEventListener('change', function (e) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    Array.from(e.target.files).forEach(file => {
      const listItem = document.createElement('p');
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
    });
  });
  
  // Quiz Form Handling
  document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const answers = { q1: 'Hyper Text Markup Language', q2: 'Styling' };
    let score = 0;
  
    Object.keys(answers).forEach(q => {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
        score++;
      }
    });
  
    document.getElementById('quizResult').textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;
  });
  
  // Communication
  function sendMessage() {
    const messageBox = document.getElementById('messageBox');
    const message = messageBox.value;
    if (message.trim()) {
      const messages = document.getElementById('messages');
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      messages.appendChild(newMessage);
      messageBox.value = '';
    }
  }
  
  // Admin Dashboard Chart (Using Chart.js)
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Students', 'Documents', 'Assessments'],
        datasets: [{
          label: 'Statistics',
          data: [30, 50, 20],
          backgroundColor: ['red', 'blue', 'green']
        }]
      }
    });
  });
  