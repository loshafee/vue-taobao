<template>
    <section class="item-details">
      <header>
        <div v-for="(details, index) in itemDetails.titles"
             :key="index"
             :class="{'active': index === itemDetails.activeIndex}"
             @click="itemDetails.activeIndex = index">
          {{ details }}
        </div>
      </header>
      <div class="item-details-box">
        <div class="item-part-1" :class="{'showable': itemDetails.activeIndex === 0}">
          <img v-for="(url, index) in imgInfo"
               :src="url"
               :key="index">
        </div>
        <div class="item-part-2" :class="{'showable': itemDetails.activeIndex === 1}">
          <dl v-for="(title, index) in productParam.titles" :key="index">
            <dt>{{ title }}</dt>
            <dd>{{ productParam.values[index]}}</dd>
          </dl>
        </div>
        <div class="item-part-3" :class="{'showable': itemDetails.activeIndex === 2}">
          <div class="recommend-list">
            <h2>宝贝推荐</h2>
            <ul>
              <li>
                <div>
                  <a href="">
                    <img src="/static/img/p1.jpg" alt="">
                  </a>
                </div>
                <p>
                  加厚保暖冬季单人蚕丝棉被子大学生宿舍冬天冬被芯丝绵秋天2双人
                </p>
                <span class="p-price">&yen;49.0</span>                
              </li>
              <li>
                <div>
                  <a href="">
                    <img src="/static/img/p1.jpg" alt="">
                  </a>
                </div>
                <p>
                  加厚保暖冬季单人蚕丝棉被子大学生宿舍冬天冬被芯丝绵秋天2双人
                </p>
                <span class="p-price">&yen;49.0</span>                
              </li>
              <li>
                <div>
                  <a href="">
                    <img src="/static/img/p1.jpg" alt="">
                  </a>
                </div>
                <p>
                  加厚保暖冬季单人蚕丝棉被子大学生宿舍冬天冬被芯丝绵秋天2双人
                </p>
                <span class="p-price">&yen;49.0</span>                
              </li>
              <li>
                <div>
                  <a href="">
                    <img src="/static/img/p1.jpg" alt="">
                  </a>
                </div>
                <p>
                  加厚保暖冬季单人蚕丝棉被子大学生宿舍冬天冬被芯丝绵秋天2双人
                </p>
                <span class="p-price">&yen;49.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'ItemDetails',
  data () {
    return {
      itemDetails: {
        activeIndex: 0,
        titles: ['图片详情', '产品参数', '店铺推荐']
      },
      imgInfo: ['/static/img/item_1.webp', '/static/img/item_1.webp'],
      productParam: {
        titles: ['季节', '被子面料', '棉种类', '品牌', '颜色分类', '产品等级', '填充物', '尺寸', '织造工艺', '制作工艺'],
        values: ['冬', '棉', '棉', '蝶唯梦', '粉色-蚕丝棉被,玉色-蚕丝棉被,米黄-蚕丝棉被,白色-蚕丝棉被', '合格品', '混纺', '150x200cm3斤夏被,150x200cm4斤夏被,150x200cm6斤春秋,180x220cm4斤夏被,180x220cm6斤春秋,180x220cm8斤冬被,200X230cm4斤夏被,200X230cm6斤春秋,200X230cm8斤冬被', '磨毛', '绗缝']
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .item-details {
    margin: 4% 0;
    header {
      display: flex;
      height: 40px;
      line-height: 40px;
      div {
        flex: 1;
        font-size: 1.6rem;
        text-align: center;
        background-color: #fff;
        &.active {
          color: #ff5000;
          border-bottom: 1px solid #ff5000;
        }
      }
    }
    .item-details-box {
      margin: 4% 0;
    }
    .item-details-box > div {
      display: none;
      &.showable {
        display: block;
      }
      background-color: #fff;
      dl {
        display: flex;
        border-bottom: 1px solid #eee;
        margin: 0 auto;
        width: 92%;
        padding: 8px 0;
        dt {
          flex-basis: 28%;
          color: #999;
        }
        dd {
          flex: 1;
        }
      }
    }
    .recommend-list {
      h2 {
        font-size: 1.4rem;
        position: relative;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #f5f5f5;
        &:after, &:before {
          content: '';
          position: absolute;
          top: 17px;
          width: 30%;
          height: 1px;
          background-color: #999;
        }
        &:before {
          left: 6%;
        }
        &:after {
          right: 6%;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          flex-basis: 48%;
          margin-bottom: 2%;
          p {
            margin: 6px 5%;
            font-size: 1.3rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .p-price {
            margin-left: 5%;
            color: #ff5000;
            font-size: 1.6rem;
            
          }
        }
      }
    }
  }
</style>
