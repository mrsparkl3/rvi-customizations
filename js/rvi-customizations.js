var RVI_customizations = {
  config: {
    regions: [
         'horn of africa',
         'sudan and south sudan',
         'great lakes',
         'east africa'
        ],
 },
  init: function() {
      console.log("GDP Hero"), this.assignClasses()
  },

  assignClasses: function(){
   jQuery('a.elementor-post-info__terms-list-item').each(function(el, ind){
    let label = $(this).text().toLowerCase();
    
    let found = this.config.regions.find(label);
    if(found !== undefined){
        $(this).addClass('taxonomy-' + label);
    }
    });
  },

};

jQuery(document).ready(function() {
  RVI_customizations.init()
});

//on FacetWP loaded
(function($) {
  $(document).on('facetwp-loaded', function() {
      if (FWP.loaded) {
        //this.init();
        RVI_customizations.init();
      }
  });
})(jQuery);