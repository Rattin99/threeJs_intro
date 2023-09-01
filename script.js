import * as THREE from './node_modules/three/build/three.module.js'


console.log(THREE)

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

//red cube

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'red'})
)
cube1.position.x = -1
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'blue'})
)
cube2.position.x = -3
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'})
)

cube3.position.x = 3

const group =  new THREE.Group()

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.position.y =1
// group.scale.y = 1.5
// group.rotation.y = 1
scene.add(group)

const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height)

camera.position.set(.5,1,8)
scene.add(camera)


const tick = () => {
    
    group.rotation.x += 0.01
    group.rotation.y += 0.01
    group.rotation.z += 0.01

    renderer.render(scene,camera)

    window.requestAnimationFrame(tick)


}



//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


renderer.setSize(sizes.width,sizes.height)




tick()