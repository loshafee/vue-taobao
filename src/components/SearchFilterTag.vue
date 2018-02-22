<template>
  <div>
    <div class="list-header-title">
      <dl>
        <dt>{{ title }}：</dt>
        <dd>{{ selectedTags.toString() }}</dd>
      </dl>
      <span class="toggle-btn" @click="onShow">
        <i class="icon iconfont" :class="toggleArrow"></i>
      </span>
    </div>
    <div class="tag-list" :class="{'toggle-show':tagShowabled}">
      <span v-for="(tag, index) in discountTags" :key="index" @click="onActive(tag)" :class="{'active-tag': selectedTags.indexOf(tag) !== -1}">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilterTag',
  props: ['discountTags', 'title', 'selectedMoreabled', 'selectedTags'],
  data () {
    return {
      tagShowabled: true
    }
  },
  computed: {
    toggleArrow () {
      if (!this.tagShowabled) {
        return 'icon-fold'
      } else {
        return 'icon-unfold'
      }
    }
  },
  methods: {
    onActive (item) {
      if (this.selectedMoreabled) {
        let index = this.selectedTags.indexOf(item)
        if (index === -1) {
          this.selectedTags.push(item)
        } else {
          this.selectedTags.splice(index, 1)
        }
      } else {
        this.selectedTags.splice(0, 1, item)
      }
    },
    onShow () {
      this.tagShowabled = !this.tagShowabled
    }
  }
}
</script>

<style lang="less" scoped>

.toggle-show {
  height: 42px;
  overflow: hidden;
}
&.list-range {
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      background-color: #f2f2f2;
      font-size: 1.6rem;
      width: 60px;
      padding: 7px 6px;
      border-radius: 4px;
    }
    span {
      margin: 0 8px;
    }
  }
}
.list-header-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  .toggle-btn {
    padding: 4px;
  }        
}
dl {
  display: flex;
  white-space: nowrap;
  dd {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 150px;
    color: #ff5000;
  }
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    width: 30%;
    background-color: #f2f2f2;
    text-align: center;
    border-radius: 4px;
    padding: 6px 0;
    margin: 6px 0;
    &.active-tag {
      color: #fff;
      background-color: #ff5000;
    }
  }
}
</style>
