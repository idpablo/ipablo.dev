import React from 'react';
import { FaGithub, FaStar, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../core/i18n';
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
import { projectDescriptions as defaultProjectDescriptions } from '../../data/projectDescriptions';
import { Project } from '../../core/types';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  const { t } = useLanguage();
  if (!project) return null;

  const projectKey = project.name
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/\./g, '_');
  const projectData = defaultProjectDescriptions[projectKey as keyof typeof defaultProjectDescriptions];
  
  const projectTranslation = (t.projects as any)?.[projectKey];
  const enhancedDescription = projectTranslation?.description || project.description || '';
  const features = projectTranslation?.features || (projectData as any)?.features || [];
  const hasPreview = (projectData as any)?.hasPreview || false;
  const previewUrl = (projectData as any)?.previewUrl;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <BrowserWindow onClick={(e) => e.stopPropagation()}>
        <BrowserHeader>
          <BrowserTraffic>
            <TrafficLight color="#FF5F56" title={t.modal.close} onClick={onClose} />
            <TrafficLight color="#FFBD2E" title={t.modal.projectModal.minimize} />
            <TrafficLight color="#27C93F" title={t.modal.projectModal.maximize} />
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
                  {t.modal.projectModal.language}
                </div>
                <div className="value">{project.language}</div>
              </StatCard>
            )}
            <StatCard>
              <div className="label">
                <FaStar style={{ marginRight: '0.5rem' }} />
                {t.modal.stars}
              </div>
              <div className="value">{project.stargazers_count}</div>
            </StatCard>
            <StatCard>
              <div className="label">{t.modal.projectModal.forks}</div>
              <div className="value">{project.forks_count}</div>
            </StatCard>
          </ProjectModalStats>

          {features.length > 0 && (
            <ProjectFeatures>
              <div className="features-title">{t.modal.projectModal.featuresTitle}</div>
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
              <div className="preview-title">{t.modal.projectModal.previewTitle}</div>
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
              <FaGithub /> {t.modal.visitGithub}
            </button>
            <button className="btn-secondary" onClick={onClose}>
              {t.modal.close}
            </button>
          </ProjectModalActions>
        </BrowserContent>
      </BrowserWindow>
    </ModalOverlay>
  );
};

export default ProjectModal;

