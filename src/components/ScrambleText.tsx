import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

export default function ScrambleText({ text, className }: { text: string, className?: string }) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        let frameRequest: number;
        let frame = 0;
        const queue: { from: string, to: string, start: number, end: number, char?: string }[] = [];
        let isAnimating = false;
        
        const setText = () => {
            let output = '';
            let complete = 0;
            for (let i = 0; i < queue.length; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = CHARS[Math.floor(Math.random() * CHARS.length)];
                        queue[i].char = char;
                    }
                    output += `<span class="text-zinc-500">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            if (textRef.current) {
                textRef.current.innerHTML = output;
            }
            
            if (complete === queue.length) {
                cancelAnimationFrame(frameRequest);
                isAnimating = false;
            } else {
                frameRequest = requestAnimationFrame(setText);
                frame++;
            }
        };

        const scramble = () => {
            if (isAnimating) return;
            isAnimating = true;
            const length = text.length;
            queue.length = 0; // Clear queue
            for (let i = 0; i < length; i++) {
                const from = text[i] || '';
                const to = text[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(frameRequest);
            frame = 0;
            setText();
        };

        const trigger = ScrollTrigger.create({
            trigger: textRef.current,
            start: "top 90%",
            onEnter: scramble,
            once: true
        });

        return () => {
            cancelAnimationFrame(frameRequest);
            trigger.kill();
        };
    }, [text]);

    return <span ref={textRef} className={className}>{text}</span>;
}
