<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            $user = new User;
            $user->setPassword($data['password']);
            $user->fill($data);
        } catch ()
    }
}
