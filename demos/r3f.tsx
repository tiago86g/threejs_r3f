import {Canvas, ThreeElements, useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh} from "three";
import {OrbitControls} from "@react-three/drei";

function Cube( props: ThreeElements['mesh'] ) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
     });

     return(
     <mesh {...props} ref={meshRef}>
         <boxGeometry args={ [0.01, 2, 3 ] }>
         </boxGeometry>
         <pointLight  position={[ 1, 1, 1 ]}/>
         <pointLight  position={[ -5, -8, -1 ]} color={'green'}/>
         <meshStandardMaterial color={'deepPink'} />
     </mesh>
         )
 }


export default function R3fDemo() {
  return (
        <Canvas style={{height: '100%'}}>
            <OrbitControls/>
            <Cube/>
{/*
            <Cube position={[-2, 0, 0]}/>
*/}
        </Canvas>
  );
}
