const animatedText = document.querySelector('.animated-text');
const animatedLines = document.querySelectorAll('.animated-line');

function showLinesWithDelay() {
  animatedLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = '1';
    }, (index + 1) * 1500);
  });
  setTimeout(() => {
    animatedLines.forEach(line => {
      line.style.opacity = '0';
    });
    showLinesWithDelay();
  }, (animatedLines.length + 1) * 1500);
}

setTimeout(() => {
  animatedText.style.visibility = 'visible';
  showLinesWithDelay();
}, 2000);