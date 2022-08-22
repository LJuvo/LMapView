<template>
  <div class="dou-book">
    <div class="dou-book-cell">
      <h3>公开甄选</h3>
      <p>简要描述信息内容</p>
      <button>选择</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.dou-book {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.dou-book-cell {
  padding: 10px;
  background: linear-gradient(to bottom, #000000aa, #00000000);
}
.dou-book-cell h3 {
  padding-bottom: 10px;
  border-bottom: 1px solid #ffffff;
}
</style>
