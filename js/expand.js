$(function () {
    var mobile = false;
    if ((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || (typeof window.orientation !== 'undefined'))
        mobile = true;

    var layers = ['top', 'middle', 'bottom'], // names of layer files
        featTop = [56, 70, 85]; // position feature box is placed at

    for (var i = 0; i < layers.length; ++i) {

        // add image layers
        var name = layers[i];
        var image_html = '<img class="expand-image" src="./img/sh-layers/' + name + '.png">';

        // build up features
        var features_html = '';

        for (var j = 0; j < features[i].length; ++j) {
            var feature = features[i][j];

            feat_info = '<div class="feat-line"></div><div class="feat-v-line"></div><div class="feat-info"><div class="feat-name">' + feature.name + '</div>';
            feat_info += '<div class="feat-description">' + feature.description + '</div></div>';

            var feat_data = ' data-opened="false"';
            features_html += '<div class="feat-dot" id="f_' + i + '_' + j + '" ' + feat_data + '>' + feat_info + '</div>';
        }
        features_html += '<div class="feat-vline"></div><div class="feat-box" style="top: ' + featTop[i] + '%;"></div>'; // incorporate feature box

        // put it all together
        var layer_html = '<div class="e-' + i + ' expand-container" id="ei-' + i + '">' + image_html + features_html + '</div>'
        $('#expand-view').append(layer_html);

        // ei stands for expand image
        $("#ei-" + i).css('z-index', 980 - i);
        
        // update feature dot positions
        for (var j = 0; j < features[i].length; ++j) {

            var feature = features[i][j],
                $this = $('#f_' + i + '_' + j), // the current feature dot
                $fLine = $this.children('.feat-line'),
                $fInfo = $this.children('.feat-info'),
                left = 100 * feature.location[0],
                top = 100 * feature.location[1];

            // set feature dot location
            $this.css('left', left + '%');
            $this.css('top', top + '%');

            var width = $("#expand-view").width(),
                height = $("#expand-view").height();

            $this.attr('data-vline-height', featTop[i] - top);
            $this.attr('data-top', top);
            $this.attr('data-left', left);

            if (!vertMode) {
                var randomOffset = getRandom(0, 50);
                var infoOffset = randomOffset + (width - (width * feature.location[0]) - 35),
                    lineWidth = infoOffset - 25,
                    infoShift = -$fInfo.height() / 5;
                
                if(top < 50) // adjust for info boxes close to top
                    infoShift = -(4/5)*$fInfo.height();
                
                $fLine.attr('data-width', lineWidth + 'px');
                $fInfo.css('left', infoOffset + 'px');
                $fInfo.css('bottom', infoShift + 'px');
            }
        }
    }

    // handle vertical horizontal mode switching
    var vertMode = $('.feat-box').is(":visible"),
        $window = $(window);

    function changeMode() {
        var windowsize = $window.width();
        if (!vertMode && windowsize <= 900) {
            vertMode = true;
            for (var i = 0; i < layers.length; ++i)
                resetDot($('#f_' + i + '_0'));
        }
        if (vertMode && windowsize > 900) {
            vertMode = false;
            for (var i = 0; i < layers.length; ++i)
                resetDot($('#f_' + i + '_0'));
        }
    }

    $window.resize(changeMode);

    var firstTime = true;

    // make the #house section bigger when expanded
    $(window).on('scroll', function () {

        if ($('#expand').offset().top - $(window).scrollTop() < 200) {
            $("#expand").addClass('expanded');

            if (firstTime) { // open default features if first time
                for (var i = 0; i < layers.length; ++i)
                    openFeature($('#f_' + i + '_0'));
                firstTime = false;
            }
        } else {
            $("#expand").removeClass('expanded');
        }
    });

    $('.feat-dot').on('click', function () {
        resetDot($(this));
    });


    function resetDot($this) { //combines open and close
        openFeature($this);
        $this.siblings('.feat-dot').each(function () {
            closeFeature($(this));
        });
    }

    function openFeature($this) {
        var $fLine = $this.children('.feat-line'),
            $fInfo = $this.children('.feat-info');

        // switch case for vertical view
        if (firstTime || vertMode) {
            var name = $fInfo.children('.feat-name').html(),
                desc = $fInfo.children('.feat-description').html(),
                $vline = $this.siblings('.feat-vline'),
                targetHeight = $this.attr('data-vline-height');
            $this.siblings('.feat-box').html('<div>' + name + '</div>' + desc);

            // update vertical line
            $vline.css('height', targetHeight + '%');
            $vline.css('top', $this.attr('data-top') + '%');
            $vline.css('left', $this.attr('data-left') + '%');
        }
        if (firstTime || !vertMode) {
            var targetWidth = $fLine.attr('data-width');

            // update horizontal line
            $fLine.css('width', targetWidth);
            $fInfo.css('opacity', 1);
        }
        $this.attr('data-opened', 'true');
    }

    function closeFeature($this) {
        if ($this.attr('data-opened') == 'true') {
            $this.children('.feat-line').css('width', '0px');
            $this.children('.feat-info').css('opacity', 0);
            $this.attr('data-opened', 'false');
        }
    }

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
})
