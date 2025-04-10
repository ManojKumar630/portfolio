import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 
import "./styles.css"; // contains .star and .tail styles

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 120; i++) {
    const style = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 5}s`,
    };
    stars.push(<div className="star" style={style} key={`star-${i}`} />);
  }
  return stars;
};

const Tail = ({ id, onEnd }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const angle = Math.random() * 360;

    setStyle({
      top: `${y}px`,
      left: `${x}px`,
      transform: `rotate(${angle}deg)`,
    });

    const timer = setTimeout(() => {
      onEnd(id);
    }, 2500);

    return () => clearTimeout(timer);
  }, [id, onEnd]);

  return (
    <div className="tail-wrapper" style={style}>
      <div className="tail">
        <div className="head" />
        <div className="trail" />
      </div>
    </div>
  );
};

const StarryParticlesBackground = () => {
  const [tails, setTails] = useState([]);
  const [stars] = useState(generateStars);

  const particlesInit = async (engine) => {
    await loadFull(engine); // ✅ no error here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const howMany = Math.floor(Math.random() * 2) + 1;
      setTails((prev) => {
        const newTails = Array.from({ length: howMany }, () => `tail-${Date.now()}-${Math.random()}`);
        return [...prev, ...newTails].slice(-12);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const removeTail = (id) => {
    setTails((prev) => prev.filter((tailId) => tailId !== id));
  };

  return (
    <div className="starry-background">
      {stars}
      {tails.map((id) => (
        <Tail key={id} id={id} onEnd={removeTail} />
      ))}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "#0f0f2e",
          },
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            move: {
              enable: true,
              speed: 5,
              angle: {
                value: 60,
                offset: 0,
              },
              direction: "bottom-right",
              straight: true,
              outModes: {
                default: "out",
              },
              trail: {
                enable: true,
                length: 20,
                fillColor: "#0f0f2e",
              },
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 2,
            },
            shape: {
              type: "circle",
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default StarryParticlesBackground;
