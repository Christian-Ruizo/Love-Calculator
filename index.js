const predictBtn = document.querySelector('.btn');
const messageContainer = document.querySelector('.message-container');

// Load drum sounds
const drumSounds = {
  kick: 'sounds/kick-bass.mp3',
  snare: 'sounds/snare.mp3',
  crash: 'sounds/crash.mp3'
};

function generateRandomChances() {
  var chances = Math.floor(Math.random() * 101);
  return chances;
}

function playDrumSound(soundName) {
  const soundPath = drumSounds[soundName];
  const audio = new Audio(soundPath);
  audio.play();
}

function updateChance() {
  var chance = generateRandomChances();
  var percentNum = document.querySelector('.percentNum');
  percentNum.textContent = chance;
  var interval = 50; // Time interval between each roll (in milliseconds)
  var duration = 1500; // Total duration of the rolling effect (in milliseconds)
  var frames = duration / interval; // Number of frames

  var chance = generateRandomChances();
  var percentNum = document.querySelector('.percentNum');

  var currentFrame = 0;
  var currentChance = 0;

  var rollingInterval = setInterval(function() {
    if (currentFrame === frames) {
      clearInterval(rollingInterval);
      percentNum.textContent = chance;

      //Clear previous message
      messageContainer.textContent = '';

      //Display pop-up statement based on chance
      if (chance >= 0 && chance <= 10) {
        showMessage("There's no chance for you! Sorry.");
        playDrumSound("crash");
      } else if (chance >= 11 && chance <= 40) {
        showMessage("Mmmmh... There's a chance but work on it!");
        playDrumSound("kick");
      } else if (chance >= 41 && chance <= 60) {
        showMessage("Set a Date now!");
         playDrumSound("snare");
      } else if (chance >= 61 && chance <= 89) {
        showMessage("Future Girlfriend/Boyfriend!");
        playDrumSound("snare");
        playDrumSound("kicks");
      } else if (chance >= 90 && chance <= 97) {
        showMessage("Hello, Church!");
        playDrumSound("snare");
        playDrumSound("crash");
      } else if (chance >= 98 && chance <= 100) {
        showMessage("Match made in Heaven! Sana All!");
        playDrumSound("snare");
        playDrumSound("kick");
        playDrumSound("crash");
      }

      return;
    }
    
    currentChance = generateRandomChances();
    percentNum.textContent = currentChance;

    currentFrame++;
  }, interval);
}

function showMessage(message) {
  var messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

predictBtn.addEventListener('click', updateChance);