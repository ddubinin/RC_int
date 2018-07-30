  $('.btn_form_interview[data-radio-name]').click(function(e){ e.preventDefault();
  $('.btn_form_interview[data-radio-name="' + $(this).data('radioName') + '"]').removeClass('active');
  $(this).toggleClass('active');
  $('input[name="' + $(this).data('radioName') + '"]').val(
    $(this).text()
  );
});

$('.btn_form_interview[data-check-name]').click(function(e){e.preventDefault();
  $(this).toggleClass('active');
  $('input[name="' + $(this).data('checkName') + '"]').val(
    $(this).hasClass('active') ? 1 : 0
  );
});