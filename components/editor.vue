<template>
  <ClientOnly>
    <div class="position-relative rounded-lg overflow-hidden">
      <v-progress-linear color="link" indeterminate :active="loader" height="5"></v-progress-linear>
      <Editor api-key="t9etan1ab5zzfasefnuktncpuum77xh6j4yp1snxrrpyxty7" :init="{
        min_height: 400,
        max_height: 800,
        toolbar_mode: 'sliding',
        // plugins:
        //   'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes mergetags autocorrect typography inlinecss',
        plugins:
          'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        // tinycomments_author: currentUser?.fullName ?? 'Author name',
        // images_upload_url: 'http://localhost:8000/server.php',
        // automatic_uploads: true,
        // images_reuse_filename: true,
        // images_upload_handler: handleImageUpload,
        image_title: true,
        /* enable automatic uploads of images represented by blob or data URIs*/
        automatic_uploads: true,
        /*
      URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
      images_upload_url: 'postAcceptor.php',
      here we add custom filepicker only to Image dialog
    */
        file_picker_types: 'image',
        file_picker_callback: filePickerCallback,
        // setup: (editor) => {
        //   // Listen to the 'selectionchange' event
        //   editor.on('selectionchange', () => {
        //     // Emit a custom event to the Vue component
        //     const selectedText = editor.selection.getContent({ format: 'text' });
        //     editor.fire('vueSelectionChange', selectedText);
        //   });
        // },
      }" output-format="html" v-model="editorValue"  />
    </div>
  </ClientOnly>
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";

const props = defineProps({
  text: String,
});
const emits = defineEmits(["setText"]);

const editorValue = computed({
  get() {
    return props.text;
  },
  set(val) {
    emits("setText", val);
  },
});

const loader = ref(false);


const filePickerCallback = (cb, value, meta) => {
  if (process.client) {
    var input = document.t("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        /*
            Note: Now we need to register the blob in TinyMCEs image blob
            registry. In the next release this part hopefully won't be
            necessary, as we are looking to handle it internally.
          */
        var id = "blobid" + new Date().getTime();
        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(",")[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        /* call the callback and populate the Title field with the file name */
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }
};


</script>

<style lang="css" scoped></style>
