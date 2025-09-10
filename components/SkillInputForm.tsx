'use client';

import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../lib/constants';

interface SkillInputFormProps {
  onClose: () => void;
  onSubmit: (data: { skillsOffered: string[]; skillsWanted: string[] }) => void;
  variant?: 'offer' | 'request';
}

export function SkillInputForm({ onClose, onSubmit, variant = 'offer' }: SkillInputFormProps) {
  const [skillsOffered, setSkillsOffered] = useState<string[]>(['']);
  const [skillsWanted, setSkillsWanted] = useState<string[]>(['']);
  const [customSkill, setCustomSkill] = useState('');

  const addSkill = (type: 'offered' | 'wanted') => {
    if (type === 'offered') {
      setSkillsOffered([...skillsOffered, '']);
    } else {
      setSkillsWanted([...skillsWanted, '']);
    }
  };

  const removeSkill = (type: 'offered' | 'wanted', index: number) => {
    if (type === 'offered') {
      setSkillsOffered(skillsOffered.filter((_, i) => i !== index));
    } else {
      setSkillsWanted(skillsWanted.filter((_, i) => i !== index));
    }
  };

  const updateSkill = (type: 'offered' | 'wanted', index: number, value: string) => {
    if (type === 'offered') {
      const updated = [...skillsOffered];
      updated[index] = value;
      setSkillsOffered(updated);
    } else {
      const updated = [...skillsWanted];
      updated[index] = value;
      setSkillsWanted(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredOffered = skillsOffered.filter(skill => skill.trim() !== '');
    const filteredWanted = skillsWanted.filter(skill => skill.trim() !== '');
    
    onSubmit({
      skillsOffered: filteredOffered,
      skillsWanted: filteredWanted,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Manage Your Skills</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Skills I Offer */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Skills I Can Offer</h3>
            <div className="space-y-3">
              {skillsOffered.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <select
                    value={skill}
                    onChange={(e) => updateSkill('offered', index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="" className="bg-gray-800">Select a skill...</option>
                    {SKILLS_CATEGORIES.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                  {skillsOffered.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkill('offered', index)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addSkill('offered')}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
                <span>Add another skill</span>
              </button>
            </div>
          </div>

          {/* Skills I Want */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Skills I Want to Learn</h3>
            <div className="space-y-3">
              {skillsWanted.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <select
                    value={skill}
                    onChange={(e) => updateSkill('wanted', index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="" className="bg-gray-800">Select a skill...</option>
                    {SKILLS_CATEGORIES.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                  {skillsWanted.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkill('wanted', index)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addSkill('wanted')}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
                <span>Add another skill</span>
              </button>
            </div>
          </div>

          {/* Custom Skill Input */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Add Custom Skill</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                placeholder="Enter a custom skill..."
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="button"
                onClick={() => {
                  if (customSkill.trim()) {
                    setSkillsOffered([...skillsOffered, customSkill.trim()]);
                    setCustomSkill('');
                  }
                }}
                className="btn-secondary px-3 py-2"
              >
                Add
              </button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-white/20">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Save Skills
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
