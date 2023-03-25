<?php

namespace Tests;

use Nekofar\Slim\Test\Traits\AppTestTrait;
use PHPUnit\Framework\TestCase as BaseTestCase;

class TestCase extends BaseTestCase
{
    use AppTestTrait;

    protected function setUp(): void
    {
        $app = \Dux\App::create(dirname(__DIR__));
        $this->setUpApp($app->web);
    }

    public function testHomePage(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('Welcome');
    }
}