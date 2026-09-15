import { fields, singleton } from '@keystatic/core';

export const sponsors = singleton({
  label: 'Sponsors',
  path: 'src/data/sponsors',
  format: { data: 'json' },

  schema: {
    items: fields.array(
      fields.object({
        name: fields.text({
          label: 'Nombre',
          validation: {
            isRequired: true,
          },
        }),

        level: fields.select({
          label: 'Nivel',
          options: [
            { label: 'Oro', value: 'oro' },
            { label: 'Plata', value: 'plata' },
            { label: 'Bronce', value: 'bronce' },
          ],
          defaultValue: 'bronce',
        }),

        amount: fields.number({
          label: 'Monto aportado',
          description: 'Monto real aportado por el sponsor.',
          validation: {
            isRequired: true,
          },
        }),

        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/sponsors',
          publicPath: '/images/sponsors/',
        }),

        url: fields.url({
          label: 'URL',
          description: 'Instagram, web u otro enlace público.',
        }),

        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
      }),
      {
        label: 'Sponsors',
        itemLabel: (props) =>
          props.fields.name.value
            ? `${props.fields.name.value} · ${props.fields.level.value}`
            : 'Nuevo sponsor',
      },
    ),
  },
});
