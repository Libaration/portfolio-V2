import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import room from '../assets/room.gltf';
import { Box, Flex } from '@chakra-ui/react';
export class BlenderHeader extends Component {
  constructor() {
    super();
    this.rootRef = React.createRef();
  }
  componentDidMount() {
    const gui = new dat.GUI();
    const sizes = {
      width: this.rootRef.current.offsetWidth,
      height: this.rootRef.current.offsetHeight,
    };
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load(
      room,
      function (gltf) {
        gltf.scene.scale.set(0.8, 0.8, 0.8);
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.scale.multiplyScalar(1 / 10);
        gltf.scene.position.x = 0;
        gltf.scene.position.y = -0.2;
        gui.add(gltf.scene.position, 'x').max(10).min(-10);
        gui.add(gltf.scene.position, 'y').max(10).min(-10);
        gui.add(gltf.scene.position, 'z').max(10).min(-10);

        scene.add(gltf.scene);
      },
      function (error) {
        console.log(error);
      }
    );
    const light = new THREE.DirectionalLight(0xffffff, 0.3);
    light.castShadow = true;
    light.shadow.radius = 8;
    light.position.set(2, 2, 9);
    scene.add(light);
    const light2 = new THREE.DirectionalLight(0xffffff, 0.1);
    light2.castShadow = true;
    light2.shadow.radius = 8;
    light2.position.set(9, 9, 0);
    const filllight = new THREE.PointLight(0xffffff, 0.5);
    filllight.castShadow = true;
    filllight.position.set(0, 0, 1);
    const pointlight = new THREE.PointLight(0xffffff, 1);
    pointlight.position.set(9, 0, 0);
    scene.add(filllight);
    scene.add(pointlight);
    scene.add(light2);
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

    camera.position.set(1, 0.1, 0);

    gui.add(camera.position, 'x').max(10).min(-10);
    gui.add(camera.position, 'y').max(10).min(-10);
    gui.add(camera.position, 'z').max(10).min(-10);
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
        mt={-10}
      >
        <Box
          overflow="visible"
          id="three"
          ref={this.rootRef}
          w={'100%'}
          h={'102%'}
        ></Box>
      </Flex>
    );
  }
}

export default BlenderHeader;
