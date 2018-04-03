<template>
  <div class="home">
    <div class="me">
      <div class="title" @click="langSwitch">
        <h1>{{name}}</h1>
        <h2>{{title}}</h2>
      </div>
      <div class="iconList" @click="jump($event)">
        <i class="iconfont icon-POP_GitHub"></i>
        <i class="iconfont icon-mail"></i>
        <i class="iconfont icon-zhihu"></i>
      </div>
      <div class="resume">Get Resume</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      name: 'Rico Leung',
      title: 'FRONTEND DEVELOPER'
    }
  },
  components: {
  },
  methods: {
    langSwitch () {
      this.name = this.name === '梁 锦 润' ? 'Rico Leung' : '梁 锦 润'
      // this.title = this.title === '前端开发工程师' ? 'FRONTEND DEVELOPER' : '前端开发工程师'
    },
    jump (e) {
      console.log(e.target.classList[1] === 'icon-POP_GitHub')
      var href = ''
      switch (e.target.classList[1]) {
        case 'icon-POP_GitHub':
          href = 'https://github.com/momogc'
          break
        case 'icon-mail':
          href = 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=NlpfV1hRXF9YRENYdlBZTltXX1oYVVlb'
          break
        case 'icon-zhihu':
          href = 'https://www.zhihu.com/people/liang-jin-57/activities'
          break
        default:
          href = ''
          break
      }
      if (href) window.open(href)
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  filter: blur(0);
  .me {
    position: fixed;
    top: 40%;
    width: 100%;
    margin-top: -100px;
    h1 {
      font-family: 'Lato', Helvetica, Arial, sans-serif;
      font-size: 70px;
      line-height: 70px;
      font-weight: 700;
      letter-spacing: 3px;
      user-select: none;
    }
    h2 {
      font-size: 30px;
      font-weight: 300px;
      letter-spacing: 3px;
      user-select: none;
    }
    .resume {
      margin-top: 70px;
      width: 280px;
      height: 70px;
      line-height: 65px;
      font-size: 36px;
      position: absolute;
      left: 50%;
      border-radius: 70px;
      border: 2px solid #fff;
      margin-left: -140px;
      user-select: none;
    }
  }
  .iconList {
    width: 100%;
    margin-top: 40px;
    .iconfont {
      font-size: 42px;
      width: 100px;
      height: 100px;
      margin-right: 50px;
    }
    .iconfont:last-child {
      margin-right: 0;
    }
  }
}
</style>
