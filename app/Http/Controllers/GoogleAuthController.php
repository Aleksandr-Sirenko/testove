<?php

namespace App\Http\Controllers;

use Socialite;
use Auth;
use Exception;
use App\Models\User;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }
       
    public function callback()
    {
        $userGoogle = Socialite::driver('google')->stateless()->user();

        $user = User::updateOrCreate([
            'social_id' => $userGoogle->id,
            'social_type' => 'google'
        ], [
            'name' => $userGoogle->name,
            'email' => $userGoogle->email,
            'password' => encrypt('google'),
            'social_token' => $userGoogle->token,
            'social_refresh_token' => $userGoogle->refreshToken,
        ]);
 
        Auth::login($user);

        return redirect()->route('dashboard');
    }
}
