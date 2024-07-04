var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  "Halo Yunaa.. apa kabar?",
  "Udah bobo belum nih?",
  "Pasti ngira kalau aku bakal lupa kannnn.. kwkwkw",
  "Sebenernya aku ga lupa, aku belum siap ngerjain ini... jadi gaenak kalau cuma ngucapi Happy birthday aja.",
  "Gimana.. kamu suka ga.. uadh ada foto kamu nya tuh heheeh",
  "tapi tenang, aku ga nyomot kok, pake foto yang pernah kamu kasi hihih",
  "Selamat Ulang tahun ya yunaa   wkwkkw. semoga segalanya dilancarkan, dapet yang terbaik dan makin sabarrrrrrrrr. kuliahnya harus makin rajin.. ",
  "ingatloh, semester depan janji ya jangan banyak absen lagi 😏",
  "Juga semoga dengan bertambahnya umur kamu, semoga kamu makin dikuatkan dengan semuanya",
  "Sebenernya mau ngepost di ig, cuma keinget waktu itu aku tanya bole ngga post di ig, tapi kamu larang hehe ",
  "Apa lagi ya... udah si itu aja.. oh iya, jangan terlalu lelah yaa.. sering sering hilingg.. ya ga tiap minggu juga",
  "jangan ngomong kasar kasar yaah. ntah kesiapapun itu, kalau udah di puncaknya.. mending pergi aja. okayy ^_^",
  "Senang bisa kenal dengan kamu, dan selalu memberi dampak positif bagi sekitar kamu yaa",
  "Byee",
];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="ikoo.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="ikoo.png" /></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}
