<script lang="ts">
  import { appToast } from '$lib/stores'
  import { hideToast } from '$lib/hooks'

  let toastTimer: ReturnType<typeof setTimeout>

  appToast.subscribe(({ visible }) => {
    clearTimeout(toastTimer);
    if (visible) {
      toastTimer = setTimeout(() => {
        hideToast()
      }, 5000);
    }
  })
</script>

<div class="toast" on:click={hideToast} data-type={$appToast.type} data-stamp={$appToast.stamp} data-visible={$appToast.visible}>
  {$appToast.content}
</div>

<style>
.toast {
  position: fixed;
  top: 1rem;
  margin: 0 auto;
  min-height: 2.625rem;
  width: fit-content;
  padding: 0.7rem 1.3rem 0.7rem 3rem;
  background: #ffffff80 var(--icon-info) no-repeat 0.2rem center;
  background-size: 1.3rem;
  color: #fff;
  text-shadow: 0 1px 0 #00000060;
  backdrop-filter: blur(10px);
  border-left: 2px solid #efefef;
  user-select: none;
  cursor: pointer;
  opacity: 1;
  transition: 0.7s;
  transform: scale(1);
  border-radius: 2px;
  box-shadow: 0 0.1em 0 #00000010, 0 0.1em 25px #00000015;
}

.toast[data-visible='false'] {
  opacity: 0;
  top: -200px;
  transform: scale(0.1);
}

.toast[data-type='success'] {
  background: var(--color-success-t) var(--icon-success) no-repeat 1rem center;
  background-size: 1.3rem;
  border-left-color: var(--color-success);
}

.toast[data-type='error'] {
  background: var(--color-danger-t) var(--icon-error) no-repeat 1rem center;
  background-size: 1.3rem;
  border-left-color: var(--color-danger);
}

.toast[data-type='warning'] {
  background: var(--color-alert-t) var(--icon-alert) no-repeat 1rem center;
  background-size: 1.3rem;
  border-left-color: var(--color-alert);
}

.toast[data-type='info'] {
  background: var(--color-info-t) var(--icon-info) no-repeat 1rem center;
  background-size: 1.3rem;
  border-left-color: var(--color-info);
}
</style>