<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Game_Boy
 * @since Twenty Fifteen 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
		// Post thumbnail.
		gameboy_post_thumbnail();
	?>

	<header class="entry-header">
		<?php
			if ( is_single() ) :
				//the_title( '<h1 class="entry-title">', '</h1>' );// deleted to get one single line h1.entry-title
			else :
				the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
			endif;
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			/* translators: %s: Name of current post */
			the_content( sprintf(
				__( 'Continue reading %s', 'gameboy' ),
				the_title( '<span class="screen-reader-text">', '</span>', false )
			) );

		?>
		<?php
		$stats = get_post_meta( get_the_ID(), 'game_stats', true );
		if ( ! empty ( $stats['youtube_id'] ) ):
		?>
		<h2><?php echo get_the_date('Y-m-d H:m', $post->ID); ?></h2>
		<iframe width="640px" height="360px" src="https://www.youtube.com/embed/<?php echo $stats['youtube_id']; ?>" frameborder="0" allowfullscreen></iframe>
		<?php endif; ?>


	</div><!-- .entry-content -->

</article><!-- #post-## -->