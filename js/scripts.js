$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var newTaskDescription = $("input#new-task-description").val();
    var newTask = { description: newTaskDescription };

    $('ul#tasks').append('<li><span class="task">' + newTask.description + "</span></li>")

    $(".task").last().click(function() {
      $("#show-task").fadeIn();
      $("#show-task h2").text(newTask.description);
      $(".task-description").text(newTask.description);
    });

    $("input#new-task-description").val("");
  });
});
