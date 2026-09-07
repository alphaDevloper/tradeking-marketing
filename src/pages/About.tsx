// src/pages/About.tsx
// About page — composes the About Hero, My Story, Track Record, Reasons, Steps,
// Guarantee, Contact Form, Why Trust, Featured Work, FAQ, and Footer.

import AboutHero from '../components/sections/AboutHero';
import MyStory from '../components/sections/MyStory';
import OurMission from '../components/sections/OurMission';
import TrackRecord from '../components/sections/TrackRecord';

export default function About() {
  return (
    <main className="page page--about" aria-label="About TradeKing Marketing">
      <AboutHero />
      <MyStory />
      <TrackRecord />
      <OurMission />
    </main>
  );
}
