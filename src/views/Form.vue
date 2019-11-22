<template>
    <div id="formPage">
        <IssueInformation/>
    </div>
</template>

<script>

import IssueInformation from '../components/Form/IssueInformation';

export default {
  components: {
      IssueInformation
  },
};
</script>

<style scoped>

    #formPage{
    height: 150vh;
    width: 100vw;
    background-color: #ECECEC;
    }
</style>