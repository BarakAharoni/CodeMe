$(document).ready(function ()
{
    $("#value").attr("value", 4);
    const btn1i = () => { $("#starButton1").css("color", "gold") };
    const btn2i = () => { btn1i(); $("#starButton2").css("color", "gold") };
    const btn3i = () => { btn2i(); $("#starButton3").css("color", "gold") };
    const btn4i = () => { btn3i(); $("#starButton4").css("color", "gold") };
    const btn5i = () => { btn4i(); $("#starButton5").css("color", "gold") };

    const btn1f = () => { $("#starButton1").css("color", "black") };
    const btn2f = () => { btn1f(); $("#starButton2").css("color", "black") };
    const btn3f = () => { btn2f(); $("#starButton3").css("color", "black") };
    const btn4f = () => { btn3f(); $("#starButton4").css("color", "black") };
    const btn5f = () => { btn4f(); $("#starButton5").css("color", "black") };

    $("#starButton1").hover(btn1i, btn1f);
    $("#starButton2").hover(btn2i, btn2f);
    $("#starButton3").hover(btn3i, btn3f);
    $("#starButton4").hover(btn4i, btn4f);
    $("#starButton5").hover(btn5i, btn5f);

    $("#starButton1").click(function () { $("#value").attr("value", "1"); });
    $("#starButton2").click(function () { $("#value").attr("value", "2"); });
    $("#starButton3").click(function () { $("#value").attr("value", "3"); });
    $("#starButton4").click(function () { $("#value").attr("value", "4"); });
    $("#starButton5").click(function () { $("#value").attr("value", "5"); });

    $("#add").submit(function (event)
    {
        event.preventDefault();
        $.ajax
        ({
            url: "http://localhost:6969/comments",
            type: "POST",
            data: $("#add").serialize(),
            success: function (data) { $(document.body).html(data); }
        });
    });
});