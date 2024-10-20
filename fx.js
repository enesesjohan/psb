var biayaModal = document.getElementById("biayaModal");
var biayaMasukLink = document.getElementById("biayaMasukLink");
var closeBiayaModal = document.getElementsByClassName("close-x-biaya")[0];
var biayaContent = document.getElementById("biayaContent");
var spinner = document.querySelector(".loading-spinner");

biayaMasukLink.onclick = function (e) {
  e.preventDefault(); 
  biayaModal.style.display = "block";

  spinner.style.display = "block";

  biayaContent.innerHTML = '';

  $.get("update.html", function(e) {
var a = document.createElement("div"); // Buat elemen div untuk menampung HTML yang diambil
a.innerHTML = e; // Masukkan konten dari update.html
var n = a.querySelector("table"); // Ambil tabel dari konten yang dimuat

if (n) {
var rows = n.querySelectorAll("tr"); // Ambil semua baris tabel

if (rows.length > 0) {
    // Ubah warna baris pertama (header)
    var headerRow = rows[0];
    headerRow.style.backgroundColor = "black";
    headerRow.style.color = "white";

    // Ubah warna baris terakhir (footer)
    var footerRow = rows[rows.length - 1];
    footerRow.style.backgroundColor = "green";
    footerRow.style.color = "white";
}

biayaContent.innerHTML = n.outerHTML; // Masukkan tabel ke dalam kontainer modal
} else {
biayaContent.innerHTML = "<p>Tabel tidak ditemukan.</p>"; // Jika tabel tidak ditemukan
}
spinner.style.display = "none"; // Sembunyikan spinner setelah data dimuat
});


};

closeBiayaModal.onclick = function () {
  biayaModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === biayaModal) {
      biayaModal.style.display = "none";
  }
};document.getElementById("downloadLink").onclick = function (o) {
  o.preventDefault(),
      (document.getElementById("downloadModal").style.display = "block"),
      setTimeout(function () {
          (window.location.href = "https://psb.alfurqon.or.id/brosur.jpg"), (document.getElementById("downloadModal").style.display = "none");
      }, 1e3);
};var modalSyarat = document.getElementById("syaratModal"),
  modalLink = document.getElementById("syaratLink"),
  closeBtn = document.getElementsByClassName("close-x-syarat")[0],
  tutupBtn = document.getElementById("tutupButton");
(modalLink.onclick = function (t) {
  t.preventDefault(), (modalSyarat.style.display = "block");
}),
  (closeBtn.onclick = function () {
    modalSyarat.style.display = "none";
  }),
  (tutupBtn.onclick = function () {
    modalSyarat.style.display = "none";
  }),
  (window.onclick = function (t) {
      t.target === modal && (modalSyarat  .style.display = "none");
  });var modalContact = document.getElementById("idContactModal"),
  modalLinkContact = document.getElementById("ContactLink"),
  closeBtnContact = document.getElementsByClassName("close-x-Contact")[0],
  tutupBtnContact = document.getElementById("tutupButtonContact");

modalLinkContact.onclick = function (t) {
  t.preventDefault();
  // Tutup semua modal lain
  document.querySelectorAll('.modal').forEach(function(modal) {
      modal.style.display = 'none';
  });
  modalContact.style.display = "block";
};

closeBtnContact.onclick = function () {
  modalContact.style.display = "none";
};

tutupBtnContact.onclick = function () {
  modalContact.style.display = "none";
};

window.onclick = function (t) {
  if (t.target === modalContact) {
      modalContact.style.display = "none";
  }
};

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
const htmlFile = "update.html"; 
document.addEventListener("DOMContentLoaded", function () {
  if (isMobile()) {
      document.getElementById("dynamic-iframe").src = htmlFile;
      document.getElementById("iframe-container").style.display = "block";
      const iframe = document.getElementById("dynamic-iframe");
      iframe.onload = function () {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          const footerContainer = iframeDocument.querySelector(".footer-overflow-container");
          if (footerContainer) {
              footerContainer.style.display = "none";
          }
      };
  } else {
      document.getElementById("modal").style.display = "block";
      document.getElementsByClassName("navbar-header").style.display = "none";
  }
});
document.querySelector(".close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};
window.onclick = function (event) {
  if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
  }
};

