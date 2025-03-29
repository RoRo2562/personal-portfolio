import { useGLTF } from "@react-three/drei";

// Load and render GLTF model
const JavascriptLogo = ({ 'path' }: { path: string }) => {
    const { scene } = useGLTF(path);
  
    return <primitive object={scene} />;
  };