import * as React from 'react';
import './style.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function App() {
  return (
    <div>
      <div>elo</div>
      <div>
        <Parallax pages={5}>
          <ParallaxLayer
            speed={1}
            offset={0}
            className="top"
            sticky={{ start: 0, end: 1 }}
          >
            Hello world
          </ParallaxLayer>

          <ParallaxLayer
            speed={1.5}
            className="bottom"
            offset={1}
            sticky={{ start: 1, end: 2 }}
          >
            Blender og 3D
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.4}
            speed={1.5}
            className="b2"
            sticky={{ start: 2, end: 3 }}
          >
            Konsept kunst
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.5}
            className="b3"
            sticky={{ start: 3, end: 4 }}
          >
            Poster art
          </ParallaxLayer>

          <ParallaxLayer
            speed={0.3}
            sticky={{ start: 4, end: 4 }}
            className="b4"
          >
            Kontakt meg
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
