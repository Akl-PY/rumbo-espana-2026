import { fields, singleton } from '@keystatic/core';

export const goalSingleton = singleton({
  label: 'Objetivo',
  path: 'src/data/goal',
  format: { data: 'json' },

  schema: {
    eyebrow: fields.text({
      label: 'Etiqueta superior',
      validation: {
        isRequired: true,
      },
    }),

    title: fields.text({
      label: 'Título',
      validation: {
        isRequired: true,
      },
    }),

    description: fields.text({
      label: 'Descripción',
      multiline: true,
      validation: {
        isRequired: true,
      },
    }),

    goalLabel: fields.text({
      label: 'Etiqueta de meta',
      validation: {
        isRequired: true,
      },
    }),

    progressLabel: fields.text({
      label: 'Etiqueta del porcentaje',
      validation: {
        isRequired: true,
      },
    }),

    raisedLabel: fields.text({
      label: 'Etiqueta total recaudado',
      validation: {
        isRequired: true,
      },
    }),

    donationsLabel: fields.text({
      label: 'Etiqueta donaciones',
      validation: {
        isRequired: true,
      },
    }),

    donationsSuffix: fields.text({
      label: 'Texto debajo de donaciones',
      validation: {
        isRequired: true,
      },
    }),

    sponsorsLabel: fields.text({
      label: 'Etiqueta sponsors',
      validation: {
        isRequired: true,
      },
    }),

    sponsorsSuffix: fields.text({
      label: 'Texto debajo de sponsors',
      validation: {
        isRequired: true,
      },
    }),

    footerText: fields.text({
      label: 'Texto inferior',
      multiline: true,
      validation: {
        isRequired: true,
      },
    }),
  },
});
