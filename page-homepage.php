<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Game_Boy
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="entry-content">

		<?php

			//SHOW TWITCH
			if (get_option('twitch_enable') != "true") :

				$posts = get_posts( array(
					'posts_per_page'      => 1,
					'post_type' 		  => 'post',
					'suppress_filters'    => true,
					'ignore_sticky_posts' => 1,
				) );

				foreach ( $posts as $post ) :

					$stats = get_post_meta( $post->ID, 'game_stats', true );
					if ( ! empty ( $stats['youtube_id'] ) ): ?>
						<!--<h2><?php echo get_the_date('Y-m-d H:m', $post->ID); ?></h2>-->

						<div class="video wrapper">
							<iframe width="742" height="417" src="https://www.youtube.com/embed/<?php echo $stats['youtube_id']; ?>" frameborder="0" allowfullscreen></iframe>
						</div>

						<script>
							( function( $ ) {
								$( document ).ready(function() {
									$("li.post-<?php echo $post->ID; ?>").addClass( 'active' );
								});
							})( jQuery );
						</script>

					<?php endif; ?>

				<?php endforeach; ?>

			<?php else : ?>

				<iframe src="http://www.twitch.tv/drofrehturgnahc/embed" frameborder="0" scrolling="no" height="417" width="742"></iframe>

			<?php endif; ?>

			</div><!-- .entry-content -->
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
