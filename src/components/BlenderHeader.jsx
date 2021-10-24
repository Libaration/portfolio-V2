import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import roomRender from '../assets/roomRender.gltf';
import { Box, Flex, Spinner } from '@chakra-ui/react';

export class BlenderHeader extends Component {
  constructor() {
    super();
    this.rootRef = React.createRef();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    // const gui = new dat.GUI();

    const sizes = {
      width: this.rootRef.current.offsetWidth,
      height: this.rootRef.current.offsetHeight,
    };
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load(
      roomRender,
      gltf => {
        gltf.scene.scale.set(0.8, 0.8, 0.8);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.multiplyScalar(1 / 10);
        gltf.scene.position.x = 0;
        gltf.scene.position.y = -0.2;
        scene.add(gltf.scene);
        this.setState({ loading: false });
        this.rootRef.current.style.display = 'block';
      },
      xhr => {
        this.setState({ loading: true });
      },
      function (error) {
        console.log(error);
      }
    );
    //Lights

    const keyLight = new THREE.DirectionalLight(0x3373ff, 0.05);
    keyLight.castShadow = false;
    keyLight.shadow.radius = 8;
    keyLight.position.set(10, 0, 0);
    scene.add(keyLight);
    const backLight = new THREE.SpotLight(0xffffff, 0.8);
    backLight.position.set(0, 0.25, 0.16);
    backLight.castShadow = true;
    backLight.shadow.radius = 20;
    scene.add(backLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );

    scene.add(camera);
    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableDamping = true;
    controls.maxAzimuthAngle = (200 * Math.PI) / 80;
    controls.minAzimuthAngle = (160 * Math.PI) / 80;
    controls.maxDistance = 2;
    controls.minDistance = 0.3;
    camera.position.set(1, 0.1, 0);

    controls.update();
    renderer.setSize(sizes.width, sizes.height);
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;

    this.rootRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', function () {
      const width = document.getElementById('three').clientWidth;
      const height = document.getElementById('three').clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }

  render() {
    return (
      <Flex
        justifyContent="center"
        overflow="visible"
        h={[300, 400, 480]}
        mt={-12}
        zIndex={0}
      >
        <Box width="100%" textAlign="center" position="relative">
          {this.state.loading ? (
            <Spinner
              size="xl"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
            />
          ) : (
            ''
          )}
          <Box
            display="hidden"
            overflow="visible"
            id="three"
            ref={this.rootRef}
            w={'100%'}
            h={'130%'}
            zIndex={0}
          ></Box>
        </Box>
      </Flex>
    );
  }
}

export default BlenderHeader;
