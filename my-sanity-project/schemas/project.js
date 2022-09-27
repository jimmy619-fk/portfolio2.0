export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of project",
      type: "string"
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    }, {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: 'skill' } }],
    },
    {
      name: 'linktobuild',
      title: 'LinkToBuild',
      type: 'url',

    },

  ],
}

