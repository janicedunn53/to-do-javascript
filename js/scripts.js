var lists = {};

$(document).ready(function() {

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var newTaskDescription = $("input#new-task-description").val();
    var newTaskList = $("select#list-select").val();
    var newTask = { description: newTaskDescription, list: newTaskList };
    lists[newTaskList].tasks.push(newTask);

    $('ul#tasks').append('<li><span class="task">' + newTask.description + "</span></li>")

    $(".task").last().click(function() {
      $("#show-task").fadeIn();
      $("#show-task h2").text(newTask.description);
      $(".assigned-list").text(newTask.list);
    });

    $("input#new-task-description").val("");
  });

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var newListName = $("input#new-list-name").val();
    var newList = { name: newListName, tasks: [] };
    lists[newList.name] = newList;
    showLists();

    $('ul#lists').append('<li><span class="list">' + newList.name + "</span></li>")

    $(".list").last().click(function() {
      $("#show-list").fadeIn();
      $("#show-list h2").text(newList.name);
      $("#list-tasks").html("");
      newList.tasks.forEach(function(task) {
        $("#list-tasks").append("<li>" + task.description + "</li>");
      });
    });

    $("input#new-list-name").val("");
  });
});

var showLists = function() {
  $("#list-select").html("");
  for (var listName in lists) {
    $("#list-select").append('<option value="' + listName + '">' + listName + '</option>');
  }
}
