
        // Create floating hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = ['💖', '💗', '💓', '💘', '💕', '💌'][Math.floor(Math.random()*6)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = 5 + Math.random() * 5 + 's';
            heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
            document.getElementById('floatingHearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
        
        // Initial hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 300);
        }
        
        // Continuous hearts
        setInterval(createHeart, 500);
        
        // Fireworks effect on load
        function createFirework() {
            const colors = ['#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#ff1493'];
            const particles = 30;
            
            for (let i = 0; i < particles; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = '8px';
                particle.style.height = '8px';
                particle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.left = 50 + '%';
                particle.style.top = 50 + '%';
                particle.style.opacity = '0';
                particle.style.transform = 'translate(-50%, -50%)';
                particle.style.zIndex = '10';
                document.body.appendChild(particle);
                
                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 100;
                const duration = 1 + Math.random() * 1;
                
                setTimeout(() => {
                    particle.style.opacity = '1';
                    particle.style.transition = `all ${duration}s ease-out`;
                    particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
                    particle.style.opacity = '0';
                    
                    setTimeout(() => {
                        particle.remove();
                    }, duration * 1000);
                }, i * 30);
            }
        }
        
        // Fireworks on load
        setTimeout(createFirework, 800);
        setTimeout(createFirework, 1200);
        setTimeout(createFirework, 1600);
