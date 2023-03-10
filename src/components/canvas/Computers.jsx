import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader"
const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  // const mesh = new THRE .Mesh()

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={isMobile ? [0,-3,-2.2]:[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.7: 0.75} position={[0,-3.25,-1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const[isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches)

    const handleMediaQuryChange = (event) => {
      setIsMobile(event.matches)
      
    }

    mediaQuery.addEventListener('change', handleMediaQuryChange)

    mediaQuery.removeEventListener('change', handleMediaQuryChange)
  
  },[])
  return(
    <Canvas frameloop="demand" shadows camera={{position: [20,3,5], fov:25}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
            enableZoom={false}
            // The below props enable to only rotate the computer around a specific axis
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}

            />
            <Computers isMobile={isMobile} />

            <Preload all />
        </Suspense>
    </Canvas>
  )
}

export default ComputersCanvas