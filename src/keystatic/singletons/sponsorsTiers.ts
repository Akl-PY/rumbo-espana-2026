import { fields, singleton } from '@keystatic/core';

export const sponsorTiers = singleton({
  label: 'Niveles de Sponsors',
  path: 'src/data/sponsor-tiers',
  format: { data: 'json' },

  schema: {
    tiers: fields.array(
      fields.object({
        id: fields.select({
          label: 'Nivel',
          options: [
            { label: 'Oro', value: 'oro' },
            { label: 'Plata', value: 'plata' },
            { label: 'Bronce', value: 'bronce' },
          ],
          defaultValue: 'bronce',
        }),

        name: fields.text({
          label: 'Nombre',
          validation: {
            isRequired: true,
          },
        }),

        price: fields.number({
          label: 'Precio',
          description: 'Precio sugerido del nivel.',
          validation: {
            isRequired: true,
          },
        }),

        badge: fields.text({
          label: 'Insignia',
          description: 'Ejemplo: 🥇',
          validation: {
            isRequired: true,
          },
        }),

        shortDescription: fields.text({
          label: 'Descripción corta',
          multiline: true,
          validation: {
            isRequired: true,
          },
        }),

        features: fields.array(
          fields.text({
            label: 'Beneficio',
            validation: {
              isRequired: true,
            },
          }),
          {
            label: 'Beneficios',
            itemLabel: (props) => props.value,
          },
        ),
      }),
      {
        label: 'Niveles',
        itemLabel: (props) =>
          `${props.fields.badge.value} ${props.fields.name.value || 'Nuevo nivel'}`,
      },
    ),
  },
});
