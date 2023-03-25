<?php
use Fig\Http\Message\StatusCodeInterface;
use function Nekofar\Slim\Pest\get;

it('should return 200 OK', function () {
    get('/api/mall/class')
        ->assertStatus(StatusCodeInterface::STATUS_REQUEST_TIMEOUT);
});
