document.onmousemove = animatedCircles;

        const colors = ['#ff1f1f', '#ffd043', '#255eff', '#9232ff'];

        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX +20 + 'px';
            circle.style.top = event.clientY +20 + 'px';

            let color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = 'all 0.5s linear 0s';

            circle.style.left = circle.offsetLeft - 20 + 'px';
            circle.style.top = circle.offsetTop - 20 + 'px';

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '3px';
            circle.style.opacity = 0;
        }


// source - https://codepen.io/jkjaikrishna/pen/ExVmOOx
