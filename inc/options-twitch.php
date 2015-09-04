<?php
// create custom plugin settings menu
add_action('admin_menu', 'twitch_create_menu');

function twitch_create_menu() {

	//create new top-level menu
	add_menu_page('Twitch Settings', 'Twitch Settings', 'administrator', __FILE__, 'twitch_settings_page' );

	//call register settings function
	add_action( 'admin_init', 'register_twitch_settings' );
}


function register_twitch_settings() {
	//register our settings
	register_setting( 'twitch-settings-group', 'twitch_enable' );
}

function twitch_settings_page() {
?>
<div class="wrap">
<h2>Twitch Settings</h2>

<form method="post" action="options.php">
    <?php settings_fields( 'twitch-settings-group' ); ?>
    <?php do_settings_sections( 'twitch-settings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">Enable Twitch on Homepage</th><td>

		<?php
			$checked = ' ';

			if (get_option('twitch_enable') == "true") {
				$checked = ' checked="checked" ';
			}
			else {
				$checked = ' ';
			}
			echo '<input type="checkbox" name="twitch_enable" value="true" '.$checked."/>\n";

		?>
		</td>
        </tr>
    </table>

    <?php submit_button(); ?>

</form>
</div>
<?php } ?>