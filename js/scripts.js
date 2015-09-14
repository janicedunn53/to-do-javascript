$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var newTaskDescription = $("input#new-task-description").val();
    var newTask = { description: newTaskDescription, list:  };

    $('ul#tasks').append('<li><span class="task">' + newTask.description + "</span></li>")

    $(".task").last().click(function() {
      $("#show-task").fadeIn();
      $("#show-task h2").text(newTask.description);
      $(".task-description").text(newTask.description);
    });

    $("input#new-task-description").val("");
  });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var newListName = $("input#new-list-name").val();
    var newList = { name: newListName };

    $('ul#lists').append('<li><span class="list">' + newList.name + "</span></li>")

    $(".list").last().click(function() {
      $("#show-list").fadeIn();
      $("#show-list h2").text(newList.name);
      $(".list-name").text(newList.name);
    });

    $("input#new-list-name").val("");
  });
});
