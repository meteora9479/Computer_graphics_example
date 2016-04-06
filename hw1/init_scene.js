// once everything is loaded, we run our Three.js stuff.
function init() {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);


    // LIGHTS
    var ambientLight = new THREE.AmbientLight( 0x333333 );	// 0.2
    var light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );

    scene.add(ambientLight)
    scene.add(light)

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xAAAAAA );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.gammaInput = true;
    renderer.gammaOutput = true;


    //renderer.setClearColor(new THREE.Color(0xEEEEEE));
    //renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxisHelper(10000); // x is red, y is green, z is blue
    scene.add(axes);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(600, 200);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    //// create a cube
    //var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    //var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    //var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //
    //// position the cube
    //cube.position.x = 0;
    //cube.position.y = 0;
    //cube.position.z = 20;
    //
    //// add the cube to the scene
    //scene.add(cube);
    //
    //// create a sphere
    //var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    //var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
    //var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    //
    //// center of sphere
    //sphere.position.x = 50;
    //sphere.position.y = 0;
    //sphere.position.z = 0;
    //
    //// add the sphere to the scene
    //scene.add(sphere);

    // position and point the camera to the center of the scene
    camera.position.x = -20;
    camera.position.y = 50;
    camera.position.z = 120;
    camera.lookAt(scene.position);


    // MATERIALS
    var materialColor = new THREE.Color();
    materialColor.setRGB( 0, 1.0, 0 );


    //add teapot
    var teapot1, teapot2, teapot3, teapot4
    var teapotGeometry = new THREE.TeapotBufferGeometry( 10, -1, true, true, true, true, true );
    var wireframe_material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    var flatMaterial = new THREE.MeshPhongMaterial( { color: materialColor, specular: 0x0, shading: THREE.FlatShading, side: THREE.DoubleSide } );
    var gouraudMaterial = new THREE.MeshLambertMaterial( { color: materialColor, side: THREE.DoubleSide } );
    var phongMaterial = new THREE.MeshPhongMaterial( { color: materialColor, shading: THREE.SmoothShading, side: THREE.DoubleSide } );


    teapot1 = new THREE.Mesh( teapotGeometry, wireframe_material )
    teapot2 = new THREE.Mesh( teapotGeometry, flatMaterial )
    teapot3 = new THREE.Mesh( teapotGeometry, gouraudMaterial )
    teapot4 = new THREE.Mesh( teapotGeometry, phongMaterial )

    teapot1.position.x = -60
    teapot1.position.y = 10
    teapot1.position.z = 0
    scene.add( teapot1 );

    teapot2.position.x = -20
    teapot2.position.y = 10
    teapot2.position.z = 0
    scene.add( teapot2 );

    teapot3.position.x = 20
    teapot3.position.y = 10
    teapot3.position.z = 0
    scene.add( teapot3 );

    teapot4.position.x = 60
    teapot4.position.y = 10
    teapot4.position.z = 0
    scene.add( teapot4 );
    
    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}
window.onload = init;
