<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    public function store(ReservationRequest $request)
    {

       $data =  $request->validated();

       return 'ok';

        // Mail::send('email-template', $data,
        //     function ($message) {
        //             $message->from(env('MAIL_USERNAME'));
        //             $message->to(env('MAIL_USERNAME'))
        //             ->subject('Nowa rezerwacja');
        // });
    }
}
