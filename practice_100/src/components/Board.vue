<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import Data from '@/data'

  export default {
    data() {
      return {
          fields: [{
              key:'content_id',
              label: 'No.',
          }],
          items: data.Content
      };
    }
  };
</script>