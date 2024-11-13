<template>
  <header class="container">
    <div class="flex items-center justify-between py-4">
      <div>
        <NuxtLink to="/">
          <span class="text-2xl font-bold">
            Nuxt Starter
          </span>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/signin">Login</NuxtLink>
        <NuxtLink to="/signup">Sign Up</NuxtLink>
      </div>
    </div>
  </header>
  <main class="container">
    <slot />
  </main>
</template>