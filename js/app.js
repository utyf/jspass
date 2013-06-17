$(function() {
    function update() {
        var hasher, bitResult, baseResult;

        hasher = new sjcl.misc.hmac(
            sjcl.codec.utf8String.toBits(
                $("#key").val()
            )
        );

        bitResult = hasher.encrypt(
            $("#target").val()
        );

        baseResult = sjcl.codec.base64.fromBits( bitResult );

        $("#key").val("");

        $("#output").val(
            baseResult.slice(2,14)
        ).focus()
         .each(function() {
            this.select();
         });

        
    }

    $("button").click(update);
    $("input").enter(update);
});

/**
 * Small plugin for enter press event
 */
$.fn.enter = function(callback) {
    $(this).keyup(function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();

            callback.call(this, e);
        }
    });
};
