<template>
  <div>{{ userStore.name }}</div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/module/user";

const userStore = useUserStore();
</script>

<style></style>

