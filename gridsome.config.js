// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'distributeddatacloud',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Netlify CMS for content.',

  templates: {
        Post: '/:title'
    },

    plugins: [
        {
            use: 'gridsome-transformer-netlify',
            options: {
                imageKey: 'image',
                markdownKey: 'body'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/pages/**/*.yml',
                typeName: 'Pages',
                remark: {
                    plugins: [
                        // ...local plugins
                    ]
                }
            }
        },
        {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
      }
        },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
