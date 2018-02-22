<template>
  <div class="container">
    <home-search-bar></home-search-bar>
    <home-banner :slides="slides"></home-banner>
    <home-channel></home-channel>
    <home-top-news></home-top-news>
    <home-channel-limit-buy></home-channel-limit-buy>
    <home-channel-affordable></home-channel-affordable>
    <item-footer-bar></item-footer-bar>    
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HomeSearchBar from '@/components/HomeSearchBar'
import HomeBanner from '@/components/HomeBanner'
import HomeChannel from '@/components/HomeChannel'
import HomeTopNews from '@/components/HomeTopNews'
import HomeChannelLimitBuy from '@/components/HomeChannelLimitBuy'
import HomeChannelAffordable from '@/components/HomeChannelAffordable'
import FooterBar from '@/components/FooterBar'
import ItemFooterBar from '@/components/ItemFooterBar'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'hello vue',
      slides: [{
        href: '#/item',
        src: '/static/img/b1.jpg'
      },
      {
        href: '',
        src: '/static/img/b2.jpg'
      },
      {
        href: '',
        src: '/static/img/b3.jpg'
      },
      {
        href: '',
        src: '/static/img/b4.jpg'
      }]
    }
  },
  components: {
    HomeSearchBar,
    HomeBanner,
    HomeChannel,
    HomeTopNews,
    HomeChannelLimitBuy,
    HomeChannelAffordable,
    FooterBar,
    ItemFooterBar
  }
}
</script>

<style scoped>
  .container {
    background-color: #eee;
  }
</style>


