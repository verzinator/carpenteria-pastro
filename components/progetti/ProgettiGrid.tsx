import Image from 'next/image'
import { sanityFetch, urlFor } from '@/lib/sanity'

interface Progetto {
  _id: string
  titolo: string
  slug: {
    current: string
  }
  immagineCopertina?: {
    asset: {
      _ref: string
    }
  }
  descrizioneProgetto?: string
}

async function getProjects(): Promise<Progetto[]> {
  const query = `*[_type == "progetto"] | order(_createdAt desc) {
    _id,
    titolo,
    slug,
    immagineCopertina,
    descrizioneProgetto
  }`
  return sanityFetch({ query, tags: ['progetti'] })
}

export default async function ProgettiGrid() {
  const projects = await getProjects()

  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <a
              key={project._id}
              href={`/progetti/${project.slug.current}`}
              className="group cursor-pointer block h-full"
            >
              {project.immagineCopertina && (
                <div
                  className="relative overflow-hidden aspect-square mb-4"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <Image
                    src={urlFor(project.immagineCopertina).url()}
                    alt={project.titolo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ backgroundColor: 'rgba(10,11,13,0.3)' }}
                  />
                </div>
              )}
              <h3
                className="font-display font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--color-primary-light)]"
                style={{
                  fontSize: 'clamp(19px, 2vw, 26px)',
                  color: 'var(--color-text)',
                }}
              >
                {project.titolo}
              </h3>
              {project.descrizioneProgetto && (
                <p
                  className="font-body font-light line-clamp-2"
                  style={{
                    fontSize: 'clamp(15px, 1vw, 17px)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {project.descrizioneProgetto}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
