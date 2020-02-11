<template>
	<div id="edc">
    
    <!-- 相机 -->
    <div id="camera">
      <div id="olympus-mzuiko-digital-ed-12-50mm-f35-63-ez">
        
        <div class="lens-body">
          <div class="lens-cap"></div>
          <div class="lens-trigger"></div>
          <div class="lens-observer"><span></span></div>
          <div class="lens-bottom"></div>
        </div>
        
      </div>

      <div id="panasonic-lumix-dmc-g7">
        <div class="lumix-main">
          <div class="lumix-lens"></div>
          <div class="lumix-button"></div>
          <div class="lumix-holder">
            <div class="lumix-holder-button"></div>
          </div>
          <div class="lumix-top">Lumix</div>
          <div class="lumix-bottom"></div>
        </div>
      </div>
    </div>
    <!-- 手机 -->
    <div id="mobile">
      <div id="smartisan-osborn">
        <div class="screen-wrap">
          <div class="camera"></div>
          <div class="screen"></div>
          <div class="button"></div>
        </div>
      </div>
      <div id="iphone-6s-plus">
        <div class="camera"></div>
        <div class="screen-wrap">
          <div class="screen"></div>
        </div>
        <div class="home-button"></div>
      </div>

    </div>
    <!-- 笔记本电脑 -->
    <div id="laptop">
      <div id="macbook-pro-2018">
        <div class="screen-wrap">
          <div class="screen">
            <slot name="default"></slot>
          </div>
        </div>
        <div class="keyboard"></div>
      </div>
    </div>
    <!-- 耳机 -->
    <div id="headphone">
      <div id="beats-solo-3-wireless">
        <div class="solo-beam"></div>
        <div class="sound-unit-left"></div>
        <div class="sound-unit-right"></div>
      </div>
    </div>
    <!-- 文具 -->
    <div id="stationary">
      <div id="handbook">
        <div class="cover"></div>
      </div>

      <div id="lamy-studio">
        <div class="pen">
          <div class="pen-cap">
            <div class="pen-clip"></div>
          </div>
          <div class="pen-holder"></div>
        </div>
      </div>
    </div>

	</div>
</template>



<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#edc {
  position: fixed;
  width: 100vw;
  height: 200%;
  z-index: 0;
  // display: grid;
  // grid-template-columns: 17.5% 17.5% 30% 17.5% 17.5%;
  // grid-template-rows: 50% 50%;
  // grid-gap: 20px 0;
  // justify-items: center;
  // align-items: end;
  // height: 40vh;
  // margin-bottom: 50px;
}

#camera, #mobile,#laptop, #headphone, #stationary {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
}

#camera {
  top: 70%;
  left: -10vw;
  transform: translateZ(-1px);
}

#mobile {
  top: 30%;
  left: 0;
  transform: translateZ(-2px);
  
}

#laptop {
  top: 60%;
  right: -30vw;
  transform: translateZ(-3px);
}

#headphone {
  top: 0;
  left: -20vw;
  transform: translateZ(-2px);
}

#stationary {
  top: 10%;
  right: 0;
  transform: translateZ(-1px);
}

#panasonic-lumix-dmc-g7 {
  transform: translateY(-5px);
  .lumix-main {
    position: relative;
    width: 120px;
    height: 70px;
    background: #454448;
    border-top-left-radius: 60px 5px;
    border-top-right-radius: 20px 5px;
    .lumix-lens {
      position: absolute;
      right: 10px;
      bottom: -7px;
      width: 65px;
      height: 65px;
      border: 5px solid #373435;
      border-radius: 75px;
      background: #000;
      // background: radial-gradient(ellipse at center, rgb(0,0,0) 0%, rgb(0,0,0) 15%,rgb(39,37,37) 30%,rgb(64,62,63) 30%,rgb(64,62,63) 31%,rgb(64,62,63) 40%,rgb(233,235,236) 41%,rgb(233,235,236) 44%,rgb(176,177,178) 48%,rgb(232,233,234) 50%,rgb(232,233,234) 60%,rgb(247,248,248) 60%,rgb(120,121,121) 65%,rgb(255,255,255) 66%,rgb(255,255,255) 100%);
      box-shadow: inset 0 0 0 5px #D6D7DC;
      z-index: 9999;
      &:before {
        content: "";
        position: absolute;
        top: 17px;
        left: 12px;
        width: 31px;
        height: 21px;
        background: #232223;
      }
      &:after {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 45px;
        height: 45px;
        border: 7px solid #454448;
        border-radius: 45px;
        background: transparent;
      }
    }
    .lumix-button {
      position: absolute;
      left: 38px;
      top: -5px;
      width: 20px;
      height: 6px;
      background: #232223;
      transform: rotate(-2deg);
      &:before {
        content: "";
        position: absolute;
        top: 4px;
        left: 60px;
        width: 20px;
        height: 5px;
        background: #232223;
        transform: rotate(9deg);
      }
      &:after {
        content: "";
        position: absolute;
        top: 44px;
        left: 60px;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: #232223;
      }
    }
    .lumix-holder {
      position: absolute;
      left: 0;
      width: 30px;
      height: 100%;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 10px;
        height: 45px;
        background: #373435;
        border-top-right-radius: 10px 45px;
        border-bottom-right-radius: 5px;
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 10px;
        height: 45px;
        background: #373435;
        border-top-left-radius: 10px 45px;
        border-bottom-left-radius: 5px;
      }

      .lumix-holder-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 33px;
        height: 20px;
        border-bottom-left-radius: 20px 5px;
        border-bottom-right-radius: 20px 5px;
        border-bottom: 4px solid #373435;
        &:before {
          content: "";
          position: absolute;
          right: 2px;
          bottom: 4px;
          width: 15px;
          height: 8px;
          border-radius: 15px / 8px;
          background: #232223;
          transform: rotate(-6deg);
        }
        &:after {
          content: "";
          position: absolute;
          top: 8px;
          left: 38px;
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background: #F7F7F6;

        }
      }
    }
    .lumix-top {
      position: absolute;
      top: 0px;
      right: 22px;
      width: 40px;
      border-bottom: 15px solid #232223;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      background: #373435;
      line-height: 1;
      text-align: center;
      font-family: sans-serif;
      font-size: 9px;
      font-variant: small-caps;
      color: #FFF;
      &:before {
        content: "";
        position: absolute;
        left: -5px;
        top: -8px;
        width: 40px;
        border-bottom: 8px solid #373435;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
      &:after {
        content: "";
        position: absolute;
        left: -5px;
        bottom: -22px;
        width: 40px;
        border-bottom: 10px solid #232223;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
    }
    .lumix-bottom {
      position: absolute;
      bottom: -5px;
      height: 5px;
      width: 100%;
      border-bottom-left-radius: 3px 5px;
      border-bottom-right-radius: 3px 5px;
      background: #373435;
    }
  }
}

#olympus-mzuiko-digital-ed-12-50mm-f35-63-ez {
  margin-right: 21px;
  transform: translateY(-5px);
  .lens-body {
    position: relative;
    width: 50px;
    height: 83px;
    background: #4b4b4d;
  }
  .lens-cap {
    position: absolute;
    top: -10px;
    left: -11px;
    width: 72px;
    border-top: 10px solid #232223;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    &:before {
      content: "";
      position: absolute;
      top: -17px;
      left: -10px;
      width: 72px;
      height: 7px;
      background: #232223;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 52px;
      height: 7px;
      background: #232223;
    }
  }
  .lens-trigger {
    position: absolute;
    top: 7px;
    left: -1px;
    width: 52px;
    height: 8px;
    border-radius: 2px 2px 0 0;
    background: #D6D7DC;

    &:before {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      width: 52px;
      height: 8px;
      border-radius: 0 0 2px 2px;
      background: #454448;
    }
    &:after {
      content: "";
      position: absolute;
      top: 18px;
      left: 0;
      width: 52px;
      height: 20px;
      border-radius: 2px;
      background: #454448;
    }
  }
  .lens-observer {
    position: absolute;
    bottom: 6px;
    left: -1px;
    width: 52px;
    height: 30px;
    border-radius: 2px;
    background: #373435;
    &:before {
      content: "";
      position: absolute;
      bottom: 2px;
      right: 5px;
      width: 20px;
      height: 8px;
      background: #454448;
      border: 2px solid #232223;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: -2px;
      width: 2px;
      height: 12px;
      border-radius: 2px 0 0 2px;
      background: #454448;
    }

    span {
      position: absolute;
      top: 2px;
      left: 50%;
      width: 1px;
      height: 8px;
      background: #D6D7DC;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 7px;
        width: 15px;
        height: 2px;
        background: #B2B2BA;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 7px;
        width: 15px;
        height: 2px;
        background: #B2B2BA;
      }
    }
  }
  .lens-bottom {
    position: absolute;
    bottom: 0;
    left: -1px;
    width: 52px;
    height: 6px;
    border-radius: 2px;
    background: #373435;
    &:before {
      content: "";
      position: absolute;
      bottom: 1px;
      left: calc(50% - 1px);
      width: 3px;
      height: 3px;
      border-radius: 3px;
      background: $red;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 6px;
      width: 40px;
      height: 5px;
      border-bottom: 1px solid #8B8C90;
      background: #D6D7DC;
    }
  }
}

#macbook-pro-2018 {
  transform: translateY(-5px);
  // position: absolute;
  // bottom: 0;
  // left: calc(50% - 275px);
  .screen-wrap {
    position: relative;
    width: 435px;
    // width: 80%;
    height: 270px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 13px 13px 0 0;
    background: #232223;
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 5px;
      background: #7c7b7b;
      border-radius: 100%;
      width: 5px;
      height: 5px;
    }
    &:after {
      content: "";
      position: absolute;
      // left: calc(50% - 50px);
      left: 0;
      bottom: 0;
      width: 100%;
      height: 9px;
      background: #373435;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 9px;
      color: #4b4b4d;
    }
  }

  .screen {
    width: 100%;
    height: 100%;
    // background: #4b4b4d;
    background: $black;
    text-align: center;
  }

  .keyboard {
    position: relative;
    width: 550px;
    height: 10px;
    margin: 0 auto;
    // border-radius: 0 0 13px 13px;
    background: #B2B2BA;
    // background: #B0B0B8;
    // background: linear-gradient(90deg, rgba(87,88,91,1) 0%, rgba(171,171,179,1) 2%, rgba(102,103,107,1) 4%, rgba(176,176,181,1) 10%, rgba(176,176,181,1) 50%, rgba(176,176,181,1) 90%, rgba(102,103,107,1) 96%, rgba(171,171,179,1) 98%, rgba(87,88,91,1) 100%);
    &:before {
      content: "";
      position: absolute;
      left: calc(50% - 38px);
      width: 76px;
      height: 7px;
      border-radius: 0 0 5px 5px;
      margin: 0 auto;
      background: #8B8C90;
      box-shadow: inset 0 -1px 7px #454448;
    }
    &:after {
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 5px;
      border-bottom-left-radius: 70px 5px;
      border-bottom-right-radius: 70px 5px;
      // background: #6E6F70;
      // background: #87888C;
      background: darken(#B2B2BA, 10%);
    }
  }
}

#iphone-6s-plus {
  position: relative;
  .screen-wrap {
    background: #FFF;
    border: 3px solid #D6D7DC;
    border-radius: 10px;
    width: 79px;
    height: 159px;
    padding: 18px 3px;
    // box-shadow: 0px 10px 25px rgba(51, 51, 51, 0.3);
  }
  .camera {
    position: absolute;
    top: 10px;
    left: calc(50% - 7px);
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background: #232223;
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      left: calc(50% - 1px);
      width: 2px;
      height: 2px;
      border-radius: 2px;
      background: #232223;
    }
    &:after {
      content: "";
      position: absolute;
      top: -1px;
      left: -9px;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background: #232223;
    }
  }
  .screen {
    width: 100%;
    height: 100%;
    background: #232223;
  }
  .home-button {
    position: absolute;
    left: calc(50% - 7px);
    bottom: 5px;
    width: 14px;
    height: 14px;
    border: 2px solid #D6D7DC;
    border-radius: 100%;
  }
}

#smartisan-osborn {
  margin-right: 21px;
  .screen-wrap {
    position: relative;
    width: 70px;
    height: 152px;
    border-radius: 5px;
    background: #66313D;
  }
  .screen {
    position: absolute;
    top: 8px;
    left: 2px;
    width: 66px;
    height: 137px;
    border-radius: 5px;
    background: #232223;
  }
  .camera {
    position: absolute;
    top: 3px;
    left: calc(50% - 2px);
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background: #232223;
  }
  .button {
    position: absolute;
    top: 35px;
    right: -2px;
    width: 2px;
    height: 8px;
    border-radius: 0 2px 2px 0;
    background: #66313D;
    &:before {
      content: "";
      position: absolute;
      top: 12px;
      width: 2px;
      height: 8px;
      border-radius: 0 2px 2px 0;
      background: #66313D;
    }
    &:after {
      content: "";
      position: absolute;
      top: 31px;
      width: 2px;
      height: 8px;
      border-radius: 0 2px 2px 0;
      background: #66313D;
    }
  }
}

#beats-solo-3-wireless {
  position: relative;
  .solo-beam {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: #373435;
    &:before {
      content: "";
      position: absolute;
      top: 14px;
      left: 3px;
      width: 144px;
      height: 136px;
      border-radius: 144px / 140px;
      background: #F7F7F6;
    }
  }
  .sound-unit-left {
    position: absolute;
    top: 93px;
    left: 13px;
    width: 0;
    height: 60px;
    border-right: 15px solid #232223;
    border-top: 10px solid transparent;
    border-bottom: 5px solid transparent;
    transform: rotate(-10deg);
    &:before {
      content: "";
      position: absolute;
      top: -26px;
      left: -7px;
      width: 6px;
      height: 70px;
      border-bottom-left-radius: 10px 5px;
      background: #232223;
    }
    &:after {
      content: "";
      position: absolute;
      top: -18px;
      right: -28px;
      width: 12px;
      height: 75px;
      border-radius: 5px;
      background: #373435;
    }
  }

  .sound-unit-right {
    position: absolute;
    top: 93px;
    right: 13px;
    width: 0;
    height: 60px;
    border-left: 15px solid #232223;
    border-top: 10px solid transparent;
    border-bottom: 5px solid transparent;
    transform: rotate(10deg);
    &:before {
      content: "";
      position: absolute;
      top: -26px;
      right: -7px;
      width: 6px;
      height: 70px;
      border-bottom-right-radius: 10px 5px;
      background: #232223;
    }
    &:after {
      content: "";
      position: absolute;
      top: -18px;
      left: -28px;
      width: 12px;
      height: 75px;
      border-radius: 5px;
      background: #373435;
    }
  }
}

#handbook {
  .cover {
    position: relative;
    width: 145px;
    height: 215px;
    background: #373435;
    border-radius:  3px 9px 9px 3px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 15px;
      width: 5px;
      height: 100%;
      background: #232223;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 10px;
      width: 5px;
      height: 15px;
      border-bottom-left-radius: 10px 5px;
      background: #232223;
    }
  }
}

#lamy-studio {
  display: inline-block;
  margin-left: 3px;
  transform: translateY(-3px);
  .pen {
    position: relative;
    width: 10px;
    height: 140px;
    background: #232223;
    border-top-left-radius: 1px 55px;
    border-top-right-radius: 1px 55px;
    border-bottom-left-radius: 1px 85px;
    border-bottom-right-radius: 1px 85px;
  }
  .pen-cap {
    position: absolute;
    top: 0;
    width: 10px;
    height: 55px;
    background: #232223;
    border-bottom: 1px solid #454448;
    border-top-right-radius: 1px 55px;
    border-top-left-radius: 1px 55px;
    &:after {
      content: "";
      position: absolute;
      top: -3px;
      left: 1px;
      height: 3px;
      width: 8px;
      background: $white;
      border-left: 2px solid #B2B2BA;
      border-right: 2px solid #B2B2BA;
      border-radius: 1px 1px 0 0;
    }
  }
  .pen-clip {
    position: absolute;
    top: 3px;
    right: -5px;
    width: 5px;
    height: 45px;
    background: #B2B2BA;
    border-radius: 0 4px 4px;
    
    &:before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 2px;
      height: 38px;
      background: $white;
      border-top: 1px solid #B2B2BA;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px 22px;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      width: 2px;
      height: 38px;
      background: $white;
      border-bottom-left-radius: 2px 22px;
    }
  }
  .pen-holder {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 85px;
    background: #232223;
    border-bottom-left-radius: 1px 85px;
    border-bottom-right-radius: 1px 85px;
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 1px;
      height: 3px;
      width: 8px;
      background: $white;
      border-left: 2px solid #B2B2BA;
      border-right: 2px solid #B2B2BA;
      border-radius: 0 0 1px 1px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  #lamy-studio .pen-clip:before,
  #lamy-studio .pen-clip:after {
    background: $black;
  }

  #beats-solo-3-wireless .solo-beam:before {
    background: $black;
  }
}

@media screen and (max-width: 732px) {
	#edc {
    display: block;
  }
  #camera, #mobile, #headphone, #stationary {
    display: none;
  }
  #macbook-pro-2018 {
    // transform: scale(0.75);
    // display: none;
  }
}
</style>
