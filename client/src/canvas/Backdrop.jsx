import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intenisty={0.75}
        ambient={0.25}
        position={[5, 5, -8]}
      />

      <RandomizedLight
        amount={2}
        radius={5}
        intenisty={0.25}
        ambient={0.75}
        position={[-5, 5, -8]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop