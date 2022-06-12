<template >
    <div>
        
    </div>
</template>

<script>
import getAnalytics from "firebase/compat/analytics";


export default {
    name: "resources",
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

