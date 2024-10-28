<script setup lang="ts">
defineProps<{
  project?: Object
}>()
</script>

<template>
  <UCard :ui="{rounded: 'rounded-[30px]', background: 'dark:!bg-[#222A39] hover:dark:!bg-[#10141C] transition-background duration-300 ease-in-out'}" class="w-full card">
    <div class="flex items-center gap-2">
      <img :src="`/${project?.logo}.png`" class="h-[40px]" :alt="`${project?.logo} logo`">
      <h3 class="text-xl font-montserrat-alternates dark:text-gray-50 hover:text-gray-50 text-gray-800 font-semibold uppercase">{{ project?.title }}</h3>
    </div>
    <div>
      <div class="mt-[100px] rounded-[30px] p-[34px] bg-[rgba(89,116,158,.25)] info">
        <h4>{{project?.role}}</h4>
        <div class="flex gap-[17px] mt-4 items-center">
          <img v-for="(stack, i) in project?.stack" class="w-[25px] h-[20px] object-contain" :src="`/${stack}.png`" :alt="stack">
        </div>


        <span class="icon-[devicon--vuejs]"></span>


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
  background-image: radial-gradient(66% 70% at 50% 50%, #EAEDF4 0%, #A8B7D1 100%);
  box-shadow: none !important;
}

.card:hover {
  background-image: radial-gradient(66% 70% at 50% 50%, #018181 0%, rgba(0, 70, 125, .68) 100%);
}

.card:hover h3{
  color: #fafafa;
}

.card:hover .info {
  background: rgba(0, 103, 103, 0.4);
}

.dark .card {
  background-image: radial-gradient(66% 70% at 50% 50%, #1E2433 0%, rgba(30, 36, 51, 0) 100%);
  box-shadow: none !important;
}


.dark .card:hover .info {
  background: rgba(89,116,158,.1);
}

.explore .iconify{
  transition: .3s ease-in-out;
}


.explore:hover .iconify {
  transform: rotate(45deg);
}
</style>