<template>
  <header class="relative pb-24px">
    <Navigation/>
    <div>
      <div class="container">
        <div
            class="grid relative min-h-screen pt-[75px] md:pt-0 gap-[45px] items-center content-center md:grid-cols-2 px-[10px]">
          <div class="">
            <h3 class="bg-gradient-to-r from-[#59749E] from-0% via-[#EBEBF3] via-50% to-[#59749E] to-100% font-medium text-2xl text-transparent bg-clip-text">
              &lt;Hello World/&gt;
            </h3>
            <p class="mt-4 text-2xl font-light">
              <span class="text-big-stone-200">I’m Afekhide, a passionate </span>
              <span class="text-big-stone-400">Frontend Developer with a love </span>
              <span class="text-big-stone-200">for creating pixel-perfect UIs.</span>
              <span class="text-big-stone-400"> Explore my <a href="#"
                                                              class="font-semibold text-big-stone-200">works</a> and get Inspired.</span>
            </p>
          </div>
          <div class="w-full">
            <img class="w-full md:h-[70vh] rounded-br-[88px] object-contain" src="/afe-paaatterns.png" alt="User Image">
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
        <UCarousel v-slot="{ item, index }" ref="carouselRef" :items="[1,2,3,4,5]"
                   :ui="{ container: 'gap-10 pb-12 px-[10px]', item: 'snap-start lg:w-1/3 sm:w-1/2 w-full', arrows: { wrapper:
                     'slider-icons'
                     } }"
                   arrows>
          <Card />
        </UCarousel>

      </div>
    </section>
  </main>
</template>

<script setup>

onMounted(() => {
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
