
$(document).ready(function(){
    //for the delete button
    $("#contentList").off("click",".delete").on("click",".delete",function () {
        $(this).parent().detach();
    });

    let cancleAdd = function(){
       $("#addForm").toggle();
        $("input").val('');
    };
   $("#addButton").click(cancleAdd);
   const addText = $("#addText");
   $("#select").change(function () {
       let textTpye = $('#select option:selected');
       if(textTpye.val()==='Text'){
           addText.datepicker("destroy");
       }else if(textTpye.val()==='Date'){
           addText.datepicker({
               dateFormat: 'yy-mm-dd'
           });
       }
   });
   $(".confirm").click(function () {
       if(addText.val()===''){
           addText.after("<i>required</i>");
       }else{
           let li = $('<li></li>');
           let span = $('<span></span>').text(addText.val()).addClass('textContent');
           let deleteButton = $("<button></button>").text('Delete').attr("type","button").addClass('delete');
           li.append(span,deleteButton);
           $("#contentList ul").append(li);
           $("input").val('');
       }
   });

   $("#preview").click(function () {

       $(".delete").toggle();
       $("#addButton").toggle();
       if($(this).text().trim()=== "Preview"){
           $(this).text("Edit");
       }else{
           $(this).text("Preview");
       }
   });
   $("#addButton2").click(function () {

       $("#addForm").dialog({

       });
   });

});