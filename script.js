$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var popup = $('#popup');
    document.querySelector('#closeBtn').addEventListener('click', function() {
        close();
    });
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        popup.addClass("popup-open")
            .removeClass("popup-close")
            setTimeout(()=>{
                window.confettiful = new Confettiful(document.querySelector('.js-container'));
              
              },4400)
              
    }
    function close() {
        console.log("close");
        popup.addClass("popup-close")
           .removeClass("popup-open")
        document.querySelector('.js-container').innerHTML = '';
        setTimeout(function() {
            envelope.addClass("close")
                .removeClass("open");
        }, 1500);
    }
   
});


const Confettiful = function(el) {
    this.el = el;
    this.containerEl = null;
    
    this.confettiFrequency = 3;
    this.confettiColors = ['#000000', '#2b2983', '#6564a1', '#b2b2d3'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];
    
    this._setupElements();
    this._renderConfetti();
  };
  
  Confettiful.prototype._setupElements = function() {
    const containerEl = document.createElement('div');
    const elPosition = this.el.style.position;
    
    if (elPosition !== 'relative' || elPosition !== 'absolute') {
      this.el.style.position = 'absolute';
    }
    
    containerEl.classList.add('confetti-container');
    
    this.el.appendChild(containerEl);
    
    this.containerEl = containerEl;
  };
  
  Confettiful.prototype._renderConfetti = function() {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement('div');
      const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
      const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
      const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
      const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
      
      confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
      
      confettiEl.removeTimeout = setTimeout(function() {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
      
      this.containerEl.appendChild(confettiEl);
    }, 25);
  };
  

  
