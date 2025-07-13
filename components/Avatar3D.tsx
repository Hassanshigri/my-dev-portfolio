// "use client";

// import { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// interface Avatar3DProps {
//   className?: string;
// }

// export default function Avatar3D({ className = "" }: Avatar3DProps) {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const frameRef = useRef<number>();
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(300, 400);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create a simple geometric avatar
//     const group = new THREE.Group();

//     // Head (main sphere)
//     const headGeometry = new THREE.SphereGeometry(1, 32, 32);
//     const headMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x00FF00,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.8
//     });
//     const head = new THREE.Mesh(headGeometry, headMaterial);
//     head.position.y = 1;
//     group.add(head);

//     // Body (cylinder)
//     const bodyGeometry = new THREE.CylinderGeometry(0.8, 1, 2, 8);
//     const bodyMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x00AA00,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.6
//     });
//     const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
//     body.position.y = -0.5;
//     group.add(body);

//     // Arms
//     const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 8);
//     const armMaterial = new THREE.MeshPhongMaterial({ 
//       color: 0x00DD00,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.7
//     });
    
//     const leftArm = new THREE.Mesh(armGeometry, armMaterial);
//     leftArm.position.set(-1.2, 0, 0);
//     leftArm.rotation.z = Math.PI / 6;
//     group.add(leftArm);

//     const rightArm = new THREE.Mesh(armGeometry, armMaterial);
//     rightArm.position.set(1.2, 0, 0);
//     rightArm.rotation.z = -Math.PI / 6;
//     group.add(rightArm);

//     // Add some floating particles around the avatar
//     const particleCount = 50;
//     const particles = new THREE.BufferGeometry();
//     const particlePositions = new Float32Array(particleCount * 3);
    
//     for (let i = 0; i < particleCount * 3; i += 3) {
//       particlePositions[i] = (Math.random() - 0.5) * 10;
//       particlePositions[i + 1] = (Math.random() - 0.5) * 10;
//       particlePositions[i + 2] = (Math.random() - 0.5) * 10;
//     }
    
//     particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
//     const particleMaterial = new THREE.PointsMaterial({
//       color: 0x00FF00,
//       size: 0.1,
//       transparent: true,
//       opacity: 0.6
//     });
    
//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     group.add(particleSystem);

//     scene.add(group);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x00FF00, 0.4);
//     scene.add(ambientLight);

//     const pointLight = new THREE.PointLight(0x00FF00, 0.8, 100);
//     pointLight.position.set(10, 10, 10);
//     scene.add(pointLight);

//     camera.position.z = 5;

//     // Animation
//     let time = 0;
//     const animate = () => {
//       frameRef.current = requestAnimationFrame(animate);
//       time += 0.01;

//       // Idle animation
//       group.rotation.y = Math.sin(time) * 0.1;
//       head.rotation.y = Math.sin(time * 1.5) * 0.2;
      
//       // Breathing effect
//       const breathe = 1 + Math.sin(time * 2) * 0.05;
//       body.scale.y = breathe;

//       // Hover effects
//       if (isHovered) {
//         group.rotation.y += 0.02;
//         head.material.opacity = 1;
//         body.material.opacity = 0.8;
//         leftArm.rotation.z = Math.PI / 6 + Math.sin(time * 3) * 0.3;
//         rightArm.rotation.z = -Math.PI / 6 - Math.sin(time * 3) * 0.3;
//       } else {
//         head.material.opacity = 0.8;
//         body.material.opacity = 0.6;
//         leftArm.rotation.z = Math.PI / 6;
//         rightArm.rotation.z = -Math.PI / 6;
//       }

//       // Animate particles
//       const positions = particleSystem.geometry.attributes.position.array as Float32Array;
//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i + 1] += Math.sin(time + i) * 0.001;
//       }
//       particleSystem.geometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       if (frameRef.current) {
//         cancelAnimationFrame(frameRef.current);
//       }
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, [isHovered]);

//   return (
//     <div
//       ref={mountRef}
//       className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     />
//   );
// }