import AFRAME from 'aframe';
import JSX from './JSX';
import './components/Spinner';
import './components/GlowMaterial';
import CameraRig from './CameraRig';


const App = () => (
  <a-scene background="color: black">
    <a-camera position="0 0 4" />
    {CameraRig()}
    <a-box
      spinner
      glow-material
    />
  </a-scene>
);

document.querySelector('body').appendChild(App());
