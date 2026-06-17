import { useTexture } from '@react-three/drei'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Walls(props)
{  
    const [wallExtTexture, wallInTexture ] = useTexture(['./Textures/WallExt.jpg', './Textures/WallIn.jpg'])

    return <>
        <mesh
            geometry={props.nodes.WallExtMerge.geometry}
            position={[-0.006, 1.6, -4.011]}
            rotation={[0, 1.571, 0]}
        >
            <meshBasicMaterial map={wallExtTexture} map-flipY={false} side={ THREE.DoubleSide } />
        </mesh>

        <mesh
            geometry={props.nodes.WallInMerge.geometry}
            position={[0, 1.6, 3.9]}
        >
            <meshBasicMaterial map={wallInTexture} map-flipY={false} />
        </mesh>

        <mesh position={[4.02, 4.25, -3.8]} rotation={[0, Math.PI/2, 0.05]}>
            <planeGeometry args={[2.8, 1.2]} />
            <meshBasicMaterial color="#cb6e6f" />
        </mesh>
        
        <Text
            position={[4.03, 4.25, -3.8]}
            rotation={[0, Math.PI/2, 0.05]}
            fontSize={0.4}
            color="#5e7b5f"
            font="./fonts/font.ttf"
            maxWidth={3}
            textAlign="center"
        >
            Vivek's Portfolio{"\n"}Inside
        </Text>

    </>
}