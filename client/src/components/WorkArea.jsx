import { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ArmFile from '../assets/models/arm.glb';

// This is a test component of a simple box used for testing

// const MyMesh = () => {
// 	const meshRef = useRef(null)
	
// 	useFrame(() => {
// 		if(!meshRef.current) return 
// 		meshRef.current.rotation.x += 0.01;
// 		meshRef.current.rotation.y += 0.01;
// 	})

// 	return (
// 		<mesh ref={meshRef} position={[0, 5, 0]}>
// 			<boxGeometry args={[2, 2, 2]}/>
// 			<meshPhysicalMaterial color={"green"}/>
// 			<ambientLight />
// 			<pointLight position={[10, 10, 10]}/>
// 		</mesh>
// 	)
// }

const scale = 0.02

const Base = () => {
	const [clock, setClock] = useState(new THREE.Clock())
	const [armBase, setArmBase] = useState(null)
	const [lowerArm, setLowerArm] = useState(null)
	const [centerArm, setCenterArm] = useState(null)
	const [upperArm, setUpperArm] = useState(null)
	const [gripperMount, setGripperMount] = useState(null)

	const arm = useLoader(GLTFLoader, ArmFile)
	const {camera} = useThree()

	
	useEffect(() => {
		const model = arm.scene
		setArmBase(model.getObjectByName("Arm_Base"))
		setLowerArm(model.getObjectByName("Lower_Arm"))
		setCenterArm(model.getObjectByName("Center_Arm"))
		setUpperArm(model.getObjectByName("Upper_Arm"))
		setGripperMount(model.getObjectByName("Gripper_Mount"))
	}, [])
	
	useFrame(() => {
		const t = clock.getElapsedTime()
		// if(armBase) armBase.rotation.z += 0.05
		centerArm.rotation.x = Math.PI / 2 + Math.PI / 4
		upperArm.rotation.x = - Math.PI / 4
		// if(centerArm) {centerArm.rotation.x = (centerArm.rotation.x + 0.005 ) % 2 }
		// if(lowerArm) {lowerArm.rotation.x = Math.PI / 2}

		// if(upperArm) upperArm.rotation.x += t * 0.005
		// if(gripperMount) gripperMount.rotation.y += t * 0.005

	})

	return (
		<primitive object={arm.scene} scale={scale}/>
	)
}

const WorkArea = () => {


	return (
		<div className="workarea flex-grow-1">
			<Canvas>
				<PerspectiveCamera fov={75} position={[10, 10, -10]} makeDefault/>
				<OrbitControls />
				<primitive object={new THREE.AxesHelper(10)} />
				<primitive object={new THREE.GridHelper(20, 20, '#aaa', '#ccc')}/>
				{/* <Suspense fallback={null}>
					<Base />
				</Suspense> */}
				<pointLight position={[0, 10, 0]}/>
				<pointLight position={[-10, 10, -10]}/>
			</Canvas>
		</div>
	)
}

export default WorkArea