import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
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

export const SkeletonText = styled(SkeletonBase)`
  height: 16px;
  margin-bottom: 8px;
`;

export const SkeletonTitle = styled(SkeletonBase)`
  height: 24px;
  width: 60%;
  margin-bottom: 16px;
`;

export const SkeletonAvatar = styled(SkeletonBase)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

export const SkeletonCard = styled(SkeletonBase)<{ minHeight?: string }>`
  min-height: ${({ minHeight }) => minHeight || '220px'};
  border-radius: 12px;
`;

export const SkeletonButton = styled(SkeletonBase)`
  width: 120px;
  height: 40px;
  border-radius: 8px;
`;

export default SkeletonBase;
