<?php
declare(strict_types=1);

$app = \Dux\App::create(dirname(__DIR__));
uses()->beforeEach( hook: function () use ($app): void {
    $this->setUpApp($app->web);
})->in(dirname(__DIR__));

