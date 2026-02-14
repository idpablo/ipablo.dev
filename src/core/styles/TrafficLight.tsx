import React from 'react';
import { TrafficLightColors } from './inlineStyles';

interface TrafficLightProps {
  variant?: 'span' | 'div';
}

const TrafficLight: React.FC<TrafficLightProps> = ({ variant = 'div' }) => {
  const Tag = variant;
  return (
    <>
      <Tag style={{ width: '12px', height: '12px', borderRadius: '50%', background: TrafficLightColors.red }}></Tag>
      <Tag style={{ width: '12px', height: '12px', borderRadius: '50%', background: TrafficLightColors.yellow }}></Tag>
      <Tag style={{ width: '12px', height: '12px', borderRadius: '50%', background: TrafficLightColors.green }}></Tag>
    </>
  );
};

export default TrafficLight;
