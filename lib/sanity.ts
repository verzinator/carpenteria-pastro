import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source as any)
}

export async function sanityFetch({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'production' ? 3600 : 0,
      tags,
    },
  })
}
