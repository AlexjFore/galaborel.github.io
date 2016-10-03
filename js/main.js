$(function () {
    var hp = 3;
    var fighting = false;
    var next_icon = "<i class='fa fa-arrow-right' aria-hidden='true'></i>";
    var punch_icon = "<i class='fa fa-hand-rock-o' aria-hidden='true'></i>";

    $(".message").html ("You encounter a wild TREE!");
    $(".primary-button").html (next_icon);

    display_hp (hp, 3);

    $(".primary-button").click (function() {
        if (fighting == true) {
            hp--;
            display_hp (hp, 3);

            if (hp <= 0) {
                $(".message").html ("You win!");
                fighting = false;
                $(".primary-button").html ("<i class='fa fa-thumbs-o-up' aria-hidden='true'></i>");
            }
        } else {
            if (hp > 0) {
                $(".message").html ("Punch it for no reason!");
                $(".primary-button").html (punch_icon);
                fighting = true;
            }
        }
    });
});

function display_hp (hp_current, hp_total) {
    $(".hp").html (null);

    var heart = "<i class='fa fa-heart' aria-hidden='true'></i>";
    var heart_open = "<i class='fa fa-heart-o' aria-hidden='true'></i>";

    for (var i = hp_current; i > 0; i--) {
        $(".hp").append (heart);
    }
    for (i = hp_total - hp_current; i > 0; i--) {
        $(".hp").append (heart_open);
    }
}
