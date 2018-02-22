<template>
  <div class="channel">
    <div class="channel-left">
      <a href="###">
        <img src="/static/img/c1_0.jpg" alt="">
      </a>
      <p class="time-bar">
        <span class="time-hour">{{ timeHours }}</span>
        :
        <span class="time-minutes">{{ timeMinutes }}</span>
        :
        <span class="time-seconds">{{ timeSeconds }}</span>
      </p>
    </div>
    <div class="channel-right">
      <div>
        <a href="###">
          <img src="/static/img/c1_1.jpg" alt="">
        </a>
        <a href="###">
          <img src="/static/img/c1_2.png" alt="">
        </a>
      </div>
      <div>
        <a href="###">
          <img src="/static/img/c1_3.jpg" alt="">
        </a>
        <a href="###">
          <img src="/static/img/c1_4.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeChannelLimitBuy',
  data () {
    return {
      beginTimestamp: new Date().getTime(),
      endTimestamp: new Date(2018, 0, 14).getTime()
    }
  },
  methods: {
    tick () {
      this.beginTimestamp = new Date().getTime()
    }
  },
  computed: {
    timeHours () {
      return parseInt((this.endTimestamp - this.beginTimestamp) / 1000 / 60 / 60)
    },
    timeMinutes () {
      return parseInt((this.endTimestamp - this.beginTimestamp) / 1000 / 60 % 60)
    },
    timeSeconds () {
      return parseInt((this.endTimestamp - this.beginTimestamp) / 1000 % 60)
    }
  },
  mounted () {
    setInterval(this.tick.bind(this), 1000)
  }
}
</script>

<style scoped lang="less">
  .channel {
    display: flex;
    margin-top: 2%;
    &-left {
      position: relative;
      .time-bar {
        position: absolute;
        top: 30%;
        left: 10px;
        span {
          display: inline-block;
          background-color: #373737;
          color: #fff;
          width: 18px;
          border-radius: 2px;
          text-align: center;
        }
      }
    }
    &-right > div {
      display: flex;
    }
  }
</style>
