<template>
  <nav class="py-2 fixed w-full z-50 dark:bg-[#13131DB2] bg-[#FCFCFCB2] backdrop-blur-md">
    <div class="container">
      <div class="px-[10px] h-[64px] flex justify-between relative items-center">
        <nuxt-link to="/" class="relative z-50">
          <logo />
        </nuxt-link>
        <div class="hamburger dark:bg-white bg-[#EAEDF4] js-hover" ref="elmHamburger" @click.prevent="triggerAnimation">
          <div class="hamburger__line hamburger__line--01">
            <div class="hamburger__line-in hamburger__line-in--01"></div>
          </div>
          <div class="hamburger__line hamburger__line--02">
            <div class="hamburger__line-in hamburger__line-in--02"></div>
          </div>
          <div class="hamburger__line hamburger__line--03">
            <div class="hamburger__line-in hamburger__line-in--03"></div>
          </div>
          <div class="hamburger__line hamburger__line--cross01">
            <div class="hamburger__line-in hamburger__line-in--cross01"></div>
          </div>
          <div class="hamburger__line hamburger__line--cross02">
            <div class="hamburger__line-in hamburger__line-in--cross02"></div>
          </div>
        </div>
        <div class="global-menu container">
            <div class="global-menu__wrap px-[10px] w-full" ref="gNavItems">
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">Home</a>
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">About</a>
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">Projects</a>
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">Skills</a>
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">Blog</a>
              <a class="global-menu__item dark:text-[#a8b7d1] text-[#1A5497] global-menu__item--demo-1" href="#">Contact</a>
              <div class="w-full flex justify-end social-wrapper absolute right-[42px] bottom-[16px]">
                <div class="flex gap-[12px] social-icons dark:before:bg-[#a8b7d1] before:bg-[#1A5497]">
                  <a href="#"><Icon name="simple-icons:linkedin" class="dark:text-[#a8b7d1] text-[#1A5497]" /></a>
                  <a href="#"><Icon name="simple-icons:github" class="dark:text-[#a8b7d1] text-[#1A5497]" /></a>
                  <a href="#"><Icon name="simple-icons:x" class="dark:text-[#a8b7d1] text-[#1A5497]" /></a>
                </div>
              </div>
            </div>
        </div>
        <svg class="shape-overlays" ref="elmOverlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path class="shape-overlays__path"></path>
          <path class="shape-overlays__path"></path>
          <path class="shape-overlays__path"></path>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import {useShapeOverlays} from "~/composable/useShapeOverlays";

  const elmOverlay = ref(null)
  const elmHamburger = ref(null)
  const gNavItems = ref(null)
  const isOpened = useState('isOpened')
  const isAnimating = useState('isAnimating')
  const triggerAnimation = () => {
    const {toggle} = useShapeOverlays(elmOverlay)
    if (isAnimating.value) {
      return false;
    }
    toggle();
    if (isOpened.value) {
      elmHamburger.value?.classList.add('is-opened-navi');
      gNavItems.value?.classList.add('is-opened');
    } else {
      elmHamburger.value?.classList.remove('is-opened-navi');
      gNavItems.value?.classList.remove('is-opened');
    }
  }
</script>