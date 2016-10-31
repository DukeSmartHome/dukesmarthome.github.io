$(function () {
    var mobile = false;
    if ((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || (typeof window.orientation !== 'undefined'))
        mobile = true;

    var layers = ['top', 'middle', 'bottom']; // names of layer files

    if (!mobile) {
        for (var i = 0; i < layers.length; ++i) {

            // build up features
            var features_html = '<div class="features e-' + i + '" id="f' + i + '">';
            for (var j = 0; j < features[i].length; ++j) {
                var feature = features[i][j];

                feat_info = '<div class="f-line"></div><div class="f-info"><div class="f-name">' + feature.name + '</div>';
                feat_info += '<div class="f-description">' + feature.description + '</div></div>';

                var feat_data = ' data-opened="false"';
                features_html += '<div class="feat_dot" id="f_' + i + '_' + j + '" ' + feat_data + '>' + feat_info + '</div>';
            }
            features_html += '</div>';

            $('#expand-info').append(features_html);

            // add image layers
            var name = layers[i];
            var image_html = '<img class="expand-image" src="./img/sh-layers/' + name + '.png">';
            var layer_html = '<div class="e-' + i + ' expand-container" id="ei-' + i + '">' + image_html + '</div>'
            $('#expand-view').append(layer_html);

            // ei stands for expand image
            $("#ei-" + i).css('z-index', 980 - i);

            // update features
            for (var j = 0; j < features[i].length; ++j) {
                var feature = features[i][j];

                var width = $("#ei-" + i).width();
                var $this = $('#f_' + i + '_' + j),
                    left = width * feature.location[0],
                    top = width * feature.location[1];
                $this.css('left', left + 'px');
                $this.css('top', top + 'px');

                var randomOffset = getRandom(0, 50);

                var infoOffset = randomOffset + width - left - 35,
                    lineWidth = infoOffset - 25,
                    infoShift = $this.children('.f-info').height() - 30;
                $this.children('.f-line').attr('data-width', lineWidth + 'px');
                $this.children('.f-info').css('margin-left', infoOffset + 'px');
                $this.children('.f-info').css('margin-top', -1 * infoShift + 'px');
            }
        }

        $('.feat_dot').on('click', function () {
            openFeature($(this));
            $(this).siblings('.feat_dot').each(function () {
                closeFeature($(this));
            });
        });

        function openFeature($this) {
            if ($this.attr('data-opened') == 'false') {
                var targetWidth = $this.children('.f-line').attr('data-width');
                $this.children('.f-line').css('width', targetWidth);
                $this.children('.f-info').fadeIn(500);
                $this.attr('data-opened', 'true');
            }
        }

        function closeFeature($this) {
            if ($this.attr('data-opened') == 'true') {
                $this.children('.f-line').css('width', '0px');
                $this.children('.f-info').fadeOut(0);
                $this.attr('data-opened', 'false');
            }
        }

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

        var expanded = false,
            firstTime = true;

        // make the #house section bigger when expanded
        $(window).on('scroll', function () {
            var top = $(window).scrollTop();

            var toView = $('#house').offset().top - top;
            if (!expanded && toView < -10) {
                $("#expand").addClass('expanded');
                expanded = true;

                if (firstTime) { // open default features if first time
                    for (var i = 0; i < layers.length; ++i)
                        openFeature($('#f_' + i + '_0'));
                    firstTime = false;
                }
            }
            if (expanded && toView > -150) {
                $("#expand").removeClass('expanded');
                expanded = false;
            }
        });


    } else { // for mobile devices

    }
})
