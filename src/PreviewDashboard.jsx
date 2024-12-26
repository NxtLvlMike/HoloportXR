import React, { useEffect, useRef } from 'react';
    import * as THREE from 'three';

    const PreviewDashboard = ({ characterSettings }) => {
      const mountRef = useRef(null);

      useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(400, 400);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
          requestAnimationFrame(animate);

          // Update cube position, orientation, and size based on characterSettings
          cube.position.set(characterSettings.position.x, characterSettings.position.y, characterSettings.position.z);
          cube.rotation.set(characterSettings.orientation.x, characterSettings.orientation.y, characterSettings.orientation.z);
          cube.scale.set(characterSettings.size, characterSettings.size, characterSettings.size);

          renderer.render(scene, camera);
        };

        animate();

        return () => {
          mountRef.current.removeChild(renderer.domElement);
        };
      }, [characterSettings]);

      return <div ref={mountRef} style={{ width: '400px', height: '400px', border: '1px solid #ccc' }} />;
    };

    export default PreviewDashboard;
