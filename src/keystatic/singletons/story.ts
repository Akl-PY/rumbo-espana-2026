import { fields, singleton } from '@keystatic/core';

export const storySingleton = singleton({
  label: 'Historia',
  path: 'src/data/story',
  format: { data: 'json' },
  schema: {
    events: fields.array(
      fields.object({
        date: fields.text({
          label: 'Fecha',
          description: 'Año o fecha del acontecimiento.',
          validation: { isRequired: true },
        }),
        title: fields.text({
          label: 'Título',
          description: 'Título corto del acontecimiento.',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Descripción',
          description: 'Texto que aparecerá en la línea de tiempo.',
          multiline: true,
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Imagen',
          description: 'Imagen opcional para este acontecimiento.',
          directory: 'public/images/story',
          publicPath: '/images/story/',
        }),
      }),
      {
        label: 'Acontecimientos',
        itemLabel: (props) =>
          props.fields.date.value
            ? `${props.fields.date.value} — ${props.fields.title.value || 'Sin título'}`
            : props.fields.title.value || 'Nuevo acontecimiento',
      },
    ),
  },
});
