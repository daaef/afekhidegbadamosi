<script setup lang="ts">

</script>

<template>
  <UCard :ui="{rounded: 'rounded-[30px]', background: 'dark:!bg-[#222A39] hover:dark:!bg-[#10141C] transition-background duration-300 ease-in-out'}" class="w-full card">
    <div class="flex items-center gap-2">
      <img src="/1.png" class="h-[40px]" alt="Portfolio logo">
      <h3 class="text-xl font-montserrat-alternates font-semibold uppercase">SenexPay</h3>
    </div>
    <div>
      <div class="mt-[100px] rounded-[30px] p-[34px] bg-[rgba(89,116,158,.25)] info">
        <h4>Frontend Developer</h4>
        <div class="flex gap-[17px] mt-4 items-center">
          <img class="w-[25px] h-[20px] object-contain" src="/vue.png" alt="">
          <img class="w-[25px] h-[20px] object-contain" src="/nuxt.png" alt="">
          <img class="w-[25px] h-[20px] object-contain" src="/tailwind.png" alt="">
          <img class="w-[25px] h-[20px] object-contain" src="/figma.png" alt="">
        </div>
        <div class="flex justify-between mt-10">
          <a href="#" class="underline text-[#35BAFE]">senexpay.com</a>
          <a href="#" class="font-montserrat-alternates explore text-white hover:text-big-stone-200 flex items-center">Explore <Icon name="i-radix-icons:arrow-up" class="w-5 h-5 ml-1" /></a>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style>
.slider-icons {
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row-reverse;
  width: 110px;
}

.slider-icons button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-icons button:last-of-type {
  right: 0;
}
.card {
  background-image: radial-gradient(66% 70% at 50% 50%, #1E2433 0%, rgba(30, 36, 51, 0) 100%);
  box-shadow: none !important;
}

.info {
  transition: .3s ease-in-out;
}

.card:hover .info {
  background: rgba(89,116,158,.1);
}

.explore .iconify{
  transition: .3s ease-in-out;
}


.explore:hover .iconify {
  transform: rotate(45deg);
}
</style>