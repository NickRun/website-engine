<template lang="jade">
router-view
</template>

<script>
export default {
  replace: false
}
</script>

<style lang="scss">
@import "../scss/vendor/normalize";

@import "../scss/variables";

@import "../scss/mixins/media-queries";
@import "../scss/mixins/clearfix";
@import "../scss/mixins/btn-sizes";

@import "../scss/utilities/visibility";
@import "../scss/utilities/email-obfuscator";

@import "../scss/partials/global";
@import "../scss/partials/images";
@import "../scss/partials/typography";
@import "../scss/partials/buttons";
@import "../scss/partials/canvas";
@import "../scss/partials/grid";
</style>
