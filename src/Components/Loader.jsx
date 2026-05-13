import { Html, useProgress } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import "../Loader.css"

export default function Loader() {
  

  return (
    <Html fullscreen>
      <div className='carte'>        
        <p className='text'>Vivek's Portfolio...</p>
      </div>
    </Html>
  )
}