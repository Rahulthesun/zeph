import React from 'react';
import { Calendar, Users, Clock, Presentation, Award } from 'lucide-react';

interface TimelinePhase {
  phase: number;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

const Timeline: React.FC = () => {
  const phases: TimelinePhase[] = [
    {
      phase: 1,
      title: 'Registration Opens',
      date: 'January 15, 2026',
      description: 'Sign up and form your teams',
      icon: <Calendar className="w-8 h-8" />,
      side: 'left'
    },
    {
      phase: 2,
      title: 'Team Formation',
      date: 'January 20-25, 2026',
      description: 'Connect with potential teammates and finalize teams',
      icon: <Users className="w-8 h-8" />,
      side: 'right'
    },
    {
      phase: 3,
      title: 'Hackathon Kickoff',
      date: 'February 1, 2026',
      description: '48-hour intensive development period begins',
      icon: <Clock className="w-8 h-8" />,
      side: 'left'
    },
    {
      phase: 4,
      title: 'Demo Day',
      date: 'February 3, 2026',
      description: 'Present your solutions to judges and industry experts',
      icon: <Presentation className="w-8 h-8" />,
      side: 'right'
    },
    {
      phase: 5,
      title: 'Awards Ceremony',
      date: 'February 4, 2026',
      description: 'Celebrate winners and innovation',
      icon: <Award className="w-8 h-8" />,
      side: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-black-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hackathon Timeline</h1>
          <p className="text-xl text-gray-400">From registration to awards - your journey to innovation</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-10">
                  <span className="inline-block px-4 py-1 bg-cyan-900/50 text-cyan-400 border border-cyan-600 rounded-full text-sm">
                    Phase {phase.phase}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-20">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    {phase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex items-center ${phase.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-5/12 ${phase.side === 'right' ? 'ml-auto' : ''}`}>
                    <div className={`${phase.side === 'left' ? 'text-right pr-16' : 'pl-16'}`}>
                      <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-lg text-blue-400 mb-3">{phase.date}</p>
                      <p className="text-gray-400 text-base">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;