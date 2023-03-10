<?php

namespace tests;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Psr7\Factory\StreamFactory;
use Slim\Psr7\Headers;
use Slim\Psr7\Request as SlimRequest;
use Slim\Psr7\Uri;

class TestCase extends \PHPUnit\Framework\TestCase {

    public function setUp(): void {
        \Dux\App::create(__DIR__ . '/..');
        \Dux\App::db()->getConnection()->beginTransaction();
    }

    public function tearDown(): void {
        \Dux\App::db()->getConnection()->rollBack();
    }

    protected function createRequest(
        string $method,
        string $path,
        array $headers = ['HTTP_ACCEPT' => 'application/json'],
        array $cookies = [],
        array $serverParams = []
    ): Request {
        $uri = new Uri('', '', 80, $path);
        $handle = fopen('php://temp', 'w+');
        $stream = (new StreamFactory())->createStreamFromResource($handle);

        $h = new Headers();
        foreach ($headers as $name => $value) {
            $h->addHeader($name, $value);
        }
        return new SlimRequest($method, $uri, $h, $cookies, $serverParams, $stream);
    }

}