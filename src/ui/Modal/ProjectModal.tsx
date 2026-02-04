import React from 'react';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import {
  ModalOverlay,
  BrowserWindow,
  BrowserHeader,
  BrowserTraffic,
  TrafficLight,
  BrowserAddressBar,
  BrowserContent,
  ProjectModalHeader,
  ProjectModalStats,
  StatCard,
  ProjectModalActions,
  ProjectFeatures,
  PreviewContainer,
  CloseButton,
} from './Modal.styles';
import { getProjectDescriptionsFromCache } from '../../utils/staticCache';
import { projectDescriptions as defaultProjectDescriptions } from '../../data/projectDescriptions';
import { Project } from '../../core/types';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  if (!project) return null;

  const projectDescriptions = getProjectDescriptionsFromCache() || defaultProjectDescriptions;
  const projectKey = project.name.toLowerCase().replace(/ /g, '_');
  const projectData = projectDescriptions[projectKey as keyof typeof projectDescriptions];
  const enhancedDescription = projectData?.enhancedDescription || project.description || 'Projeto sem descrição';
  const features = projectData?.features || [];
  const hasPreview = projectData?.hasPreview || false;
  const previewUrl = projectData?.previewUrl;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <BrowserWindow onClick={(e) => e.stopPropagation()}>
        <BrowserHeader>
          <BrowserTraffic>
            <TrafficLight color="#FF5F56" title="Fechar" onClick={onClose} />
            <TrafficLight color="#FFBD2E" title="Minimizar" />
            <TrafficLight color="#27C93F" title="Maximizar" />
          </BrowserTraffic>
          <BrowserAddressBar>
            <span>🔒</span>
            <span>{project.html_url.replace('https://', '')}</span>
          </BrowserAddressBar>
          <CloseButton onClick={onClose}>×</CloseButton>
        </BrowserHeader>

        <BrowserContent>
          <ProjectModalHeader>
            <h1>{project.name}</h1>
            <p>{enhancedDescription}</p>
          </ProjectModalHeader>

          <ProjectModalStats>
            {project.language && (
              <StatCard>
                <div className="label">
                  <FaCode style={{ marginRight: '0.5rem' }} />
                  Linguagem
                </div>
                <div className="value">{project.language}</div>
              </StatCard>
            )}
            <StatCard>
              <div className="label">
                <FaStar style={{ marginRight: '0.5rem' }} />
                Estrelas
              </div>
              <div className="value">{project.stargazers_count}</div>
            </StatCard>
            <StatCard>
              <div className="label">Forks</div>
              <div className="value">{project.forks_count}</div>
            </StatCard>
          </ProjectModalStats>

          {features.length > 0 && (
            <ProjectFeatures>
              <div className="features-title">✨ Features Principais</div>
              <div className="features-list">
                {features.map((feature: string, index: number) => (
                  <div key={index} className="feature-tag">
                    {feature}
                  </div>
                ))}
              </div>
            </ProjectFeatures>
          )}

          {hasPreview && previewUrl && (
            <PreviewContainer>
              <div className="preview-title">🖼️ Live Preview</div>
              <iframe
                src={previewUrl}
                title={`${project.name} Preview`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </PreviewContainer>
          )}

          <ProjectModalActions>
            <button
              className="btn-primary"
              onClick={() => window.open(project.html_url, '_blank')}
            >
              <FaGithub /> Visitar no GitHub
            </button>
            <button className="btn-secondary" onClick={onClose}>
              Fechar
            </button>
          </ProjectModalActions>
        </BrowserContent>
      </BrowserWindow>
    </ModalOverlay>
  );
};

export default ProjectModal;
