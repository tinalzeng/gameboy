<?php
/*
Custom listing widget
*/

class Gameboy_Widget extends WP_Widget {

	function __construct() {
		parent::__construct( false, __('Tetris Scores', 'gameboy') );
	}

	function widget( $args, $instance ) {
		$cache_key = 'gameboy_post_list';
		$posts_array = get_transient( $cache_key );
		if ( empty ( $post_array ) ) :
			$posts_array = array();
			$posts = get_posts( array(
				'posts_per_page'      => 5000,
				'suppress_filters'    => true,
				'ignore_sticky_posts' => 1,
			) );
			foreach ( $posts as $post ) :
				$game_stats = get_post_meta( $post->ID, 'game_stats', true );
				if ( ! empty ( $game_stats ) ) :
					$posts_array[] = array( 'id' => $post->ID, 'date' => get_the_date( "YmdHis", $post->ID ), 'points' => $game_stats['points'], 'date_formated' => get_the_date( "m/d/y G:i", $post->ID ) );
				endif;
			endforeach;
			set_transient( $cache_key, $posts_array );
		endif; ?>

		<a id="order_date" href="#">Date &#xe601</a><a id="order_points" href="#">Points &#xe602</a>
		<ul>
		<?php foreach ( $posts_array as $post ) : ?>
			<li class="sortable post-<?php echo $post['id']; ?>" points="<?php echo $post['points']; ?>" date="<?php echo $post['date']; ?>"><a href="<?php echo get_permalink( $post['id'] );?>"><span class="date"><?php echo $post['date_formated']; ?></span> <span class="points"><?php echo number_format( $post['points'] ); ?></span></a></li>
		<?php endforeach; ?>
		</ul>
		<?php
	}

}

function gameboy_load_widgets() {
	register_widget("Gameboy_Widget");
}
add_action("widgets_init", "gameboy_load_widgets");

function gameboy_clear_post_list_transient( $newstatus, $oldstatus, $post ) {

	if ( 'publish' === $newstatus || 'publish' === $oldstatus ) {
		$cache_key = 'gameboy_post_list';
		delete_transient( $cache_key );
	}

}
add_action( 'transition_post_status', 'gameboy_clear_post_list_transient', 10, 3 );