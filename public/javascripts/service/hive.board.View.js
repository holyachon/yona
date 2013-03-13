/**
 * @(#)hive.board.View.js 2013.03.11
 *
 * Copyright NHN Corporation.
 * Released under the MIT license
 * 
 * http://hive.dev.naver.com/license
 */

(function(ns){
	
	var oNS = $hive.createNamespace(ns);
	oNS.container[oNS.name] = function(htOptions){
		
		var htVar = {};
		var htElements = {};

		/**
		 * initialize
		 * @param {Hash Table} htOptions
		 */
		function _init(htOptions){
			_initVar(htOptions || {});
			_initElement(htOptions || {});

			_initFileUploader();
			_initFileDownloader();
		}

		/**
		 * initialize variables except HTML Element
		 */
		function _initVar(htOptions){
			htVar.sTplFileItem = $('#tplAttachedFile').text();
			htVar.sAction = htOptions.sAction;
		}
		
		/**
		 * initialize HTML Element variables
		 */
		function _initElement(htOptions){
			htElements.welTarget = $("#upload");
			htElements.welTextarea = $("#contents");
			
			htElements.welAttachments = $(".attachments");			
		}

		/**
		 * initialize fileUploader
		 */
		function _initFileUploader(){
			fileUploader.init({
				"elTarget": htElements.welTarget,
				"elTextarea": htElements.welTextarea,
				"sTplFileItem": htVar.sTplFileItem,
				"sAction": htVar.sAction
			});
		}
		
		/**
		 * initialize fileDownloader
		 */
		function _initFileDownloader(){
			htElements.welAttachments.each(function(el){
				fileDownloader(el, htVar.sAction);
			});
		}
        
        _init(htOptions);
	};
	
})("hive.board.View");

nforge.namespace("board");
nforge.board.view = {
	"init": function(){
		hive.board.View();
	}
};

/*
nforge.namespace("board");
nforge.board.view = function() {
    var that = {
        "init" : function(filesUrl) {
            var attachments;

            fileUploader.init({
            	"elTarget"    : $('#upload'),   // upload area
            	"elTextarea"  : $('#contents'), // textarea
            	"sTplFileItem": $('#tplAttachedFile').text(),
            	"sAction"     : filesUrl
            });
            
            attachments = $('.attachments');
            for (var i = 0, nLength = attachments.length; i < nLength; i++) {
                fileDownloader($(attachments[i]), filesUrl);
            }
        }
    }

    return that;
};
*/