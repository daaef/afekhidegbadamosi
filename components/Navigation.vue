<template>
  <nav class="py-2 fixed w-full z-50 bg-[#13131DB2] backdrop-blur-md">
    <div class="container">
      <div class="px-[10px] h-[64px] flex justify-between relative items-center">
        <nuxt-link to="/" class="relative z-50">
          <img src="/full-logo.svg" alt="Full logo" class="h-[32px] hidden dark:md:block">
          <img src="/favicon.png" alt="Full logo" class="h-[32px] md:hidden block">
        </nuxt-link>
        <div class="hamburger js-hover" ref="elmHamburger" @click.prevent="triggerAnimation">
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
            <div class="global-menu__wrap w-full" ref="gNavItems">
              <a class="global-menu__item global-menu__item--demo-1" href="#">Home</a>
              <a class="global-menu__item global-menu__item--demo-1" href="#">About</a>
              <a class="global-menu__item global-menu__item--demo-1" href="#">Projects</a>
              <a class="global-menu__item global-menu__item--demo-1" href="#">Skills</a>
              <a class="global-menu__item global-menu__item--demo-1" href="#">Blog</a>
              <a class="global-menu__item global-menu__item--demo-1" href="#">Contact</a>
              <div class="w-full flex justify-end social-wrapper absolute right-[42px] bottom-[16px]">
                <div class="flex gap-[12px] social-icons">
                  <a href="#"><Icon name="simple-icons:linkedin" /></a>
                  <a href="#"><Icon name="simple-icons:github" /></a>
                  <a href="#"><Icon name="simple-icons:x" /></a>
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
    console.log('called triggerAnimation, is Animating is true', isAnimating)
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