import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AvatarPreviewProps {
  avatarUrl: string;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ avatarUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load(avatarUrl, (gltf) => {
      scene.add(gltf.scene);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [avatarUrl]);

  return <div ref={mountRef} className="w-full h-64 bg-gray-700 rounded-lg"></div>;
};

export default AvatarPreview;