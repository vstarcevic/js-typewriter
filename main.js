document.addEventListener("DOMContentLoaded", function() {
  
  var p = document.getElementById('text');
  p.innerHTML = '';
  var blink = false;
  
  var str = ['This is simple example of typewriting effect blinker.', 'You can have multiple lines of different text if you like.', 'Lorem ipsum.']

  const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  var writter = (text) = async function(text) { 
    for (let i = 0; i <= text.length; i++) {
      p.innerHTML = text.slice(0, i);
      if (i % 2 == 0 && i != text.length) {
          p.innerHTML += "|";
      }
      await sleep(60);
    }

    await blinker(text)
  };

  var blinker = (text) = async function(text) {
    for (let i = 0; i < 20; i++) {
      if (blink) {
          p.innerHTML = text;
        }  else {
        p.innerHTML += "|";
      }
      blink = !blink;
      await sleep(260);
    }
  }
  
  var write = async function() {
      for (let i = 0; i < str.length ; i++) { 
          var p = document.getElementById('text');
          p.innerHTML = '';
          await writter(str[i]);    
      }
      console.log('writting finished')
  }

  write();
  console.log('writting in progress')

});