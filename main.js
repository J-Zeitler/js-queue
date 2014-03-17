function findFirst() {
  var firstInQueue = $(".queue-item:first-child");
  firstInQueue.addClass("first");

  firstInQueue.on("click", function () {
    firstInQueue.insertAfter(".queue-item:last-child");
    firstInQueue.unbind("click");
    firstInQueue.removeClass("first");
    findFirst();
  });
}

findFirst();