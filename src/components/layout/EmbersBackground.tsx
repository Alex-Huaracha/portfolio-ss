import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const EmbersBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            height: 800,
            width: 800,
          },
        },
        color: {
          value: ['#ff6b00', '#ff8c00', '#ffa500', '#ff4500', '#ff0000'],
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
        move: {
          direction: MoveDirection.top,
          enable: true,
          random: true,
          speed: { min: 1, max: 4 },
          straight: false,
          outModes: {
            default: OutMode.out,
            top: OutMode.out,
            bottom: OutMode.out,
          },
          wobble: {
            // Zigzag motion
            enable: true,
            distance: 10,
            speed: 2,
          },
        },
        shape: {
          type: 'circle',
        },
      },
      detectRetina: true,
      background: {
        image: 'radial-gradient(#4a0000, #000)',
        // color: '#000000',
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default EmbersBackground;
