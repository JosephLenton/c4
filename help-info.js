"use static";

(function() {
    var HELP_TEXT = [
        [
            '<h2>Folder Commands</h2>',
            'These are commands you can use on folders. They work in a ' +
                '\'folder\' then \'command\' input.',
            '   n   Opens command line in the current folder.',
            '   m   Opens command line in the first folder of this project.',
            '   ,   Scrolls folder up.',
            '   .   Scrolls folder down.'
        ],

        [
            '<h2>Opening Files</h2>',
            'The keys a to l on the middle row open a file in the current row.',
            'a opens the first file, s the second, d the third, f the fourth, ' +
                'and so on.',
            '',
            'If you use shift on top of it, like shift-a or shift-s, then it ' +
                'will be opened using the alternative way (the \'alt\' command ' +
                'for that file).'
        ],

        [
            '<h2>Project Navigation</h2>',
            'This is for navigating the left side project pane.',
            '',
            'Projects can be selected using the 1 to 0 keys on the number row.',
            'There are also some commands that can be used to interact with projects.',
            '',
            '   q, switch between current and previously selected project',
            '   -, switch to previous project',
            '   +, switch to next project',
            '   enter, rename current project',
            '   backspace, delete currently selected project',
            '',
            'If you are skipping between projects quickly, like you tap - and + ' +
                'repeatedly to find the project you are after, then the \'q\' ' +
                'command will still only switch between the first and last.'
        ],

        [
            '<h2>File Search</h2>',
            '',
            '   /, allows you to enter a string which is searched for in the files in the current project.',
            '   j, moves down the results',
            '   k, moves up the results',
            '   o, opens the resulting file',
            '   shift-o, opens the resulting file with the alternative option'
        ],

        [
            '',
            'c4, by Joseph Lenton.'
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
            dom.className = 'c4-help-overlay show';
        }

        this.hide = function() {
            dom.className = 'c4-help-overlay hide';
        }

        this.getDom = function() {
            return dom;
        }
    }
})();
