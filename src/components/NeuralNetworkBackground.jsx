import { useEffect, useRef } from 'react';
import styles from '../styles/NeuralNetworkBackground.module.css';

function NeuralNetworkBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const mouse = { x: null, y: null, radius: 150 };
        let targetOffsetX = 0;
        let targetOffsetY = 0;
        let currentOffsetX = 0;
        let currentOffsetY = 0;

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;

            // Parallax target offset based on mouse position from center
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            // The further the mouse is from center, the more it shifts
            targetOffsetX = (event.x - centerX) * 0.25;
            targetOffsetY = (event.y - centerY) * 0.25;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
            targetOffsetX = 0;
            targetOffsetY = 0;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        const config = {
            particleCount: 150,
            particleColor: 'rgba(0, 171, 240, 1)',
            lineColor: 'rgba(0, 171, 240, ',
            maxDistance: 180,
            speed: 0.35
        };

        const updateColors = () => {
            const theme = document.documentElement.getAttribute('data-theme') || 'dark';
            if (theme === 'light') {
                config.particleColor = 'rgba(0, 171, 240, 1)'; // Vibrant brand color
                config.lineColor = 'rgba(0, 150, 220, ';       // Strong brand color line
            } else {
                config.particleColor = 'rgba(0, 171, 240, 1)'; // Vibrant brand color
                config.lineColor = 'rgba(0, 171, 240, ';       // Strong brand color line
            }
        };

        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        updateColors();

        let particles = [];

        class Particle {
            constructor(cWidth, cHeight) {
                const margin = 100;
                this.x = Math.random() * (cWidth + margin * 2) - margin;
                this.y = Math.random() * (cHeight + margin * 2) - margin;
                this.vx = (Math.random() - 0.5) * config.speed;
                this.vy = (Math.random() - 0.5) * config.speed;
                this.radius = Math.random() * 5 + 4; // Massive dots
                this.depth = Math.random() * 0.8 + 0.5; // Stronger parallax
            }

            update(cWidth, cHeight) {
                const margin = 100;
                if (this.x < -margin || this.x > cWidth + margin) this.vx = -this.vx;
                if (this.y < -margin || this.y > cHeight + margin) this.vy = -this.vy;

                this.x += this.vx;
                this.y += this.vy;
            }

            getDrawPosition() {
                return {
                    x: this.x + currentOffsetX * this.depth,
                    y: this.y + currentOffsetY * this.depth
                };
            }

            draw(ctx) {
                const pos = this.getDrawPosition();
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = config.particleColor;
                ctx.fill();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            let count = Math.floor((canvas.width * canvas.height) / 8000);
            config.particleCount = count > 220 ? 220 : count;

            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                const posI = particles[i].getDrawPosition();

                for (let j = i + 1; j < particles.length; j++) {
                    const posJ = particles[j].getDrawPosition();
                    const dx = posI.x - posJ.x;
                    const dy = posI.y - posJ.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.maxDistance) {
                        const opacity = 1 - (distance / config.maxDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `${config.lineColor}${opacity * 0.9})`;
                        ctx.lineWidth = 3.5; // Extra thick lines
                        ctx.moveTo(posI.x, posI.y);
                        ctx.lineTo(posJ.x, posJ.y);
                        ctx.stroke();
                    }
                }

                if (mouse.x && mouse.y) {
                    const dx = mouse.x - posI.x;
                    const dy = mouse.y - posI.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const opacity = 1 - (distance / mouse.radius);
                        ctx.beginPath();
                        ctx.strokeStyle = `${config.lineColor}${opacity})`;
                        ctx.lineWidth = 5.5; // Extra thick lines connected to mouse
                        ctx.moveTo(posI.x, posI.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // LERP for smooth parallax
            currentOffsetX += (targetOffsetX - currentOffsetX) * 0.05;
            currentOffsetY += (targetOffsetY - currentOffsetY) * 0.05;

            particles.forEach(Particle => {
                Particle.update(canvas.width, canvas.height);
                Particle.draw(ctx);
            });

            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener('resize', resize);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas className={styles.canvasBackground} ref={canvasRef} />
    );
}

export default NeuralNetworkBackground;
