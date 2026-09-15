import { fields, singleton } from '@keystatic/core';
export const projects = singleton({
  label: 'Proyectos y servicios',
  path: 'src/data/projects',
  format: { data: 'json' },
  schema: {
    eyebrow: fields.text({
      label: 'Etiqueta superior',
      validation: { isRequired: true },
    }),
    title: fields.text({ label: 'Título', validation: { isRequired: true } }),
    description: fields.text({
      label: 'Descripción',
      multiline: true,
      validation: { isRequired: true },
    }),
    items: fields.array(
      fields.object({
        id: fields.text({
          label: 'ID interno',
          description: 'Identificador único del proyecto.',
          validation: { isRequired: true },
        }),
        name: fields.text({
          label: 'Nombre',
          validation: { isRequired: true },
        }),
        tagline: fields.text({
          label: 'Subtítulo',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          validation: { isRequired: true },
        }),
        badge: fields.text({
          label: 'Emoji / insignia',
          description: 'Ejemplo: 🥋 o 💻',
        }),
        collaborations: fields.array(
          fields.text({
            label: 'Forma de colaborar',
            validation: { isRequired: true },
          }),
          { label: 'Formas de colaborar', itemLabel: (props) => props.value },
        ),
        ctaText: fields.text({
          label: 'Texto del botón',
          validation: { isRequired: true },
        }),
        url: fields.url({
          label: 'Enlace',
          description: 'Página a la que llevará el botón.',
          validation: { isRequired: true },
        }),
        whatsappMessage: fields.text({
          label: 'Mensaje de WhatsApp',
          multiline: true,
          validation: { isRequired: true },
        }),
        shareText: fields.text({
          label: 'Texto para compartir',
          multiline: true,
          validation: { isRequired: true },
        }),
      }),
      {
        label: 'Proyectos',
        itemLabel: (props) => props.fields.name.value || 'Nuevo proyecto',
      },
    ),
  },
});
