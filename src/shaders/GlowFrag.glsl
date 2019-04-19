uniform float time;
uniform sampler2D noise;
varying vec2 vUv;

void main() {
  vec4 noiseCol = texture2D(noise, vUv);
  gl_FragColor = abs(vec4(sin(time / 1000.0) * noiseCol.x, 0.0, 0.0, 1.0));
}
