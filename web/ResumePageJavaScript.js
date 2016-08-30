/* 
 * 
 */
$().ready(function () {
    $("#MDFE").hide();
    $("#Vogel").hide();
    $("#MDFE2").hide();
    $("#Vogel2").hide();



    $("#SEGIBtn").click(function () {
        $("#SEGI").show();
        $("#SEGI2").show();
        $("#MDFE").hide();
        $("#MDFE2").hide();
        $("#Vogel").hide();
        $("#Vogel2").hide();
    });

    $("#MDFEBtn").click(function () {
        $("#SEGI").hide();
        $("#SEGI2").hide();
        $("#MDFE").show();
        $("#MDFE2").show();
        $("#Vogel").hide();
        $("#Vogel2").hide();
    });

    $("#VEiBtn").click(function () {
        $("#SEGI").hide();
        $("#SEGI2").hide();
        $("#MDFE").hide();
        $("#MDFE2").hide();
        $("#Vogel").show();
        $("#Vogel2").show();
    });

});




