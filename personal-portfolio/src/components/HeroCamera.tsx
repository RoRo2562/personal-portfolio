import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({children,isMobile}) => {
    const groupRef = useRef();
    useFrame((state,delta) =>{
        easing.damp3(state.camera.position,[0,0,20],0.25,delta);
        if(!isMobile){
          // Calculate the target rotation
          const targetRotationY = -state.pointer.y / 3;
          const targetRotationX = -state.pointer.x / 5;

          // Set limits for Y rotation (e.g., between -1 and 1 radians)
          const clampedRotationY = Math.max(Math.min(targetRotationY, 1), 0.05);
          easing.dampE(groupRef.current.rotation,[clampedRotationY, targetRotationX,0],0.25,delta)
        
    }
    })
    
  return (
    <group ref={groupRef}>{children}</group>
  )
}

export default HeroCamera