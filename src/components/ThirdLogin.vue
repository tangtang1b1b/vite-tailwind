<script setup>
import { ref, onMounted } from 'vue';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '/public/firebase.js';

const user = ref(null);

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    // console.log('Google Sign-In successful', user);

  } catch (error) {
    // console.error('Google Sign-In failed', error);
  }
};
const handleSignOut = async () => {
  const result = confirm('確定要登出?');
  if(!result) return
  try {
    await auth.signOut();
    // console.log('Sign out successful');
  } catch (error) {
    // console.error('Sign out failed', error);
  }
};
onMounted(() => {
  auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
  });
});
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <span class="material-symbols-outlined w-full h-full" @click="handleSignOut" v-if="user">logout</span>
    <span class="material-symbols-outlined w-full h-full" @click="handleGoogleSignIn" v-else>person</span>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

div {
  span {
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>