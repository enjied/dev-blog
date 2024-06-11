<template>
  <div class="image-loader-container">
    <img v-if="!isCompleted" class="placeholder"  :src="placeholder">
    <img :src="src" @load="handleLoaded()" :style="{ opacity: opacity, transition: `${duration}ms` }" />
  </div>
</template>

<style scoped>
.image-loader-container {
  position: relative;
  overflow: hidden;
}

img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.placeholder {
  position: absolute;
  filter: blur(2vw);
}
</style>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      isCompleted: false
    }
  },
  computed: {
    opacity() {
      return this.isLoaded ? 1 : 0
    }
  },
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      retuired: true
    },
    duration: {
      type: Number,
      default: 500
    },
  },
  methods: {
    handleLoaded() {
      this.isLoaded = true
      setTimeout(() => {
        this.isCompleted = true
        this.$emit("load")
      }, this.duration)
    }
  },
}
</script>