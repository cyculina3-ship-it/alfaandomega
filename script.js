
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('purchase-backdrop');
  const open = document.getElementById('show-purchase-info');
  const close = document.getElementById('purchase-close');
  function show() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (close) close.focus();
  }
  function hide() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  if (open) open.addEventListener('click', show);
  if (close) close.addEventListener('click', hide);
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
});
