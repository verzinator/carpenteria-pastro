import { defineField, defineType } from 'sanity'

const progetto = defineType({
  name: 'progetto',
  title: 'Progetti',
  type: 'document',
  fields: [
    defineField({ name: 'titolo', title: 'Titolo', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'titolo' }, validation: Rule => Rule.required() }),
    defineField({
      name: 'settore',
      title: 'Settore',
      type: 'string',
      options: {
        list: [
          { title: 'Macchinari industriali per sollevamento', value: 'Macchinari industriali per sollevamento' },
          { title: 'Macchine movimento terra', value: 'Macchine movimento terra' },
          { title: 'Macchine lavorazioni pietra', value: 'Macchine lavorazioni pietra' },
          { title: 'Linee di automazione industriale', value: 'Linee di automazione industriale' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'lavorazione', title: 'Lavorazione', type: 'string', description: 'Es: Saldatura, Taglio, Piegatura…' }),
    defineField({ name: 'materialeLavorato', title: 'Materiale / Specifiche', type: 'string', description: 'Es: AISI 304L | 2400×1200 mm' }),
    defineField({ name: 'immagineCopertina', title: 'Immagine copertina', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'anno', title: 'Anno', type: 'number' }),
    defineField({ name: 'cliente', title: 'Cliente', type: 'string', description: 'Nome o settore del cliente (es: Azienda manifatturiera, anonimo…)' }),
defineField({ name: 'descrizioneProgetto', title: 'Descrizione progetto', type: 'text', rows: 4 }),
    defineField({ name: 'immaginiProgetto', title: 'Immagini progetto', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], validation: Rule => Rule.max(3) }),
  ],
})

export const schemaTypes = [progetto]
