<template>
<div>
  
</div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial () {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false
      };
      TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.submitted = true;
      })
      .catch (e => {
        console.log("Error", e)
      });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>