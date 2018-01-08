<template>
    <div>
        <div class="dialog" v-show="popup">
            <div class="dialog-box">
                <P>{{text}}</P>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props: ["popup", "text"],
    props: {
        popup: {
            type: Boolean,
        },
        text: {
            type: String,
        }
    },
    data() {
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
.dialog {
  position: relative;
  .dialog-box {
    position: fixed;
    transition: opacity 0.5s;
    z-index: 9999;
    width: 150px;
    height: 50px;
    top: 50%;
    left: 50%;
    line-height: 50px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background: #000;
    opacity: 0.7;
    border-radius: 10px;
    font-size: 14px;
    p {
      color: #fff;
    }
  }
}
</style>


