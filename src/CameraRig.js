import AFRAME from 'aframe';
import JSX from './JSX';

const CameraRig = () => (
  <a-entity id="cameraRig" position="0 0 4">
    <a-camera />
    <a-entity
      oculus-go-controls
    />
  </a-entity>
);

export default CameraRig;
