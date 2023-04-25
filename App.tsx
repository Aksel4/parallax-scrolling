import * as React from 'react';
import './style.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function App() {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer speed={1} offset={0} className="top">
          Hello world
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.3}
          className="bottom"
          offset={1}
          sticky={{ start: 1, end: 1.4 }}
        >
          Hello you
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          speed={0.3}
          className="b2"
          sticky={{ start: 2.4, end: 3.7 }}
        >
          Hola doroes et amet
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
