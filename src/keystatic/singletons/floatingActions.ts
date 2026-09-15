import { fields } from '@keystatic/core';

export const floatingActions = {
  label: 'Acciones flotantes',

  path: 'src/data/floating-actions',

  schema: {
    enabled: fields.checkbox({
      label: 'Activar acciones flotantes',
      defaultValue: true,
    }),

    side: fields.select({
      label: 'Lateral',
      defaultValue: 'right',

      options: [
        {
          label: 'Derecha',
          value: 'right',
        },
        {
          label: 'Izquierda',
          value: 'left',
        },
      ],
    }),

    edgeOffset: fields.number({
      label: 'Distancia al borde',
      description: 'Distancia horizontal en píxeles.',
      defaultValue: 20,
      validation: {
        min: 0,
      },
    }),

    stackGap: fields.number({
      label: 'Separación entre botones',
      description: 'Espacio automático entre botones.',
      defaultValue: 10,
      validation: {
        min: 0,
      },
    }),

    actions: fields.array(
      fields.object({
        id: fields.text({
          label: 'ID interno',
          description: 'Identificador único del botón.',
          validation: {
            isRequired: true,
          },
        }),

        type: fields.select({
          label: 'Tipo de acción',
          defaultValue: 'link',

          options: [
            {
              label: 'Navegación inteligente',
              value: 'section',
            },
            {
              label: 'Link interno',
              value: 'link',
            },
            {
              label: 'WhatsApp',
              value: 'whatsapp',
            },
            {
              label: 'URL externa',
              value: 'external',
            },
          ],
        }),

        target: fields.text({
          label: 'Destino',
          description:
            'Para secciones usar #id. Para URLs externas usar https://...',
        }),

        label: fields.text({
          label: 'Texto / Tooltip',
          validation: {
            isRequired: true,
          },
        }),

        showLabel: fields.checkbox({
          label: 'Mostrar texto junto al icono',
          defaultValue: false,
        }),

        display: fields.select({
          label: 'Cuándo aparece',
          defaultValue: 'always',

          options: [
            {
              label: 'Siempre',
              value: 'always',
            },
            {
              label: 'Solo cuando el destino está arriba',
              value: 'top',
            },
            {
              label: 'Solo cuando el destino está abajo',
              value: 'bottom',
            },
            {
              label: 'Inteligente',
              value: 'smart',
            },
          ],
        }),

        emoji: fields.text({
          label: 'Emoji',
          description: 'Se usa si no se proporciona un SVG.',
        }),

        svg: fields.text({
          label: 'SVG personalizado',
          description: 'Pegá el SVG completo. Tiene prioridad sobre el emoji.',
          multiline: true,
        }),

        background: fields.text({
          label: 'Color de fondo',
          defaultValue: '#e01e2b',
        }),

        foreground: fields.text({
          label: 'Color del contenido',
          defaultValue: '#ffffff',
        }),

        hoverBackground: fields.text({
          label: 'Color hover',
          defaultValue: '#b91c2b',
        }),

        position: fields.select({
          label: 'Posición vertical',
          description:
            'Auto permite que el sistema calcule la mejor ubicación.',
          defaultValue: 'auto',

          options: [
            {
              label: 'Automática',
              value: 'auto',
            },
            {
              label: 'Arriba',
              value: 'top',
            },
            {
              label: 'Abajo',
              value: 'bottom',
            },
          ],
        }),

        offset: fields.number({
          label: 'Offset adicional',
          description: 'Desplazamiento extra respecto del stack calculado.',
          defaultValue: 0,
        }),

        size: fields.select({
          label: 'Tamaño',
          defaultValue: 'medium',

          options: [
            {
              label: 'Pequeño',
              value: 'small',
            },
            {
              label: 'Mediano',
              value: 'medium',
            },
            {
              label: 'Grande',
              value: 'large',
            },
          ],
        }),

        mobile: fields.checkbox({
          label: 'Mostrar en mobile',
          defaultValue: true,
        }),

        desktop: fields.checkbox({
          label: 'Mostrar en desktop',
          defaultValue: true,
        }),

        newTab: fields.checkbox({
          label: 'Abrir en nueva pestaña',
          defaultValue: false,
        }),
      }),
      {
        label: 'Botones flotantes',

        itemLabel: (props) => props.fields.label.value || 'Nuevo botón',
      },
    ),
  },
};
