import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.PROJECTID,
    dataset: "production"
})
