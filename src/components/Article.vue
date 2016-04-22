<template lang = "jade">
article.article
  div.article__header
    div.g-wrapper
      div.row
        div.g-col-12
          header
            h2.article__title= "{{ sharedState.activePost.title }}"
  div.g-wrapper
    div.row(v-if= "sharedState.activePost.post_type === 'notes'")
      div.g-col-12
        div.article__meta.
          Published On #[span(class= 'article__meta__date') {{ sharedState.activePost.publish_date }}]
    div.row
      div.g-col-10.g-push-1.article__content= "{{{ sharedState.activePost.body }}}"
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      sharedState: store.state
    }
  }
}
</script>

<style lang= "scss">
@import '../scss/variables';
@import '../scss/mixins/btn-sizes';
@import '../scss/mixins/clearfix';
@import '../scss/mixins/media-queries';
@import '../scss/partials/article/article';
@import "../scss/partials/code";
@import "../scss/utilities/responsive-table";
@import "../scss/utilities/no-top-margin";
@import "../scss/utilities/highlight";
</style>