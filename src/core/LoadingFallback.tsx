import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.colors?.background || '#1a1a1a'};
`;

const SkeletonBase = styled.div<{ width?: string; height?: string; borderRadius?: string }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors?.card || '#2a2a2a'} 25%,
    ${({ theme }) => theme.colors?.border || '#3a3a3a'} 50%,
    ${({ theme }) => theme.colors?.card || '#2a2a2a'} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const LoadingFallback: React.FC = () => {
  return (
    <LoadingContainer>
      <SkeletonSection>
        <SkeletonBase height="160px" width="160px" borderRadius="50%" style={{ margin: '0 auto 2rem' }} />
        <SkeletonBase height="32px" width="60%" style={{ margin: '0 auto 1rem' }} />
        <SkeletonBase height="16px" width="100%" style={{ marginBottom: '0.5rem' }} />
        <SkeletonBase height="16px" width="90%" style={{ marginBottom: '0.5rem' }} />
        <SkeletonBase height="16px" width="75%" />
      </SkeletonSection>
      <SkeletonSection>
        <SkeletonBase height="220px" width="100%" borderRadius="12px" />
      </SkeletonSection>
    </LoadingContainer>
  );
};

export default LoadingFallback;
