<template>
  <div>
    <button @click="handleClick">你好</button>
    <Button />
  </div>
</template>

<script setup>


const handleClick = () => {
  console.log(123);
}

</script>

<style scoped></style>