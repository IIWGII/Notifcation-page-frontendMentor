const read = document.querySelector(".read");
const box = document.querySelectorAll(".notif-box");
const dot = document.querySelectorAll(".dot");
const notifNbr = document.querySelector(".notif-nbr");
const dotUnread = document.querySelectorAll(".dot-unread");

document.addEventListener('DOMContentLoaded',()=> {notifNbr.innerHTML = dotUnread.length})

read.addEventListener("click", MarkAllAsRead);

box.forEach((NotifBox) => {
  NotifBox.addEventListener("click", () => {
    const NotifBoxCls = NotifBox.classList;
    if (NotifBoxCls.contains("unread")) {
      const childDot = NotifBox.querySelector(".dot").classList;
      notifNbr.innerHTML--;
      NotifBoxCls.remove("unread");
      if (childDot.contains("dot-unread")) {
        childDot.remove("dot-unread");
      }
    }
  });
});


function MarkAllAsRead() {
  box.forEach((element) => {
    const unread = element.classList;
    notifNbr.innerHTML = 0;
    if (unread.contains("unread")) {
      unread.remove("unread");
      dot.forEach((e) => {
        e.classList.remove("dot-unread");
      });
    }
  });
}
