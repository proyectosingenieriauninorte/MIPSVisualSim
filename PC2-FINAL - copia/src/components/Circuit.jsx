import React from 'react';
import '../styles/Circuit.css';
import defaultImage from '../images/MIPSCIRCUIT.png';
import addImage from '../images/ADD.png';
import addiImage from '../images/ADDI.png';
import lwImage from '../images/LW.png';
import swImage from '../images/SW.png';
import beqImage from '../images/BEQ.png';
import bneImage from '../images/BNE.png';
import jumpImage from '../images/JUMP.png';

const instructionImages = {
  add: addImage,
  addi: addiImage,
  lw: lwImage,
  sw: swImage,
  beq: beqImage,
  bne: bneImage,
  j: jumpImage,
};

const CircuitImage = ({ currentInstruction, registers }) => {
  const [opName] = currentInstruction.trim().split(' ');
  const imageSrc = instructionImages[opName] || defaultImage;

  return (
    <div className="circuit-container">
      <div className="image-wrapper">
        <img src={imageSrc} alt={`Circuito para ${opName}`} />
        {['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'].map((reg) => (
          <div key={reg} className={`register-value ${reg}`}>
            {`0x${registers[reg].toString(16).toUpperCase()}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircuitImage;