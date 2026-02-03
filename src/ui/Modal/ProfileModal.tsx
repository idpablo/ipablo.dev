import React from 'react';
import { profileData, ProfileStat } from '../../data/profileStats';
import avatarImg from '../../assets/avatar.webp';
import {
  ProfileModalOverlay,
  ProfileModalContainer,
  BrowserHeader,
  BrowserTraffic,
  TrafficLight,
  BrowserAddressBar,
  BrowserContent,
  CloseButton,
  ProfileHeader,
  ProfileAvatarContainer,
  LevelBadge,
  ProfileInfo,
  ProfileBio,
  StatsSection,
  StatsGrid,
  CategorySection,
  StatItem,
  StatHeader,
  StatBar,
  StatProgress,
} from './ProfileModal.styles';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      devops: '🚀',
      backend: '⚙️',
      tools: '🛠️',
      'soft-skills': '🧠',
    };
    return emojis[category] || '💻';
  };

  const groupedStats = profileData.stats.reduce((acc, stat) => {
    if (!acc[stat.category]) {
      acc[stat.category] = [];
    }
    acc[stat.category].push(stat);
    return acc;
  }, {} as Record<string, ProfileStat[]>);

  const categoryNames: Record<string, string> = {
    devops: 'DevOps & Infrastructure',
    backend: 'Backend Development',
    tools: 'Systems & Networking',
    'soft-skills': 'Soft Skills',
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ProfileModalOverlay onClick={handleOverlayClick}>
      <ProfileModalContainer>
        <BrowserHeader>
          <BrowserTraffic>
            <TrafficLight color="#FF5F56" onClick={onClose} />
            <TrafficLight color="#FFBD2E" />
            <TrafficLight color="#27C93F" />
          </BrowserTraffic>
          <BrowserAddressBar>
            <span>🔒</span>
            <span>ipablo.dev/profile</span>
          </BrowserAddressBar>
          <CloseButton onClick={onClose}>×</CloseButton>
        </BrowserHeader>

        <BrowserContent>
          <ProfileHeader>
            <ProfileAvatarContainer>
              <img src={avatarImg} alt={profileData.name} />
              <LevelBadge>Lv {profileData.level}</LevelBadge>
            </ProfileAvatarContainer>

            <ProfileInfo>
              <h2>{profileData.name}</h2>
              <h3>{profileData.title}</h3>
              <span className="class">⚔️ {profileData.class}</span>
            </ProfileInfo>
          </ProfileHeader>

          <ProfileBio>{profileData.bio}</ProfileBio>

          <StatsSection>
            <h3>Character Stats</h3>
            <p>Habilidades desenvolvidas através de quests e experiência em projetos</p>

            <StatsGrid>
              {Object.entries(groupedStats).map(([category, stats]) => (
                <CategorySection key={category}>
                  <h4>
                    {getCategoryEmoji(category)} {categoryNames[category]}
                  </h4>
                  {stats.map((stat) => (
                    <StatItem key={stat.name}>
                      <StatHeader>
                        <span>{stat.name}</span>
                        <span className="level">
                          {stat.level}/{stat.maxLevel}
                        </span>
                      </StatHeader>
                      <StatBar>
                        <StatProgress progress={stat.experience} />
                      </StatBar>
                    </StatItem>
                  ))}
                </CategorySection>
              ))}
            </StatsGrid>
          </StatsSection>
        </BrowserContent>
      </ProfileModalContainer>
    </ProfileModalOverlay>
  );
};

export default ProfileModal;
