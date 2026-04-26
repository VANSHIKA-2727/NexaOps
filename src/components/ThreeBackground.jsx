import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground
 * A reusable Three.js canvas that renders an animated particle network.
 * Props:
 *   particleCount  – number of floating points  (default 120)
 *   color          – hex color string           (default '#1d6fa4')
 *   opacity        – overall scene opacity      (default 0.55)
 *   speed          – animation speed multiplier (default 1)
 *   style          – extra inline styles on container
 */
export default function ThreeBackground({
  particleCount = 120,
  color = '#1d6fa4',
  opacity = 0.55,
  speed = 1,
  style = {},
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ─── Scene ─── */
    const scene = new THREE.Scene();

    /* ─── Camera ─── */
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 180;

    /* ─── Renderer ─── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ─── Particles ─── */
    const spread = 200;
    const positions = [];
    const velocities = [];
    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * 80
      );
      velocities.push(
        (Math.random() - 0.5) * 0.12 * speed,
        (Math.random() - 0.5) * 0.12 * speed,
        (Math.random() - 0.5) * 0.06 * speed
      );
    }

    const ptGeo = new THREE.BufferGeometry();
    const ptArr = new Float32Array(positions);
    ptGeo.setAttribute('position', new THREE.BufferAttribute(ptArr, 3));

    const ptMat = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: 1.6,
      sizeAttenuation: true,
      transparent: true,
      opacity,
    });
    const points = new THREE.Points(ptGeo, ptMat);
    scene.add(points);

    /* ─── Lines (connections) ─── */
    const lineGeo = new THREE.BufferGeometry();
    const maxLines = particleCount * 3;
    const linePositions = new Float32Array(maxLines * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: opacity * 0.35,
      })
    );
    scene.add(lineMat);

    /* ─── Mouse parallax ─── */
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ─── Resize ─── */
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    /* ─── Animation ─── */
    let frameId;
    const half = spread / 2;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const pos = ptGeo.attributes.position.array;

      /* Move particles */
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i3];
        pos[i3 + 1] += velocities[i3 + 1];
        pos[i3 + 2] += velocities[i3 + 2];

        /* Wrap bounds */
        if (pos[i3] > half) pos[i3] = -half;
        if (pos[i3] < -half) pos[i3] = half;
        if (pos[i3 + 1] > half) pos[i3 + 1] = -half;
        if (pos[i3 + 1] < -half) pos[i3 + 1] = half;
      }
      ptGeo.attributes.position.needsUpdate = true;

      /* Build line segments for nearby particles */
      const threshold = 52;
      let lineIdx = 0;
      for (let i = 0; i < particleCount && lineIdx < maxLines; i++) {
        for (let j = i + 1; j < particleCount && lineIdx < maxLines; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < threshold) {
            linePositions[lineIdx * 6] = pos[i * 3];
            linePositions[lineIdx * 6 + 1] = pos[i * 3 + 1];
            linePositions[lineIdx * 6 + 2] = pos[i * 3 + 2];
            linePositions[lineIdx * 6 + 3] = pos[j * 3];
            linePositions[lineIdx * 6 + 4] = pos[j * 3 + 1];
            linePositions[lineIdx * 6 + 5] = pos[j * 3 + 2];
            lineIdx++;
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx * 2);
      lineGeo.attributes.position.needsUpdate = true;

      /* Subtle camera parallax */
      camera.position.x += (mouse.x * 20 - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y * 20 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      lineGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [particleCount, color, opacity, speed]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
}
