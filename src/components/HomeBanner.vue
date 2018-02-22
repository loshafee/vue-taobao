<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->

    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <a :href="slide.href ? slide.href : 'javascript:void(0);'">
        <img :src="slide.src" alt="">
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HomeBanner',
  props: ['slides'],
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        allowTouchMove: true,
        autoHeight: true
      }
    }
  },
  methods: {

  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
  .swiper-container {
    min-height: 100px;
  }
</style>
