const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const ctaButton = document.getElementById('cta-button');
const statusMessage = document.getElementById('status-message');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
  });
}

if (ctaButton && statusMessage) {
  ctaButton.addEventListener('click', () => {
    statusMessage.textContent = 'Thanks for your interest! We will reach out soon.';
    ctaButton.disabled = true;
    ctaButton.classList.add('opacity-70', 'cursor-not-allowed');
  });
}

const copyButtons = document.querySelectorAll('.copy-vision-btn');
copyButtons.forEach((button) => {
  const targetId = button.closest('details')?.querySelector('#vision-text')?.id;

  button.addEventListener('click', async () => {
    const target = document.getElementById(targetId);
    const textToCopy = target?.textContent?.trim();
    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    } catch (error) {
      // ignore clipboard errors
    }
  });
});

