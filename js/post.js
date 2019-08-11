

var likings = 0;


$('#likeBtn').click(function(){
    likings++;
    $('#like').html(" Liked!");
   
    if(likings === 1){
        $('#likes-count').text(likings + " person likes this!");
    }
    
    else {
        $('#likes-count').text(likings + " people have liked this!");
    }  
});




$('#comment-Button').click(function(){
    
    if($('#comment-textarea').val() !== ""){

        var comment = $('#comment-textarea').val();
        var template = '<div class="comment">' + comment + '</div>';
        var previous = document.getElementById("comments-container").innerHTML;
        document.getElementById("comments-container").innerHTML = template + previous;

        $('#comment-textarea').val("");
    }
    else{
        $("#when_null").show();
        setTimeout(function() { $("#when_null").hide(); }, 4000);
    }
});




$('#editButton').click(function(){
    if($('#edit-toggle').html()==="Edit "){
      
        $('#editButton').html('<span id="edit-toggle">Save </span><i class="fa fa-save"></i>');

        
        $('#blogBody').attr('contentEditable', 'true');
        $('#blogBody').addClass('editable');
        $('#blogBody').trigger('focus');
       
        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToEnd();

       
        $('#blogTitleNew').attr('contentEditable', 'true');
        $('#blogTitleNew').addClass('editable');
    }
    else{
      
        $('#editButton').html('<span id="edit-toggle">Edit </span><i class="fa fa-edit"></i>');

       
        $('#blogBody').attr('contentEditable', 'false');
        $('#blogBody').removeClass('editable');

       
        $('#blogTitleNew').attr('contentEditable', 'false');
        $('#blogTitleNew').removeClass('editable');
    }
});