import { config } from '@keystatic/core';
import { donationsSingleton } from './src/keystatic/singletons/donations';

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
    project: 'tu-usuario-o-org/tu-proyecto-keystatic', // Reemplázalo con tu proyecto de Keystatic Cloud
  },
  singletons: {
    donations: donationsSingleton,
  },
});
