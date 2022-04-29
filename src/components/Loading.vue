<template>
  <div class="spinner">
    <i class="point" v-for="i in divCount" :key="i"></i>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      divCount: 6
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes loading {
  0% {
    opacity: 0.4;
    width: 5px;
    height: 5px;
  }
  50% {
    opacity: 0.8;
    width: 10px;
    height: 10px;
  }
  100% {
    opacity: 0.4;
    width: 5px;
    height: 5px;
  }
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 1.5s linear infinite;
  animation-fill-mode: forwards;
  // background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  .point {
    background: linear-gradient(to bottom, #094170 0%, #01305e 100%);
    width: 5px;
    height: 5px;
    opacity: 0.4;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    transform-origin: center center;
    animation: loading 1.5s linear infinite;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      transform: rotate(0deg) translate(15px, 0);
      animation-delay: 0s;
    }
    &:nth-child(2) {
      transform: rotate(60deg) translate(15px, 0);
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      transform: rotate(120deg) translate(15px, 0);
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      transform: rotate(180deg) translate(15px, 0);
      animation-delay: 0.9s;
    }
    &:nth-child(5) {
      transform: rotate(240deg) translate(15px, 0);
      animation-delay: 1.2s;
    }
    &:nth-child(6) {
      transform: rotate(300deg) translate(15px, 0);
      animation-delay: 1.5s;
    }
  }
}
</style>