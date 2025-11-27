<template>
  <div class="layout">
    <div class="editor-pane">
      <div class="pane-header">配置输入</div>
      <textarea
        v-model="content"
        class="source-editor"
        placeholder="在此粘贴代码..."
        spellcheck="false"
      />
    </div>

    <div class="preview-pane">
      <div class="pane-header">模拟 Ruijie 终端</div>
      <div class="terminal-screen">
        <pre
          class="terminal-content">{{ content }}<span class="cursor">_</span></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" vapor>
import { ref } from "vue";

// 默认初始内容
const content = ref(`
Ruijie(config)#vlan 10
Ruijie(config-vlan)#exit
Ruijie(config)#vlan 50
Ruijie(config-vlan)#exit
Ruijie(config)#interface gigabitethernet 0/1
Ruijie(config-if-GigabitEthernet 0/1)#switchport access vlan 10
Ruijie(config-if-GigabitEthernet 0/1)#exit
Ruijie(config)#interface gigabitethernet 0/5
Ruijie(config-if-GigabitEthernet 0/5)#switchport access vlan 50
Ruijie(config-if-GigabitEthernet 0/5)#exit
Ruijie(config)#`);
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: #333;
  overflow: hidden;
}

.editor-pane,
.preview-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.pane-header {
  color: #fff;
  padding-bottom: 8px;
  font-size: 14px;
  opacity: 0.8;
}

.source-editor {
  flex: 1;
  background-color: #1e1e1e;
  color: #d4d4d4;
  border: 1px solid #444;
  padding: 15px;
  font-family: "Consolas", monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
}

.terminal-screen {
  flex: 1;
  background-color: #0c0c0c; /* 接近纯黑但带点灰的背景 */
  color: #c0c0c0; /* 经典灰白色 */
  padding: 8px; /* 稍微留点边距 */
  position: relative;
  overflow: auto;

  font-family: "ruijie", "NSimSun", "SimSun", monospace;

  font-size: 16px;
  line-height: 18px;

  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;
}

.terminal-content {
  margin: 0;
  white-space: pre-wrap; /* 保留格式并允许自动换行 */
  word-break: break-all;
  font-family: inherit; /* 继承父级字体 */
}

/* 光标闪烁动画 */
.cursor {
  display: inline-block;
  vertical-align: bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@font-face {
  font-family: "ruijie";
  src: url("@/assets/SimSun.ttf") format("truetype");
}
</style>
