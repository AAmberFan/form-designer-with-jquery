
$(document).ready(function(){
    //for the delete button
   $(".delete").click(function () {
       $(this).parent().remove();
   });

    let cancleAdd = function(){
       $("#addForm").toggle();
        $("input").val('');
    };
   $("#addButton").click(cancleAdd);

   $("#select").change(function () {
       let textTpye = $('#select option:selected');
       if(textTpye.val()==='Text'){
           $("#addText").datepicker("destroy");
       }else if(textTpye.val()==='Date'){
           $("#addText").datepicker({
               dateFormat: 'yy-mm-dd'
           });
       }
   });
   $(".confirm").click(function () {
       if($("#addText").val()==''){
           $("#addText").after("<i>required</i>");
       }
   });


});