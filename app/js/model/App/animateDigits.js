import { debounce } from "./Utils/debounce.js";



export const animateDigits = (digits, section) => {
    let isAnimated = false;

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      



      function handleScroll(e){
        let { top } = section.getBoundingClientRect();
        if(top < 300 && !isAnimated) {
            digits.forEach(d => {
                animateValue(d, 0, (+d.dataset.count), 3500);
                isAnimated = true;
            });

        }
      }

      handleScroll = debounce(handleScroll, 150);
      window.addEventListener('scroll', handleScroll);
}