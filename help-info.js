"use static";

(function() {
    var HELP_TEXT = [
        [
            '<h2>Opening files</h2>',
            'Press one of the following combinations, and you can then open a file within an explorer',
            '',
            '   shift + a, allows opening a file in the 1st explorer',
            '   shift + s, allows opening a file in the 2nd explorer',
            '   shift + d, allows opening a file in the 3rd explorer',
            '   shift + e, allows opening a file in the 4th explorer',
            '   shift + f, allows opening a file in the 5th explorer',
            '   shift + g, allows opening a file in the 6th explorer',
            '   shift + h, allows opening a file in the 7th explorer',
            '   shift + j, allows opening a file in the 8th explorer',
            '   shift + k, allows opening a file in the 9th explorer',
            '   shift + l, allows opening a file in the 10th explorer',
            '',
            'Then you type the name of the file/folder to open, and once matched, it opens.'
        ],
        [
            '<h2>The cursor</h2>',
            'A file is always focused within the explorers, and you can move this around,' + 
                    'allowing you to copy/paste/open files.',
            '',
            '   y, copies the selected file or folder',
            '   u, cuts the selected file or folder',
            '   i, opens selected file or folder',
            '   o, opens selected file/folder, using the alternative option, if available.',
            '   p, pastes the cut or copied file or folder.',
            '',
            '   h, moves the cursor to the next explorer on the left',
            '   j, moves the cursor down',
            '   k, moves the cursor up',
            '   l, moves the cursor to the next explorer on the right',
            '',
            '   n, deletes the file or folder',
            '   m, renames the file or folder'
        ]
    ];

    window.greekCore = window.greekCore || {};
    window.greekCore.HelpOverlay = function() {
        var dom = document.createElement('div');
        dom.className = 'greek-help-overlay';

        var html = '';
        for ( var i = 0; i < HELP_TEXT.length; i++ ) {
            html += '<div class="greek-help-overlay-page">' +
                        HELP_TEXT[i].join('\n') +
                    '</div>' ;
        }

        dom.innerHTML = html;

        this.show = function() {
            dom.className = 'greek-help-overlay show';
        }

        this.hide = function() {
            dom.className = 'greek-help-overlay hide';
        }

        this.getDom = function() {
            return dom;
        }
    }
})();
