const video = document.getElementById('video');Add commentMore actions
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const snap = document.getElementById('snap');
const start = document.getElementById('start');
const download = document.getElementById('download');
const countdownSound = document.getElementById('countdown-sound');

start.onclick = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
};

snap.onclick = () => {
  snap.onclick = () => {
  const countdownText = document.getElementById('countdown');
  let count = 3;

  countdownText.style.display = 'block';
  countdownText.textContent = count;

  const countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownText.textContent = count;
    } else {
      clearInterval(countdownInterval);
      countdownText.textContent = '📸';
      setTimeout(() => {
        countdownText.style.display = 'none';

        // ambil gambar
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        const data = canvas.toDataURL('image/png');
        photo.src = data;
        photo.style.display = 'block';
      }, 500);
    }
  }, 1000);

  // Optional: bunyi countdown
  countdownSound.play();
};


download.onclick = () => {
  const link = document.createElement('a');
  link.download = 'photo.png';
  link.href = photo.src;
  link.click();
};