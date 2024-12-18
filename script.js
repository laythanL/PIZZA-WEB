function tampilkanSemuaMenu(params) {
  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-Menu").append(
        '<div class="col-md-4">' +
          '<div class="card mb-3">' +
          '<img src="img/pizza/' +
          data.gambar +
          '" class="card-img-top"/>' +
          '<div class="card-body">' +
          '<h5 class="card-title">' +
          data.nama +
          "</h5>" +
          '<p class="card-text">' +
          data.deskripsi +
          "</p>" +
          '<h5 class="card-title"> RP ' +
          data.harga +
          "</h5>" +
          '<a href="#" class="btn btn-primary">Go somewhere</a>' +
          "</div>" +
          "</div>" +
          "</div>"
      );
    });
  });
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "ALL MENU") {
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, item) {
      if (item.kategori == kategori) {
        content +=
          '<div class="col-md-4">' +
          '<div class="card mb-3">' +
          '<img src="img/pizza/' +
          item.gambar +
          '" class="card-img-top"/>' +
          '<div class="card-body">' +
          '<h5 class="card-title">' +
          item.nama +
          "</h5>" +
          '<p class="card-text">' +
          item.deskripsi +
          "</p>" +
          '<h5 class="card-title">RP ' +
          item.harga +
          "</h5>" +
          '<a href="#" class="btn btn-primary">Go somewhere</a>' +
          "</div>" +
          "</div>" +
          "</div>";
      }
    });

    $("#daftar-Menu").html(content);
  });
});
