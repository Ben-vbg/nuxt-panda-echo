<template>
  <nav :class="container({heading: 'nav'})">
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
</template>

<script lang="ts" setup>
import { css } from './../styled-system/css'
import { paragraph, small, container, link, shadows } from '../styled-system/recipes'
</script>
