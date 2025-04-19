// @ts-nocheck
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import { ShaderMaterial, TextureLoader } from "three";

const CloudBackground = (props: any) => {
  const ref: any = useRef();
  const [clouds] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={clouds} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="lightgray"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const WaveBackground = () => {
  const ref = useRef<Mesh>();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 2;
    }
  });

  const waveShader = `
    varying vec2 vUv;
    uniform float time;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z += sin(uv.x * 10.0 + time) * 0.2;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const waveFragmentShader = `
    varying vec2 vUv;
    
    void main() {
      gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
    }
  `;

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        attach="material"
        args={[
          {
            vertexShader: waveShader,
            fragmentShader: waveFragmentShader,
            uniforms: {
              time: { value: 0 },
            },
          },
        ]}
      />
    </mesh>
  );
};



const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-0">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <WaveBackground/>
            <CloudBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;