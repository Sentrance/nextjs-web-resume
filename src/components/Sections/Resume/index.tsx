import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" noPadding sectionId={SectionId.Resume}>
      <div className="px-4 pt-8 pb-16 md:pt-12 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-4xl font-bold text-center text-neutral-800">
              <span className="text-orange-500">Mon Pa</span>rcours et mes compétences
            </h2>
          </div>

          <div className="flex flex-col divide-y-2 divide-neutral-300">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Expériences">
              {experience.map((item, index) => (
                <TimelineItem item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
            <ResumeSection title="Compétences">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {skills.map((skillgroup, index) => (
                  <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;