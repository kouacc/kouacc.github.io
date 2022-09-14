function copier() {
    var copyText = document.getElementById("discord");
    copyText.style.display = 'block';
    copyText.focus();
    copyText.select();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    copyText.style.display = 'none';
    
    window.notificationService.notify({
    text:"Copié dans le presse-papier",
    type: 'success',
    position:'top-right',
    autoClose: true,
    duration: 1000,
  })
  }

