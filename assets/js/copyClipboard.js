
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    // alert("Texto copiado: " + $temp.val());
    const alertHTML = '<div class="alert alert-success alert-dismissible fade show" style="margin-top:1%; margin-left:20%; margin-right:20%"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Copiado! : </strong>'+$temp.val()+'</div>';
    // document.body.insertAdjacentHTML('beforeend', alertHTML);
    $temp.remove();
}