import { fields, singleton } from '@keystatic/core';

export const transparencySingleton = singleton({
  label: 'Transparencia',
  path: 'src/data/transparency',
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
    expenses: fields.array(
      fields.object({
        title: fields.text({
          label: 'Título',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
          validation: { isRequired: true },
        }),
        amount: fields.number({
          label: 'Monto aproximado',
          validation: { isRequired: true },
        }),
      }),
      { label: 'Gastos', itemLabel: (props) => props.fields.title.value },
    ),
    footer: fields.text({
      label: 'Texto inferior',
      multiline: true,
      validation: { isRequired: true },
    }),
  },
});
