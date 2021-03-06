"use static";

(function() {
    var HELP_TEXT = [
        [
            '<h2>Navigation</h2>',
            '',
            '    -, +            Selects previous / next project.',
            '    q               Switches between current and previous project.',
            '    1, 2, 3, ...    Switches between projects.',
            '    w, e, r, ...    Selects folder within project.',
            '    a, s, d, ...    Opens file within current folder.',
            '',
            '    c               Opens explorer folder in the current folder.',
            '    n               Opens command line in the current selected folder.',
            '    m               Opens command line in the first folder of current project.',
            '    b               Creates a new file in the selected project/folder.',
            '    v               Creates a new folder in the selected project/folder.',
            '',
            '    \\               Refreshes the view of the current project.',
            '',
            '    enter           Rename current project.',
            '    backspace       Delete currently selected project.',
            ''
        ],

/*
 // todo
        [
            '<h2>File Search</h2>',
            '',
            '   /, allows you to enter a string which is searched for in the files in the current project.',
            '   j, moves down the results',
            '   k, moves up the results',
            '   o, opens the resulting file',
            '   shift-o, opens the resulting file with the alternative option'
        ],
*/

        [
            '',
            'c4 by Joseph Lenton.'
        ]
    ];

    var c4 = window.c4 || (window.c4 = {});
    var core  = c4.core   || (c4.core = {});

    core.HelpOverlay = function() {
        var dom = document.createElement('div');
        dom.className = 'c4-help-overlay';

        var html = '';
        for ( var i = 0; i < HELP_TEXT.length; i++ ) {
            html += '<div class="c4-help-overlay-page">' +
                        HELP_TEXT[i].join('\n') +
                    '</div>' ;
        }

        dom.innerHTML = html;

        this.show = function() {
            dom.className = 'c4-help-overlay c4-show';
        }

        this.hide = function() {
            dom.className = 'c4-help-overlay c4-hide';
        }

        this.getDom = function() {
            return dom;
        }
    }
})();
