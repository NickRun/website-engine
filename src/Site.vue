<template lang="jade">
router-view
</template>

<script>
export default {
  replace: false
}
</script>

<style lang="scss">
@import "./scss/vendor/normalize";
@import "./scss/variables";
@import "./scss/mixins/media-queries";
@import "./scss/mixins/clearfix";
@import "./scss/mixins/btn-sizes";
@import "./scss/utilities/visibility";
@import "./scss/partials/global";
@import "./scss/partials/typography";
@import "./scss/partials/buttons";
@import "./scss/partials/code";
@import "./scss/partials/tables";
@import "./scss/partials/forms";
@import "./scss/partials/lists";
@import "./scss/partials/canvas";
@import "./scss/partials/grid";
</style>
