<script>
  const checkbox = document.getElementById('theme');

  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', checkbox.checked);
  });
</script>

