$(function () {
    var mobile = false;
    if ((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || (typeof window.orientation !== 'undefined'))
        mobile = true;

    var layers = ['top', 'middle', 'bottom']; // names of layer files

    if (!mobile) {
        for (var i = 0; i < layers.length; ++i) {

            // build up features
            var features_html = '<div class="features" id="f' + i + '">';
            for (var j = 0; j < features[i].length; ++j) {
                var feature = features[i][j];
                feat_data = 'data-name="' + feature.name + '"';
                feat_data += 'data-desc="' + feature.description + '"';
                features_html += '<div id="f_' + i + '_' + j + '" class="feat_dot" ' + feat_data + '></div>';
            }
            features_html += '</div>';

            $('#expand-info').append(features_html);

            var name = layers[i];
            var image_html = '<img class="expand-image" src="./img/sh-layers/' + name + '.png">';
            var layer_html = '<div class="expand-container" id="ei-' + i + '">' + image_html + '</div>'
            $('#expand-view').append(layer_html);

            // ei stands for expand image
            $("#ei-" + i).css('z-index', 980 - i);

            // update features
            for (var j = 0; j < features[i].length; ++j) {
                var feature = features[i][j];

                var width = $("#ei-" + i).width();
                var $this = $('#f_' + i + '_' + j);
                $this.css('left', width * feature.location[0] + 'px');
                $this.css('top', width * feature.location[1] + 'px');
            }
        }

        var expanded = false;

        // make the #house section bigger when expanded
        $(window).on('scroll', function () {
            var top = $(window).scrollTop();

            var toView = $('#house').offset().top - top;
            if (!expanded && toView < -10) {
                $("#expand-view").addClass('expanded');
                expanded = true;
            }
            if (expanded && toView > -150) {
                $("#expand-view").removeClass('expanded');
                expanded = false;
            }

        });

    } else {

    }
})
