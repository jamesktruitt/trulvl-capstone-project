<template>
  <div>
    
    <app-h1>About our Shop</app-h1>
      <p class="about">TRULVL was founded in 2014 by the family duo of NFL sports manager, Raymond Truitt and branding and design visionary, James Truitt. The idea for the brand was conceived by Raymond as a play on the founders’ family name, combined with the notion of an athlete reaching the pinnacle of his/her performance. With James devising the company’s branding and business model, the pair sought to bring a new and exciting flavor to the American sports apparel industry, launching TRULVL as a premium online marketplace, specializing in the supply of sportswear, footwear, and accessories.</p>
      <p class="about">The company's core initiative began with uniquely designed t-shirts and hoodies, made to inspire urban athletes and entrepreneurs.  Our mission is to galvanize those individuals that are courageous enough to passionately seek out their “TRU” calling, and obtain the highest level of performance that their mind, body, and spirit will allow.  
      <p class="about">Everyday our journey begins anew, lace up!</p>

  </div>
</template>

<script>
import h1 from '@/components/h1';

export default {
  components: {
    'app-h1': h1
  }
}
</script>

<style>
.about {
  margin: 5rem 10rem;
}
h1 {
  text-align: center
}
</style>