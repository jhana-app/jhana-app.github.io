import { HeroAvatar, Section } from 'src/astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Take your mindfulness to the next level</>}
      description={
        <>
          The first app designed to guide you from zero to hero in reaching
          jhanas.
        </>
      }
    />
  </Section>
);

export { Hero };
