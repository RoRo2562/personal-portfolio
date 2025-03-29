import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

const Target = (props) => {
    const targetRef = useRef();
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    useEffect(() => {
        if (!targetRef.current) return; // Ensure ref is assigned
    
        gsap.to(targetRef.current.position, {
          y: (targetRef.current.positionY) + 0.5, // Ensure positionY is valid
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        });
      }, []);
  return (
    <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5, 0]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Target