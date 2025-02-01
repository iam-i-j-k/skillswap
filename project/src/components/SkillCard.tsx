import React from 'react';
import { User } from '../types';
import { MessageCircle, Star } from 'lucide-react';

interface SkillCardProps {
  user: User;
  onConnect: (user: User) => void;
}

const SkillCard = ({ user, onConnect }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
            <div className="flex items-center space-x-2 text-yellow-500">
              <Star className="h-4 w-4" />
              <span className="text-sm">4.8 (24 reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-gray-700">Can Teach:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {user.skillsToTeach.map(skill => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-gray-700">Wants to Learn:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {user.skillsToLearn.map(skill => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => {
              onConnect(user);
              alert(`You are now connected with ${user.name}`);
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Connect & Learn
          </button>
          <button className="text-gray-600 hover:text-purple-600 transition">
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
