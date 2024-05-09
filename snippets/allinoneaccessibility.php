<?php if(option('debug') !== true && !kirby()->user()):?>
    <script defer data-domain="yourdomain.com" src="https://allinoneaccessibility.io/js/script.js"></script>
<script defer data-domain="<?= option('skynettechnologies.allinoneaccessibility.domain') ?? parse_url($kirby->url('index'))['host'] ?>" src="<?= option('skynettechnologies.allinoneaccessibility.scriptHost') ?? 'https://allinoneaccessibility.io' ?>/js/<?= option('skynettechnologies.allinoneaccessibility.scriptName') ?? 'allinoneaccessibility' ?>.js"></script>
<?php endif; ?>
<script id="aioa-adawidget" src="https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=420083&token=&t=0.31826311872414603&position="></script>

