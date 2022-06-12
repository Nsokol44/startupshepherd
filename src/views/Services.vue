<template>
    <div>
        <h1>We offer a variety of services from grant writing to strategy. Fill out the below form so we can figure out how to help you.</h1>
    </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";


export default {
    name: "services",
    metaInfo: {
    changed(metaInfo) {
      getAnalytics().setCurrentScreen(metaInfo.title);
      getAnalytics().logEvent("page_view");
      getAnalytics().logEvent("screen_view", {
        screen_name: metaInfo.title,
      });
    }
  },
}
</script>
