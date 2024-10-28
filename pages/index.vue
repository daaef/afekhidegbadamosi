<template>
  <NuxtLayout>
    <header class="relative pb-24px">
      <Navigation/>
      <div>
        <div class="container">
          <div
              class="grid relative min-h-screen pt-[75px] md:pt-0 gap-[45px] items-center content-center md:grid-cols-2 px-[10px]">
            <div class="">
              <h3 class="bg-gradient-to-r dark:from-[#59749E] dark:from-0% dark:via-[#EBEBF3] dark:via-50% dark:to-[#59749E] from-[#FF8864] from-0% via-[#018181] via-50% to-[#2397F3] to-100% font-medium lg:text-4xl text-2xl text-transparent bg-clip-text">
                &lt;Hello World/&gt;
              </h3>
              <p class="mt-4 text-2xl lg:text-4xl font-light">
                <span class="dark:text-big-stone-200 text-[#2397F3]">I’m Afekhide, a passionate </span>
                <span class="dark:text-big-stone-400 text-[#FF7262]">Frontend Developer with a love </span>
                <span class="dark:text-big-stone-200 text-[#018181]">for creating pixel-perfect UIs.</span>
                <span class="dark:text-big-stone-400 text-[#2397F3]"> Explore my
                  <a href="#" class="font-semibold dark:text-big-stone-200 text-[#2397F3]">works</a>
                  and get Inspired.
                </span>
              </p>
            </div>
            <div class="w-full">
              <img class="w-full md:h-[70vh] dark:block hidden rounded-br-[88px] object-contain"
                   src="/afe-paaatterns.png" alt="User Image">
              <img class="w-full md:h-[70vh] dark:hidden rounded-br-[88px] object-contain" src="/light-paaatterns.png"
                   alt="User Image">
            </div>
          </div>
        </div>
      </div>
      <nuxt-link :to="{ path: '/', hash: '#main' }" class="bottom-[25px] right-[8px] animate-bounce absolute">
        <Icon name="ph:arrow-down" class="text-3xl text-big-stone-400"/>
      </nuxt-link>
    </header>
    <main id="main" class="main">
      <section class="portfolio py-[100px]">
        <div class="container">
          <UCarousel v-slot="{ item, index }" ref="carouselRef" :items="projects"
                     :ui="{ container: 'gap-10 pb-12 px-[10px]', item: 'snap-start lg:w-1/3 sm:w-1/2 w-full', arrows: { wrapper:
                     'slider-icons'} }"
                     arrows>
            <Card :project="item"/>
          </UCarousel>

        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup>

const { data } = await useAsyncData('projects', () => queryContent('/projects').findOne())
const projects = computed(()=> data.value?.projects)
onMounted(async () => {
  document.body.classList.add('render')
  document.documentElement.classList.add('smooth-scroll')

})
</script>

<style>
.portfolio {
  background-image: url(/portfolio_bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
}
</style>
