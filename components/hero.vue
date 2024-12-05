<template>
  <Nav/>
  <div :class="container({align:'center', minv:'auto', heading: 'content'})">
    <h1 :class="css({ fontSize: 'extralarge', fontWeight: 'bold'})">L'Echo photos 2024</h1>
    <p :class="paragraph({size: 'sm'})">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis iste accusamus nam similique, inventore, delectus ullam ea facere, modi veniam autem excepturi. Ad aut voluptates ullam architecto quo distinctio! Facere.
    </p>
    <small :class="small({heading:'text'})" >Par
      <a :class="link({})" href="#" target="_blank" rel="noopener noreferrer">Nicolas Baudoux</a> &
      <a :class="link({})" href="#" target="_blank" rel="noopener noreferrer">Clément Bacq</a>
    </small>
  </div>
</template>

<script lang="ts" setup>
import { css } from './../styled-system/css'
import { paragraph, small, container, link } from '../styled-system/recipes'
</script>
