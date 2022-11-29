<?php

class RVIPlugin
{
    public function __construct()
    {
      /** Enqueue Front-end scripts and CSS */
      add_action('wp_enqueue_scripts', array($this, 'rvi_customizations_frontend_scripts'));
    }

    public function rvi_customizations_frontend_scripts()
    {
      wp_enqueue_style('rvi_customizations_css', plugin_dir_url(__FILE__) . 'css/rvi-customizations.css');
      // Javascript
      wp_enqueue_script('rvi_customizations_js', plugin_dir_url(__FILE__) . 'js/rvi-customizations.js', $in_footer = true);
    }


}