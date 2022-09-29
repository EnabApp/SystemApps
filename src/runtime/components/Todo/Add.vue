<template>
  <div>
    <UiInput w="full" m="y-20px" placeholder="اضافة مهمة" v-model="task" @keydown.enter="addTodo()" />
  </div>
</template>
<script setup>
import { useUser, ref } from "#imports";
import { useTodoStore } from "../../composables/useTodoStore";
import { useToasts } from '#imports'
const toastsCenter = useToasts()
// const toasts = toastsCenter.sendToast


const props = defineProps({
  task: Object,
});

const todoStore = useTodoStore();
const user = useUser();
const task = ref("");

//=========>> Add Todo Function <<=========//
const addTodo = async () => {
  const Toast = {
    title: "خطأ",
    message: "يجب ان تكون المهمة اكثر من 3 حروف",
  };

  if (task.value.length <= 3) {
    toastsCenter.sendToast(Toast)
    return;
  }
  const taskData = {
    user_id: user.value.id,
    task: task.value,
    is_complete: false,
    inserted_at: new Date(),
  };
  await todoStore.addTask(taskData);
  task.value = "";
};
</script>
