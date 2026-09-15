import { fields, singleton } from '@keystatic/core';

export const gallery = singleton({
  label: 'Galería',
  path: 'src/data/gallery',
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

    items: fields.array(
      fields.object({
        image: fields.image({
          label: 'Imagen',
          directory: 'public/images/gallery',
          publicPath: '/images/gallery/',
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
        }),

        featured: fields.checkbox({
          label: 'Destacada',
          description:
            'Las imágenes destacadas ocupan más espacio visual en la galería.',
          defaultValue: false,
        }),
      }),
      {
        label: 'Fotos',
        itemLabel: (props) => props.fields.title.value || 'Nueva fotografía',
      },
    ),
  },
});
