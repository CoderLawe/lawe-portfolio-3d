import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from "../Loader";
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
const Ball = ({ imgUrl }) => {

  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.75} rotationIntesity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1,1]}/>
          <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
          <Decal position={[0,0,1]} rotation={[2*Math.PI, 0, 6.25]}  flatShading map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas frameloop="demand" gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
            enableZoom={false}
            // The below props enable to only rotate the computer around a specific axis
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}

            />
            <Ball imgUrl={icon}/>
            <Preload all />
        </Suspense>
    </Canvas>
  )
}

export default BallCanvas