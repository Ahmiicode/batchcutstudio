import Bottleneck from '../components/Bottleneck.js';
import Capacity from '../components/Capacity.js';
import CreativeMultiplication from '../components/CreativeMultiplication.js';
import Delivered from '../components/Delivered.js';
import Difference from '../components/Difference.js';
import FAQ from '../components/FAQ.js';
import FinalCTA from '../components/FinalCTA.js';
import Guarantee from '../components/Guarantee.js';
import Hero from '../components/Hero.js';
import HowItWorks from '../components/HowItWorks.js';
import Stats, { HeroStatsStrip } from '../components/Stats.js';
import WhatYouGet from '../components/WhatYouGet.js';
import WhoItsFor from '../components/WhoItsFor.js';
import WorkPortfolio from '../components/WorkPortfolio.js';

export default function HomePage() {
  return (
    <>
      <Hero bottomSlot={<HeroStatsStrip />} />
      <Stats />
      <Bottleneck />
      <CreativeMultiplication />
      <Difference />
      <WhatYouGet />
      <WorkPortfolio />
      <Delivered />
      <HowItWorks />
      <Capacity />
      <Guarantee />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
