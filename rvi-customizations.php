<?php
/*
Plugin Name:    RVI Customizations
Plugin URI:     https://github.com/mrsparkl3/rvi-customizations
Description:    Plugin for Wordpress RVI - customizations of style and js
Version:        1.0
Author:         Level73
Author URI:     https://level73.it
License:        MIT
*/

define( "RVI_CUSTOMIZATIONS_PLUGIN_PATH", plugin_dir_path( __FILE__ ) );
define( "RVI_CUSTOMIZATIONS_URL_PATH", plugin_dir_url( __FILE__ ) );

require_once (RVI_CUSTOMIZATIONS_PLUGIN_PATH . 'rvi-customizations.class.php');

$RVIPlugin = new RVIPlugin();