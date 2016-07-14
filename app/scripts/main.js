
$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  });
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  });
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('../sw.js').then(function(reg) {
   console.log(':^)', reg);
   // TODO
 }).catch(function(err) {
   console.log(':^(', err);
 });
}
