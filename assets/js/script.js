$(document).ready(function () {
  $("#username").focus();
  $(".user").keyup(function () {
    var email = $(this).val();
    var dataString = "email=" + email;
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (ck_email.test(email)) {
      $.ajax({
        type: "POST",
        url: "avatar.php",
        data: dataString,
        cache: false,

        success: function (html) {
          $("#img_box").html(
            "<img src='http://www.gravatar.com/avatar.php?gravatar_id=" +
              html +
              "?d=mm' class='avatar_img' />"
          );
        },
      });
    }
  });
});

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}