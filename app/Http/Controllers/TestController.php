<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TestController extends BaseController
{
	public function testRoute(Request $request)
	{
		User::create([
	        'name' => $request->input('name'),
        	'email' => $request->input('email'),
        	'password' => Hash::make($request->input('password'))
		]);
	}
}
