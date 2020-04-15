import AFRAME from 'aframe';
import JSX from './JSX';
import './components/CustomControl';

const CameraRig = () => (
  <a-entity id="cameraRig" position="0 0 4">
    <a-camera id="camera" />
    <a-entity oculus-go-controls />
    <a-entity custom-control="hand: left" mover visible="false" />
    <a-entity custom-control="hand: right" mover visible="false" />
  </a-entity>
);

export default CameraRig;
