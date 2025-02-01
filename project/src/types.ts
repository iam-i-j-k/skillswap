export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  skillsToTeach: Skill[];
  skillsToLearn: Skill[];
  bio: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface SkillMatch {
  id: string;
  teacher: User;
  student: User;
  skillToTeach: Skill;
  skillToLearn: Skill;
  status: 'pending' | 'accepted' | 'completed';
}