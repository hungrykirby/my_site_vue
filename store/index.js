import defaultEyeCatch from '~/assets/images/defaultEyeCatch.jpg'

export const getters = {
  setEyeCatch: () => (post) => {
    if (!!post.fields.main_image && !!post.fields.main_image.fields) return { url: `https:${post.fields.main_image.fields.file.url}`, title: post.fields.main_image.fields.title }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  }
}
