<template>

  <div>
    <div class="py-2 d-flex ga-2">
      <div class="text-caption">
        <b>Score Section</b>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="text-caption" size="x-small" variant="text" @click="closeExpand">
        <span>Hide</span>
      </v-btn>
      <v-btn class="text-caption" color="primary" variant="flat" size="x-small" @click="openDialog"><span>Add
          Comment</span></v-btn>
    </div>

    <v-divider class="my-2"></v-divider>


    <div v-for="(item, i) in payload" :key="i">

      <v-card flat class="d-flex ga-3 text-caption cursor-pointer pa-2 rounded-lg" @click="expandApplication(i)">
        <v-avatar color="card" class="card-outlined" rounded="lg" size="55"
          :image="getUser(item.userId)?.picture ? getUser(item.userId).picture : profileImage"></v-avatar>
        <div class="d-flex flex-column">
          <b>{{ getFullnames(getUser(item.userId)) || 'user' }}</b>
          <div class="d-flex align-center text-primary-accent">
            <v-icon icon="mdi-shield-outline" start size="12"></v-icon>
            <span class="text-caption ">
              {{ getUser(item.userId).role }}
            </span>

          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center ga-2">
          <!-- v-if="status === 'SUBMITTED'" -->
          <div class="">
            <v-btn class="text-caption" size="x-small" color="secondary" icon :id="`selectStatus_${i}`"
              @click.stop="expandId = i">
              <span>{{ item.score }}</span>
            </v-btn>
          </div>
          <v-icon icon="mdi-chevron-down" end class="my-auto" size="25" :class="{
            'transform-180deg': applicationToExpand === i,
          }"></v-icon>
        </div>
      </v-card>
      <v-expand-transition>
        <div class="" v-if="applicationToExpand === i">
          <div class="mt-5 text-caption border">

            <div class="text-caption text-grey py-1 px-2 d-flex justify-space-between align-center">
              <span>Comment</span>
              <v-spacer></v-spacer>
              <div class="mx-auto">
                <v-icon class="mx-1" @click="handleEdit(item)">mdi-pencil</v-icon>
                <v-icon @click="handleDelete">mdi-close-circle</v-icon>
              </div>
            </div>
            <div class=" pa-2">
              <p class="pa-3 text-caption bg-grey-lighten-4" v-html="item.comment"></p>
            </div>
          </div>
        </div>
      </v-expand-transition>
    </div>

  </div>

  <v-dialog width="55%" persistent v-model="dialog">
    <v-card class="card-outlined rounded-lg">
      <AdminCoreDialogHeader title="Score Candidate" @close="dialog = false">
        <div class="px-3 d-flex align-center ga-2">
          <v-btn size="small" color="primary-accent" class="text-caption rounded-lg text-none" :loading="loading"
            prepend-icon="mdi-content-save" @click="handleComment">
            <span>{{ edit ? 'Update' : 'save' }}</span>
          </v-btn>

        </div>
      </AdminCoreDialogHeader>
      <v-card-text>
        <v-form ref="formRef" class="py-2">
          <v-container>
            <v-row align="center">
              <v-col sm="12" md="12" lg="12">
                <div class="">
                  <v-text-field label="Application Score" autofous @keypress="digitsOnly" class="mt-5" suffix="/5"
                    maxlength="1" v-model.number="data.score" :rules="required()"></v-text-field>
                  <div class="mt-1">
                    <div class="text-caption">
                      <span>Comment</span>
                    </div>
                    <div class="">
                      <Editor :text="data.comment" @set-text="setTemplate" />
                    </div>


                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>


</template>

<script setup>
import { useAppStore } from '~/store/app';
import Edit from '../user/edit.vue';
const { toggleSnackbar } = useAppStore()
const { currentUser } = storeToRefs(useAppStore())

const props = defineProps({
  payload: {
    type: Array
  },
  users: {
    type: Array
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['setScore', 'hide', 'submit'])
const dialog = ref(false)
const { required } = useRules()
const { digitsOnly, getFullnames } = useHelpers()
const data = ref({
  score: 0,
  comment: "",
  userId: ""
})
const edit = ref(false)
const reset = () => {
  edit.value = false
  dialog.value = false
  nextTick(() => {
    data.value = Object.assign({}, {
      score: 0,
      comment: "",
      userId: ""
    })
  })
}

const applicationToExpand = ref(null)
const expandId = ref(null)
const expandApplication = (index) => {
  if (applicationToExpand.value === index) {
    hideExpand();
  } else {
    applicationToExpand.value = index;
  }
};
const setTemplate = (val) => {
  data.value.comment = val;
};




const getUser = (userId) => {
  const user = props.users.find(i => i.userId == userId)
  return user
}

const openDialog = () => {
  edit.value = false
  dialog.value = true
}

const closeExpand = () => {
  emit("hide")
}

const hideExpand = () => {
  applicationToExpand.value =
    expandId.value = null
}

const formRef = ref('')
const handleComment = async () => {
  data.value.userId = currentUser.value.userId
  const { valid } = await formRef.value.validate()
  if (valid) {
    if (edit.value) {
      emit("setScore", data.value, edit.value)

    }
    else {

      const isExisting = props.payload.length > 0
        ? props.payload.some(i => i.userId == data.value.userId)
        : false
      if (isExisting) toggleSnackbar({
        status: true,
        type: "info",
        message: `${getFullnames(currentUser.value)} already Commented`
      })
      else {
        emit("setScore", data.value, edit.value)
        reset()

      }

    }
  }

}

const handleEdit = (item) => {
  edit.value = true
  dialog.value = true
  data.value = Object.assign({}, item)
}

const handleDelete = () => {
  alert("detele")
  emit("delete")
}

</script>
