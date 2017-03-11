// ПЕРЕВОРОТ КАРТОЧКИ
$(function() {
    $(".flip").flip({
        trigger: 'hover'
    });
});


// Функция для кнопок
var i;
i = -1;

function next() {


    a[i];
    b[i];
    t[i];
    if (i == a.length - 1) {
        i = -1;
    } else {
        i++
    }
    $('.rus').html(a[i]);
    $('.eng').html(b[i]);
    $('.trans').html(t[i]);
    document.title = (b[i].toUpperCase());

}

function prev() {


    a[i];
    b[i];
    t[i];
    if (i == a.length < 1) {
        i = 0;
    } else {
        i--
    }
    $('.rus').html(a[i]);
    $('.eng').html(b[i]);
    $('.trans').html(t[i]);
    document.title = (b[i]).toUpperCase();

}


// Функция для поиска


$(function() {

    var c = a.concat(b);

    $("#search").autocomplete({
        max: 10,
        minLength: 2,
        selectOnly: true,
        autoFill: true,
        source: c,

        select: function(event, ui) {
            var ss = ($.inArray(ui.item.value, b));
            if (ss != -1) {
                $('.rus').html(a[ss]);
                $('.eng').html(b[ss]);
                $('.trans').html(t[ss]);
                i = ss;
                document.title = (b[ss].toUpperCase());
            } else {
                var ss = ($.inArray(ui.item.value, a));
                $('.rus').html(a[ss]);
                $('.eng').html(b[ss]);
                $('.trans').html(t[ss]);
                i = ss;
                document.title = (b[ss].toUpperCase());
            }
        }
    });
});





// -------------------- A --------------------
function abc_a() {
    if (i = 0) {
        function next() {

        }

    }
    $('.rus').html(a[0]);
    $('.eng').html(b[0]);
    document.title = (b[0]).toUpperCase();
}

// -------------------- B --------------------

function abc_b() {
    if (i = 542) {
        function next() {

        }

    }
    $('.rus').html(a[542]);
    $('.eng').html(b[542]);
    document.title = (b[542]).toUpperCase();
}

// -------------------- C --------------------

function abc_c() {
    if (i = 1025) {
        function next() {

        }

    }
    $('.rus').html(a[1025]);
    $('.eng').html(b[1025]);
    document.title = (b[1025]).toUpperCase();
}

// -------------------- D --------------------

function abc_d() {
    if (i = 1785) {
        function next() {

        }

    }
    $('.rus').html(a[1785]);
    $('.eng').html(b[1785]);
    document.title = (b[1785]).toUpperCase();
}

// -------------------- E --------------------

function abc_e() {
    if (i = 2297) {
        function next() {

        }

    }
    $('.rus').html(a[2297]);
    $('.eng').html(b[2297]);
    document.title = (b[2297]).toUpperCase();
}

// -------------------- F --------------------

function abc_f() {
    if (i = 2653) {
        function next() {

        }

    }
    $('.rus').html(a[2653]);
    $('.eng').html(b[2653]);
    document.title = (b[2653]).toUpperCase();
}

// -------------------- G --------------------

function abc_g() {
    if (i = 3057) {
        function next() {

        }

    }
    $('.rus').html(a[3057]);
    $('.eng').html(b[3057]);
    document.title = (b[3057]).toUpperCase();
}

// -------------------- H --------------------

function abc_h() {
    if (i = 3308) {
        function next() {

        }

    }
    $('.rus').html(a[3308]);
    $('.eng').html(b[3308]);
    document.title = (b[3308]).toUpperCase();
}

// -------------------- I --------------------

function abc_i() {
    if (i = 3618) {
        function next() {

        }

    }
    $('.rus').html(a[3618]);
    $('.eng').html(b[3618]);
    document.title = (b[3618]).toUpperCase();
}

// -------------------- J --------------------

function abc_j() {
    if (i = 3925) {
        function next() {

        }

    }
    $('.rus').html(a[3925]);
    $('.eng').html(b[3925]);
    document.title = (b[3925]).toUpperCase();
}

// -------------------- K --------------------

function abc_k() {
    if (i = 4004) {
        function next() {

        }

    }
    $('.rus').html(a[4004]);
    $('.eng').html(b[4004]);
    document.title = (b[4004]).toUpperCase();
}

// -------------------- L --------------------

function abc_l() {
    if (i = 4057) {
        function next() {

        }

    }
    $('.rus').html(a[4057]);
    $('.eng').html(b[4057]);
    document.title = (b[4057]).toUpperCase();
}

// -------------------- M --------------------

function abc_m() {
    if (i = 4318) {
        function next() {

        }

    }
    $('.rus').html(a[4318]);
    $('.eng').html(b[4318]);
    document.title = (b[4318]).toUpperCase();
}

// -------------------- N --------------------

function abc_n() {
    if (i = 4684) {
        function next() {

        }

    }
    $('.rus').html(a[4684]);
    $('.eng').html(b[4684]);
    document.title = (b[4684]).toUpperCase();
}

// -------------------- O --------------------

function abc_o() {
    if (i = 4838) {
        function next() {

        }

    }
    $('.rus').html(a[4838]);
    $('.eng').html(b[4838]);
    document.title = (b[4838]).toUpperCase();
}

// -------------------- P --------------------

function abc_p() {
    if (i = 5013) {
        function next() {

        }

    }
    $('.rus').html(a[5013]);
    $('.eng').html(b[5013]);
    document.title = (b[5013]).toUpperCase();
}

// -------------------- Q --------------------

function abc_q() {
    if (i = 5623) {
        function next() {

        }

    }
    $('.rus').html(a[5623]);
    $('.eng').html(b[5623]);
    document.title = (b[5623]).toUpperCase();
}

// -------------------- R --------------------

function abc_r() {
    if (i = 5653) {
        function next() {

        }

    }
    $('.rus').html(a[5653]);
    $('.eng').html(b[5653]);
    document.title = (b[5653]).toUpperCase();
}

// -------------------- S --------------------

function abc_s() {
    if (i = 6100) {
        function next() {

        }

    }
    $('.rus').html(a[6100]);
    $('.eng').html(b[6100]);
    document.title = (b[6100]).toUpperCase();
}

// -------------------- T --------------------

function abc_t() {
    if (i = 7038) {
        function next() {

        }

    }
    $('.rus').html(a[7038]);
    $('.eng').html(b[7038]);
    document.title = (b[7038]).toUpperCase();
}

// -------------------- U --------------------

function abc_u() {
    if (i = 7459) {
        function next() {

        }

    }
    $('.rus').html(a[7459]);
    $('.eng').html(b[7459]);
    document.title = (b[7459]).toUpperCase();
}

// -------------------- V --------------------

function abc_v() {
    if (i = 7581) {
        function next() {

        }

    }
    $('.rus').html(a[7581]);
    $('.eng').html(b[7581]);
    document.title = (b[7581]).toUpperCase();
}

// -------------------- W --------------------

function abc_w() {
    if (i = 7698) {
        function next() {

        }

    }
    $('.rus').html(a[7698]);
    $('.eng').html(b[7698]);
    document.title = (b[7698]).toUpperCase();
}

// -------------------- X --------------------

function abc_x() {
    if (i = 4456) {
        function next() {

        }

    }
    $('.rus').html(a[4456]);
    $('.eng').html(b[4456]);
    document.title = (b[4456]).toUpperCase();
}

// -------------------- Y --------------------

function abc_y() {
    if (i = 7963) {
        function next() {

        }

    }
    $('.rus').html(a[7963]);
    $('.eng').html(b[7963]);
    document.title = (b[7963]).toUpperCase();
}

// -------------------- Z --------------------

function abc_z() {
    if (i = 7992) {
        function next() {

        }

    }
    $('.rus').html(a[7992]);
    $('.eng').html(b[7992]);
    document.title = (b[7992]).toUpperCase();
}


//-------------------- RANDOM BUTTON --------------------
function rand() {


    var r = Math.random();
    var rne = b[Math.round(r * b.length)];
    var rnr = a[Math.round(r * a.length)];
    var trs = t[Math.round(r * t.length)];

    
    $('.eng').html(rne);
    $('.rus').html(rnr);
    $('.trans').html(trs);

    document.title = (rne).toUpperCase();
    i = Math.round(r * b.length);
}

// -----------------------------PRELOADER------------


$(window).on('load', function() {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(700).fadeOut('slow');
});


// ---------------------PLAY-------------------------

var voice = function() {
    var text = $("#fp").html();
    var audio = document.getElementById('audio');


    var url = 'https://tts.voicetech.yandex.net/generate?' +
        'key=4f203b1a-e0bc-4aa9-8596-939e39d5b49d' +
        '&text=' + encodeURI(text) +
        '&format=wav' +
        '&lang=en-En' +
        '&speaker=omazh';

    audio.src = url;
    audio.load();
    audio.onloadeddata = function() {
        audio.play();
    };

};



// Размытие модального окна
$('#myModal').on('show.bs.modal', function () {
   $('.container').addClass('blur');
})

$('#myModal').on('hide.bs.modal', function () {
   $('.container').removeClass('blur');
})





// ToolTip

   