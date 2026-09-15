import { config } from '@keystatic/core';
import { donationsSingleton } from './src/keystatic/singletons/donations';
import { storySingleton } from './src/keystatic/singletons/story';
import { goalSingleton } from './src/keystatic/singletons/goal';
import { transparencySingleton } from './src/keystatic/singletons/transparency';
import { sponsorTiers } from './src/keystatic/singletons/sponsorsTiers';
import { sponsors } from './src/keystatic/singletons/sponsors';
import { howToHelp } from './src/keystatic/singletons/howToHelp';
import { projects } from './src/keystatic/singletons/projects';
import { team } from './src/keystatic/singletons/team';
import { gallery } from './src/keystatic/singletons/gallery';
import { floatingActions } from './src/keystatic/singletons/floatingActions';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'cloud',
      }
    : {
        kind: 'local',
      },
  cloud: {
    project: 'rumbo-espana/rumbo-espana-2026', // Reemplázalo con tu proyecto de Keystatic Cloud
  },
  singletons: {
    donations: donationsSingleton,
    storySingleton,
    goalSingleton,
    transparencySingleton,
    sponsorTiers,
    floatingActions,
    sponsors,
    howToHelp,
    gallery,
    projects,
    team,
  },
});
