import React, { useEffect, useRef } from 'react';
import './LeafAnimation.css';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';
import leaf3 from '../assets/leaf3.png';
// Import additional leaf images as needed

const leafImages = [leaf1, leaf2, leaf3]; // Add more images if needed

const LeafAnimation = () => {
  const leafContainerRef = useRef(null);

  useEffect(() => {
    const leafContainer = leafContainerRef.current;
    const leafCount = 50; // Number of leaves

    const createLeaf = () => {
      const leaf = document.createElement('img');
      const randomLeafImage = leafImages[Math.floor(Math.random() * leafImages.length)];
      leaf.src = randomLeafImage; // Use a random leaf image
      leaf.className = 'leaf';
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${Math.random() * 10 + 5}s`; // Adjust duration if needed
      leaf.style.animationDelay = `${Math.random() * 10}s`;
      leaf.style.width = `${Math.random() * 20 + 30}px`; // Random size for variety
      leaf.style.opacity = Math.random();
      leafContainer.appendChild(leaf);
      
      // Remove leaf element after animation
      leaf.addEventListener('animationend', () => {
        leaf.remove();
      });
    };

    const startLeafAnimation = () => {
      for (let i = 0; i < leafCount; i++) {
        createLeaf();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLeafAnimation(); // Start animation when container is in view
          // Optionally, recreate leaves every 10 seconds
          const interval = setInterval(() => {
            createLeaf();
          }, 10000);

          return () => clearInterval(interval);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1 // Adjust as needed
      }
    );

    if (leafContainer) {
      observer.observe(leafContainer);
    }

    return () => {
      if (leafContainer) {
        observer.unobserve(leafContainer);
      }
    };
  }, []);

  return <div className="leaf-container" ref={leafContainerRef}></div>;
};

export default LeafAnimation;
