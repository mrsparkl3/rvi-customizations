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
      console.log("RVI Customizations"), this.assignClasses()
  },

  assignClasses: function(){
   jQuery('a.elementor-post-info__terms-list-item').each(function(el, ind){
    let label = jQuery(this).text().toLowerCase();
    
    let found = this.config.regions.find(label);

    console.log(label);
    console.log(found);
    if(found !== undefined){
        jQuery(this).addClass('taxonomy-' + label);
    }
    });
  },

};

jQuery(document).ready(function() {
  RVI_customizations.init()
});

//on FacetWP loaded
(function(jQuery) {
  jQuery(document).on('facetwp-loaded', function() {
      if (FWP.loaded) {
        //this.init();
        RVI_customizations.init();
      }
  });
})(jQuery);