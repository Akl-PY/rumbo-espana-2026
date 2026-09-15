import { fields, singleton } from '@keystatic/core';
export const team = singleton({
  label: 'Delegación',
  path: 'src/data/team',
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
    members: fields.array(
      fields.object({
        id: fields.text({
          label: 'ID interno',
          description: 'Ejemplo: daniel-galetto',
          validation: { isRequired: true },
        }),
        name: fields.text({
          label: 'Nombre',
          validation: { isRequired: true },
        }),
        role: fields.text({ label: 'Rol', validation: { isRequired: true } }),
        type: fields.select({
          label: 'Tipo',
          defaultValue: 'competidor',
          options: [
            { label: 'Competidor', value: 'competidor' },
            { label: 'Coach', value: 'coach' },
          ],
        }),
        image: fields.image({
          label: 'Foto',
          directory: 'public/images/team',
          publicPath: '/images/team/',
        }),
        age: fields.number({
          label: 'Edad',
          description: 'Edad actual.',
          validation: { isRequired: true, min: 0 },
        }),
        competingSince: fields.number({
          label: 'Compite desde',
          description: 'Año desde el que compite. Para coaches puede ser 0.',
          validation: { isRequired: true, min: 0 },
        }),
        bio: fields.text({
          label: 'Biografía',
          multiline: true,
          validation: { isRequired: true },
        }),
        highlights: fields.array(
          fields.text({
            label: 'Dato destacado',
            validation: { isRequired: true },
          }),
          { label: 'Datos destacados', itemLabel: (props) => props.value },
        ),
        podiums: fields.array(
          fields.object({
            year: fields.number({
              label: 'Año',
              validation: { isRequired: true, min: 1900 },
            }),
            competition: fields.text({
              label: 'Competencia',
              validation: { isRequired: true },
            }),
            position: fields.select({
              label: 'Posición',
              options: [
                { label: '1° puesto', value: '1' },
                { label: '2° puesto', value: '2' },
                { label: '3° puesto', value: '3' },
                { label: 'Otro', value: 'other' },
              ],
              defaultValue: '1',
            }),
          }),
          {
            label: 'Podios y resultados',
            itemLabel: (props) =>
              `${props.fields.year.value} · ${props.fields.competition.value}`,
          },
        ),
        social: fields.object({
          instagram: fields.url({ label: 'Instagram' }),
          facebook: fields.url({ label: 'Facebook' }),
        }),
      }),
      {
        label: 'Integrantes',
        itemLabel: (props) =>
          `${props.fields.name.value} · ${props.fields.role.value}`,
      },
    ),
  },
});
