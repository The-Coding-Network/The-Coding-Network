import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.projectId,
    dataset: "production"
})