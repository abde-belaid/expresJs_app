$(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });

    $('.edit').on('click', function () {
        $('#intituleFiliere').val($(this).data('intitule'))
        $('#codeFiliere').val($(this).data('code'))
        $('#XcodeFiliere').val($(this).data('code'))
    })

    $('.delete').on('click', function () {

        $('#codeFiliereS').val($(this).data('codesupp'))

    })
    $("#Suppressionmultiple").click('click', function () {
        var liste = []
        var checks = $(".checkboxs").toArray()
        var isOnechecked = $(".checkboxs:checked").val()
        if (checks.length && isOnechecked && confirm('voulez-vous vraiment supprimer definitivement ces filieres')) {


            checks.forEach(element => {
                if ($(element).is(':checked')) {
                    liste.push($(element).val())
                }
            });
            if (liste.length) {

                var val = liste.join('-')

                window.location = '/enotes/deleteAll/' + val
            }
        }
    })


});