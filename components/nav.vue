<template>
  <div :class="[shadow({})]">
    <nav :class="navbar({heading: 'navigation'})">
      <div>
        <a :class="link({heading: 'logo'})" href="#" target="_blank" rel="noopener noreferrer">
          <img src="./../public/lecho.svg" alt="Logo de L'Echo">
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">social</a>
        <a href="#" target="_blank" rel="noopener noreferrer">social</a>
        <a href="#" target="_blank" rel="noopener noreferrer">social</a>
        <a href="#" target="_blank" rel="noopener noreferrer">social</a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
// import { css } from './../styled-system/css'
import { container, link, navbar, shadow } from '../styled-system/recipes'
</script>
