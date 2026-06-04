import Image from 'next/image'
import { sanityFetch, urlFor } from '@/lib/sanity'

interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: {
    asset: {
      _id: string
    }
  }
  description?: string
}

async function getProjects() {
  const query = `*[_type == "progetto"] | order(_createdAt desc) { _id, title, slug, mainImage, description }`
  return sanityFetch({ query, tags: ['projects'] })
}

export default async function ProgettiGrid() {
  const projects: Project[] = await getProjects()

  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="grid gap-8 md:gap-12"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {projects.map((project) => {
            if (!project.mainImage) return null
            return (
            <a
              key={project._id}
              href={`/progetti/${project.slug.current}`}
              className="group cursor-pointer block h-full"
            >
              <div
                className="relative overflow-hidden h-64 md:h-72 mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="font-display font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--color-primary-light)]"
                style={{
                  fontSize: 'clamp(19px, 2vw, 26px)',
                  color: 'var(--color-text)',
                }}
              >
                {project.title}
              </h3>
              {project.description && (
                <p
                  className="font-body font-light line-clamp-2"
                  style={{
                    fontSize: 'clamp(15px, 1vw, 17px)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {project.description}
                </p>
              )}
            </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
