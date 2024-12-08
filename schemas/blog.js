// Import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Define your document type
const blogPost = {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    }
  ]
}

// Define your schema
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blogPost])
})