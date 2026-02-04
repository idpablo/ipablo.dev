import React from 'react';
import { ProfileStat, profileData as defaultProfileData } from '../../data/profileStats';
import { useLanguage } from '../../core/i18n';
import avatarImg from '../../assets/avatar.webp';
import { getProfileDataFromCache } from '../../utils/staticCache';
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
  const { t } = useLanguage();
  if (!isOpen) return null;

  const cachedData = getProfileDataFromCache();
  const profileData = cachedData || defaultProfileData;

  const getCategoryEmoji = (category: string) => {
    const emojis: Record<string, string> = {
      devops: '🚀',
      backend: '⚙️',
      tools: '🛠️',
      'soft-skills': '🧠',
    };
    return emojis[category] || '💻';
  };

  const groupedStats = ((profileData as typeof defaultProfileData)?.stats || []).reduce(
    (acc: Record<string, ProfileStat[]>, stat: ProfileStat) => {
      if (!acc[stat.category]) {
        acc[stat.category] = [];
      }
      acc[stat.category].push(stat);
      return acc;
    },
    {} as Record<string, ProfileStat[]>
  );

  const categoryNames: Record<string, string> = {
    devops: t.modal.categoryNames.devops,
    backend: t.modal.categoryNames.backend,
    tools: t.modal.categoryNames.tools,
    'soft-skills': t.modal.categoryNames.softSkills,
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
            <span>{t.modal.profileUrl}</span>
          </BrowserAddressBar>
          <CloseButton onClick={onClose}>×</CloseButton>
        </BrowserHeader>

        <BrowserContent>
          <ProfileHeader>
            <ProfileAvatarContainer>
              <img src={avatarImg} alt={t.profile.name} />
              <LevelBadge>Lv {(profileData as typeof defaultProfileData).level}</LevelBadge>
            </ProfileAvatarContainer>

            <ProfileInfo>
              <h2>{t.profile.name}</h2>
              <h3>{t.profile.title}</h3>
              <span className="class">⚔️ {t.profile.class}</span>
            </ProfileInfo>
          </ProfileHeader>

          <ProfileBio>{t.profile.bio}</ProfileBio>

          <StatsSection>
            <h3>{t.modal.characterStats}</h3>
            <p>{t.modal.skillsDescription}</p>

            <StatsGrid>
              {Object.entries(groupedStats).map(([category, stats]) => (
                <CategorySection key={category}>
                  <h4>
                    {getCategoryEmoji(category)} {categoryNames[category]}
                  </h4>
                  {(stats as ProfileStat[]).map((stat) => (
                    <StatItem key={stat.nameKey}>
                      <StatHeader>
                        <span>{(t.stats as any)?.[stat.nameKey] || stat.nameKey}</span>
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
