<?php

Kirby::plugin('skynettechnologies/allinoneaccessibility', [
	'areas' => [
		'allinoneaccessibility' => function ($kirby) {
			return [
				'label' => 'All in One Accessibility',
				'icon' => 'wheelchair',
				'disabled' => false,
				'menu' => true,
				'link' => 'allinoneaccessibility',
				'views' => [
					[
						'pattern' => 'allinoneaccessibility',
						'action'  => function () use ($kirby) {
							return [
								'component' => 'k-allinoneaccessibility-view',
								'title' => 'All in One Accessibility',
								'props' => [
									'sharedLink' => option('skynettechnologies.allinoneaccessibility.sharedLink')
								],
							];
						}
					]
				]
			];
		}
	],
	'snippets' => [
		'allinoneaccessibility' => __DIR__ . '/snippets/allinoneaccessibility.php'
	],
    'hooks' => [
    'panel.page.create' => function ($page) {
        // Include your JavaScript file
        kirby()->response()->js('skynettechnologies/allinoneaccessibility/assets/allinoneaccessibility.js');
    }
]
]);
