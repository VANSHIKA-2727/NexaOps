import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function MiniThreeScene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, el.clientWidth / el.clientHeight, 0.1, 500);
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* Torus knot centerpiece */
    const knotGeo = new THREE.TorusKnotGeometry(22, 5, 120, 18, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x1d6fa4,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    /* Floating particles ring */
    const pts = [];
    for (let i = 0; i < 90; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 60 + Math.random() * 30;
      pts.push(Math.cos(theta) * r, (Math.random() - 0.5) * 60, Math.sin(theta) * r);
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0x4da6e0, size: 1.4, transparent: true, opacity: 0.7 });
    scene.add(new THREE.Points(ptGeo, ptMat));

    /* Ambient + directional light */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dLight = new THREE.DirectionalLight(0x4da6e0, 1.2);
    dLight.position.set(50, 80, 50);
    scene.add(dLight);

    const resize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', resize);

    let frame;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      knotGeo.dispose(); knotMat.dispose(); ptGeo.dispose(); ptMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.6 }} />
  );
}

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--navy-deep) 60%, var(--bg-dark) 100%)',
        paddingTop: '100px',
        paddingBottom: '36px',
        paddingLeft: '32px',
        paddingRight: '32px',
        borderBottom: '1px solid rgba(77,166,224,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Three.js scene */}
      <MiniThreeScene />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(77,166,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,224,0.06) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Glow */}
      <div style={{ position: 'absolute', top: '-40%', right: '10%', width: '500px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,111,164,0.22) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {breadcrumb && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px', fontSize: '0.76rem', color: 'var(--tx-light-dim)' }}>
            <Link to="/" style={{ color: 'var(--tx-light-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ac-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--tx-light-dim)'}>
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--ac-light)' }}>{breadcrumb}</span>
          </div>
        )}
        <h1 style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          fontWeight: 900,
          color: 'var(--tx-light)',
          lineHeight: 1.1,
          marginBottom: subtitle ? '10px' : 0,
          letterSpacing: '-0.02em',
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '1.05rem', color: 'var(--tx-light-dim)', maxWidth: '580px', lineHeight: 1.65 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
