import { fields, singleton } from '@keystatic/core';
export const howToHelp = singleton({
  label: 'Cómo ayudar',
  path: 'src/data/how-to-help',
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

    donationAlias: fields.text({
      label: 'Alias para donaciones',
      description: 'Alias que se muestra en la tarjeta de donación.',
      validation: {
        isRequired: true,
      },
    }),

    items: fields.array(
      fields.object({
        id: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Donar', value: 'donar' },
            { label: 'Sponsor', value: 'sponsor' },
            { label: 'Servicios', value: 'services' },
            { label: 'Compartir', value: 'share' },
          ],
          defaultValue: 'donar',
        }),

        icon: fields.select({
          label: 'Icono',
          options: [
            { label: '❤️ Donar', value: 'heart' },
            { label: '🤝 Sponsor', value: 'handshake' },
            { label: '💼 Servicios', value: 'briefcase' },
            { label: '📣 Compartir', value: 'megaphone' },
          ],
          defaultValue: 'heart',
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

        highlight: fields.text({
          label: 'Texto destacado',
          validation: {
            isRequired: true,
          },
        }),

        buttonLabel: fields.text({
          label: 'Texto del botón',
          validation: {
            isRequired: true,
          },
        }),

        buttonHref: fields.text({
          label: 'Destino',
          description: 'Ejemplo: #donaciones',
          validation: {
            isRequired: true,
          },
        }),
      }),
      {
        label: 'Formas de ayudar',
        itemLabel: (props) =>
          props.fields.title.value || 'Nueva forma de ayudar',
      },
    ),
  },
});
